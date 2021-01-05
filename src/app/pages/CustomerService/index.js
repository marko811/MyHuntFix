import React, {Component} from 'react';
import {
  Platform,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  Linking
} from 'react-native'
import styles from "./style"
import {Languages, Constants,Styles} from "@common"
import {Button,TextInput,Text,Separator,WebView} from '@components'

import {connect} from 'react-redux';
import {ActionCreators} from '@actions';
import {bindActionCreators} from 'redux';
import * as ActionTypes from '@actions/ActionTypes'
import Base from "../Base/Base"
import HTMLView from 'react-native-htmlview';

class CustomerService extends Base {

  renderContent() {
    let {customerService} = this.props
    return (
      <View style={styles.container}>
        <Image source={require('@images/ic_logo.png')} style={styles.logo}/>
        <Text style={styles.title}>Customer Service</Text>
        <Separator />
        <ScrollView style={styles.content}>
          <WebView html={customerService.body} onLinkPress={this.onLinkPress.bind(this)}/>
          {/*
          <Text style={styles.text}>
          {"Have any questions or concerns with MyHuntFix?  You might want to try our FAQ. If you can't find your answer there, or have any additional questions:"}</Text>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.info}>support@myhuntfix.com</Text>
          <Text style={styles.label}>Feedback</Text>
          <Text style={styles.text}>To fill out our <Text style={styles.info}>FEEDBACK FORM</Text></Text>
          <Text style={styles.label}>Mail</Text>
          <Text style={styles.info}>MyHuntfix</Text>
          <Text style={styles.info}>11263 180 Street</Text>
          <Text style={styles.info}>Edmonton, AB, Canada</Text>
          <Text style={styles.info}>T5B 0S4</Text>
          <Text style={styles.label}>Phone</Text>
          <Text style={styles.info}>1.877.294.5383</Text>
          */}
        </ScrollView>
      </View>
    );
  }

  onLinkPress(event,link){
    if (link == "/page/faq") {
      this.props.goToFAQ()
      return
    }

    if (link == "/feedback") {
      this.props.goToFeedback()
      return
    }

    let url = 'tel:1.877.294.5388'
    Linking.openURL(url)
          .then((data) => {
          })
          .catch((error)=>{

          });
  }

  componentWillReceiveProps(nextProp){
    super.componentWillReceiveProps(nextProp)

    if(nextProp.type == ActionTypes.GET_CUSTOMER_SERVICE_FAILURE  && nextProp.message.length > 0){
      Alert.alert("Error",nextProp.message)
    }
  }

  componentDidMount(){
    setTimeout(()=>{
      this.props.customerService.body.length == 0 && this.props.getCustomerService()
    },500)

  }
}

CustomerService.defaultProps = {
  customerService:{
    body:''
  }
}

function mapStateToProps(state) {
  return {
    isShowProgress: state.appReducers.isRequesting,
    type: state.appReducers.type,
    message: state.appReducers.message,
    customerService: state.appReducers.customerService,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerService);
