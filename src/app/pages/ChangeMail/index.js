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

class ChangeMail extends Base {

  state = {
    email:'',
    confirmEmail:''
  }
  renderContent() {
    return (
      <KeyboardAwareScrollView style={{backgroundColor:'black'}}>
        <View style={[styles.container,{minHeight:global.heightScreen}]}>
        <Image source={require('@images/ic_logo.png')} style={styles.logo}/>
        <View style={styles.loginForm}>
            <Text style={styles.label}>Change Email</Text>
            <TextInput placeholder='New Email' style={styles.input} value={this.state.email} onChangeText={(email)=>this.setState({email})}/>
            <TextInput placeholder='Confirm New Email' style={styles.input} value={this.state.confirmEmail} onChangeText={(confirmEmail)=>this.setState({confirmEmail})}/>
            <Button title="Update" style={styles.btnUpdate} onPress={this.changeMail.bind(this)}/>
            <TouchableOpacity style={styles.btnCancel} onPress={this.props.goBack}>
              <Text style={styles.btnCancelText}>Cancel</Text>
            </TouchableOpacity>
        </View>
      </View>
      </KeyboardAwareScrollView>
    );
  }

  componentWillReceiveProps(nextProp){
    super.componentWillReceiveProps(nextProp)

    if(nextProp.type == ActionTypes.CHANGE_MAIL_FAILURE  && nextProp.message.length > 0){
      Alert.alert("Error",nextProp.message)
    }

    if(nextProp.type == ActionTypes.CHANGE_MAIL_SUCCESS){
      Alert.alert("Info","Email has changed successfully.")
      this.props.goBack()
    }
  }

  changeMail(){
    let {email,confirmEmail} = this.state
    this.props.changeMyMail(email,confirmEmail)
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

export default connect(mapStateToProps, mapDispatchToProps)(ChangeMail);
