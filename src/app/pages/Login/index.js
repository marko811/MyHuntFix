import React, {Component} from 'react';
import {
  Platform,
  View,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView
} from 'react-native'
import styles from "./style"
import {Languages, Constants, Styles} from "@common"
import {Button,TextInput,Text,Separator} from '@components'

import {connect} from 'react-redux';
import {ActionCreators} from '@actions';
import {bindActionCreators} from 'redux';
import * as ActionTypes from '@actions/ActionTypes'
import Base from "../Base/Base"

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class Login extends Base {
  state = {
    name:Constants.TestAccount.name,
    pass:Constants.TestAccount.pass,
  }

  renderContent() {
    let {name,pass} = this.state
    let{type,message} = this.props

    return (
        <KeyboardAwareScrollView style={{backgroundColor:'black'}}>
            <View style={[styles.container,{minHeight:global.heightFullScreen}]}>
              <Image source={require('@images/ic_logo.png')} style={styles.logo}/>
              <View style={styles.loginForm}>
                  {type == ActionTypes.LOGIN_FAILURE && message.length > 0 && (
                    <View style={styles.messageWrap}>
                      <Text style={styles.message}>{message}</Text>
                    </View>
                  )}
                  <TextInput placeholder='Email' style={styles.input} autoCorrect={false} value={name} onChangeText={(name)=>this.setState({name})}/>
                  <TextInput placeholder='Password' secureTextEntry={true} style={styles.input} value={pass} onChangeText={(pass)=>this.setState({pass})}/>
                  <Button title="Enter" onPress={this.props.showHome} onPress={this.login.bind(this)}/>
                  <TouchableOpacity style={styles.btnForgot} onPress={this.props.goToForgotPass}>
                    <Text style={styles.btnForgotText}>Forgot your Password?</Text>
                  </TouchableOpacity>
              </View>
              <View>
                <Separator />
                <Text style={styles.label}>New to MyHuntFix?</Text>
                <TouchableOpacity style={styles.btnRegister} onPress={this.props.goToRegister}>
                  <Text style={styles.btnRegisterText}>Register</Text>
                </TouchableOpacity>
              </View>
            </View>
        </KeyboardAwareScrollView>
    );
  }

  login(){
    this.props.login(this.state.name,this.state.pass)
  }

  componentWillReceiveProps(nextProp){
    super.componentWillReceiveProps(nextProp)

    if (nextProp.type == ActionTypes.LOGIN_SUCCESS) {
      this.props.showHome()
    }
  }
}

function mapStateToProps(state) {
  return {
    isShowProgress: state.appReducers.isRequesting,
    type: state.appReducers.type,
    message: state.appReducers.message,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
