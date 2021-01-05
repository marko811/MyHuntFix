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

class Account extends Base {

  renderContent() {
    let {userInfo} = this.props
    return (
      <View style={styles.container}>

        <View style={styles.content}>
          <Text style={styles.label}>Email: <Text style={styles.info}>{userInfo.email}</Text></Text>
          <Button
            title="Change Email"
            style={styles.button}
            textStyle={styles.buttonText}
            onPress={this.props.changeMail}/>

          <Text style={styles.label}>Password: <Text style={styles.info}>**********</Text></Text>
          <Button
            title="Change Password"
            style={styles.button}
            textStyle={styles.buttonText}
            onPress={this.props.changePass}/>

          <Text style={styles.label}>Plan: <Text style={styles.info}>{userInfo.isSubbed == 1 ? "Subscribed" : "Unsubscribed"}</Text></Text>
          <View style={styles.row}>
            <Button
              title="Change Plan"
              style={styles.button}
              textStyle={styles.buttonText}
              onPress={this.props.changePlan}/>
            <Button
              title="Update payment info"
              style={[styles.button,{width:160}]}
              textStyle={styles.buttonText}
              onPress={this.props.updateCard}/>
          </View>
          <TouchableOpacity onPress={()=>this.props.cancelSubscription()} disabled={userInfo.isSubbed == 0}>
            <Text style={styles.btnCancel}>Cancel MemberShip</Text>
          </TouchableOpacity>
        </View>
        <Image source={require('@images/ic_logo.png')} style={styles.logo}/>
      </View>
    );
  }

  componentWillReceiveProps(nextProp){
    super.componentWillReceiveProps(nextProp)

    if(nextProp.type == ActionTypes.CANCEL_SUBSCRIPTION_FAILURE && nextProp.message.length > 0){
      Alert.alert("Error",nextProp.message)
    }

    if(nextProp.type == ActionTypes.CANCEL_SUBSCRIPTION_SUCCESS){
      Alert.alert("Info","Successfully unsubscribed.")
    }
  }
}

Account.defaultProps = {
  userInfo:{}
}

function mapStateToProps(state) {
  return {
    isShowProgress: state.appReducers.isRequesting,
    type: state.appReducers.type,
    message: state.appReducers.message,
    userInfo: state.appReducers.userInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
