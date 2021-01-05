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

class ChangePassword extends Base {

  state = {
    oldPassword:'',
    newPassword:'',
    confirmNewPassword:''
  }
  renderContent() {
    return (
      <KeyboardAwareScrollView style={{backgroundColor:'black'}}>
        <View style={[styles.container,{minHeight:global.heightScreen}]}>
        <Image source={require('@images/ic_logo.png')} style={styles.logo}/>
        <View style={styles.loginForm}>
            <Text style={styles.label}>Change Password</Text>
            <TextInput placeholder='Current Password' secureTextEntry={true} style={styles.input} value={this.state.oldPassword} onChangeText={(oldPassword)=>this.setState({oldPassword})}/>
            <TextInput placeholder='New Password' secureTextEntry={true} style={styles.input} value={this.state.newPassword} onChangeText={(newPassword)=>this.setState({newPassword})}/>
            <TextInput placeholder='Confirm New Password' secureTextEntry={true} style={styles.input} value={this.state.confirmNewPassword} onChangeText={(confirmNewPassword)=>this.setState({confirmNewPassword})}/>
            <Text style={styles.note}>Password must be 8-20 characters in length and contain 1 upper case, 1 lower case, 1 number, and 1 of the following special characters !@#$%^*()_+	Example: Myhunt3%</Text>
            <Button title="Update" style={styles.btnUpdate} onPress={this.changePassword}/>
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

    if(nextProp.type == ActionTypes.CHANGE_PASSWORD_FAILURE  && nextProp.message.length > 0){
      Alert.alert("Error",nextProp.message)
    }

    if(nextProp.type == ActionTypes.CHANGE_PASSWORD_SUCCESS){
      Alert.alert("Info","Password has changed successfully.")
      this.props.goBack()
    }
  }

  changePassword = ()=>{
    let {oldPassword,newPassword,confirmNewPassword} = this.state
    this.props.changePassword(oldPassword,newPassword,confirmNewPassword)
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

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
