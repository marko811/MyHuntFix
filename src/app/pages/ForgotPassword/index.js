import React, {Component} from 'react';
import {
  Platform,
  View,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native'
import styles from "./style"
import {Languages, Constants} from "@common"
import {Button,TextInput,Text,Separator} from '@components'

import {connect} from 'react-redux';
import {ActionCreators} from '@actions';
import {bindActionCreators} from 'redux';
import * as ActionTypes from '@actions/ActionTypes'
import Base from "../Base/Base"

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class ForgotPassword extends Base {
  state = {
    email:"",
    isSuccess:false
  }

  renderContent() {
    let {email} = this.state
    return (
      <KeyboardAwareScrollView style={{backgroundColor:'black'}}>
          <View style={[styles.container,{minHeight:global.heightFullScreen}]}>
          <View>
            <Image source={require('@images/ic_logo.png')} style={styles.logo}/>
            <Text style={styles.title}>Forgot Email/Password</Text>
          </View>
          <View style={styles.loginForm}>
              {this.state.isSuccess && (
                <View style={styles.message}>
                  <Text style={styles.title}>Email has been sent!</Text>
                </View>
              )}
              {!this.state.isSuccess && this.props.message.length > 0 && (
                <View style={styles.errorMsg}>
                  <Text style={styles.title}>{this.props.message}</Text>
                </View>
              )}
              <Text style={styles.note}>We will send you an email with instructions on how to reset your password.</Text>
              <TextInput placeholder='Email' style={styles.input} autoCorrect={false} value={email} onChangeText={(email)=>this.setState({email})}/>
              <Button
                title={this.state.isShowProgress ? "Sending Email" : "Enter"}
                onPress={this.props.showHome}
                onPress={this.forgotPassword.bind(this)}
                disabled={this.state.isSuccess}
                />
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

  forgotPassword(){
    this.props.resetPassword(this.state.email)
  }

  componentWillReceiveProps(nextProp){
    super.componentWillReceiveProps(nextProp)

    if(nextProp.type == ActionTypes.FORGOT_PASSWORD_FAILURE && nextProp.message.length > 0){
      this.setState({isSuccess:false})
    }

    if (nextProp.type == ActionTypes.FORGOT_PASSWORD_SUCCESS) {
      this.setState({isSuccess:true})
    }
  }
}

ForgotPassword.defaultProps = {
    message:''
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
