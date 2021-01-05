import React, {Component} from 'react';
import {
  Platform,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,

} from 'react-native'
import styles from "./style"
import {Languages, Constants,Styles} from "@common"
import {Button,TextInput,Text,Separator,WebView} from '@components'

import {connect} from 'react-redux';
import {ActionCreators} from '@actions';
import {bindActionCreators} from 'redux';
import * as ActionTypes from '@actions/ActionTypes'
import Base from "../Base/Base"
import HTML from 'react-native-render-html'

class TermOfUse extends Base {

  renderContent() {
    let {termOfService} = this.props
    return (
      <View style={styles.container}>
        <Image source={require('@images/ic_logo.png')} style={styles.logo}/>
        <Text style={styles.label}>Term Of use</Text>
        <Separator />
        <ScrollView style={styles.content}>
            <WebView html={this.getHtmlBody(termOfService.body)}/>
        </ScrollView>
      </View>
    );
  }

  getHtmlBody(body){
    //body = body.replace("medium", "13dp");
    body = body.replace(/style="[^"]*"/g, "style='text-align:justify'")
    body = body.replace(/(\r\n|\n|\r)/gm,"");

    return body
  }

  componentWillReceiveProps(nextProp){
    super.componentWillReceiveProps(nextProp)

    if(nextProp.type == ActionTypes.GET_TERM_SERVICE_FAILURE  && nextProp.message.length > 0){
      Alert.alert("Error",nextProp.message)
    }
  }

  componentDidMount(){
    setTimeout(()=>{
      this.props.termOfService.body.length == 0 && this.props.getTermOfService()
    },500)
  }
}

TermOfUse.defaultProps = {
  termOfService:{
    body:''
  }
}

function mapStateToProps(state) {
  return {
    isShowProgress: state.appReducers.isRequesting,
    type: state.appReducers.type,
    message: state.appReducers.message,
    termOfService: state.appReducers.termOfService,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TermOfUse);
