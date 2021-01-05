import React, {Component} from 'react';
import {
  Platform,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert
} from 'react-native'
import styles from "./style"
import {Languages, Constants, Styles} from "@common"
import {Button,TextInput,Text,Separator,WebView} from '@components'

import {connect} from 'react-redux';
import {ActionCreators} from '@actions';
import {bindActionCreators} from 'redux';
import * as ActionTypes from '@actions/ActionTypes'
import Base from "../Base/Base"
import HTMLView from 'react-native-htmlview';

class FAQ extends Base {

  renderContent() {
    let {faq} = this.props
    return (
      <View style={styles.container}>
        <Image source={require('@images/ic_logo.png')} style={styles.logo}/>
        <Text style={styles.label}>FAQ</Text>
        <Separator />
        <ScrollView style={styles.content}>
          <WebView html={faq.body}/>
        </ScrollView>
      </View>
    );
  }

  componentWillReceiveProps(nextProp){
    super.componentWillReceiveProps(nextProp)

    if(nextProp.type == ActionTypes.GET_FAQ_FAILURE  && nextProp.message.length > 0){
      Alert.alert("Error",nextProp.message)
    }
  }

  componentDidMount(){
    setTimeout(()=>{
      this.props.faq.body.length == 0 && this.props.getFAQ()
    },500)

  }
}

FAQ.defaultProps = {
  faq:{
    body:''
  }
}

function mapStateToProps(state) {
  return {
    isShowProgress: state.appReducers.isRequesting,
    type: state.appReducers.type,
    message: state.appReducers.message,
    faq: state.appReducers.faq,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FAQ);
