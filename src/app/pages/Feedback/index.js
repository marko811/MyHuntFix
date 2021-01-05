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
import {Languages, Constants} from "@common"
import {Button,TextInput,Text,Separator,TopicList} from '@components'

import {connect} from 'react-redux';
import {ActionCreators} from '@actions';
import {bindActionCreators} from 'redux';
import * as ActionTypes from '@actions/ActionTypes'
import Base from "../Base/Base"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class Feedback extends Base {

  state = {
    email:'',
    name:'',
    topic:'General Inquiries',
    comments:'',
    isShowModal:false
  }

  renderContent() {
    return (
      <KeyboardAwareScrollView style={{backgroundColor:'black'}}>
        <View style={[styles.container,{minHeight:global.heightScreen}]}>
        <Image source={require('@images/ic_logo.png')} style={styles.logo}/>
        <Text style={styles.label}>Feedback</Text>
        <View style={styles.form}>
            <TextInput placeholder='Your Email' style={styles.input} value={this.state.email} onChangeText={(email)=>this.setState({email})}/>
            <TextInput placeholder='Your Name' style={styles.input} value={this.state.name} onChangeText={(name)=>this.setState({name})}/>
            {/*<TextInput placeholder='Topic' style={styles.input} value={this.state.topic} onChangeText={(topic)=>this.setState({topic})}/>*/}
            <TouchableOpacity style={styles.dropdown} activeOpacity={0.8} onPress={()=>this.setState({isShowModal:true})}>
              <Text style={styles.dropdownText}>{this.state.topic}</Text>
              <Image source={require('@images/ic_dropdown.png')} style={styles.dropdownIcon}/>
            </TouchableOpacity>
            <TextInput
              value={this.state.comments}
              onChangeText={(comments)=>this.setState({comments})}
              placeholder='Comments'
              multiline={true}
              textAlignVertical={'top'}
              style={styles.textarea}/>
            <Button title="Submit"  onPress={this.sendFeedback}/>
        </View>
      </View>
      <TopicList onPress={(topic)=>this.setState({topic,isShowModal:false})} isShow={this.state.isShowModal}/>
      </KeyboardAwareScrollView>
    );
  }

  sendFeedback = ()=>{
    let {email,name,topic,comments} = this.state
    this.props.feedback(email,name,topic,comments)
  }

  componentWillReceiveProps(nextProp){
    super.componentWillReceiveProps(nextProp)

    if(nextProp.type == ActionTypes.FEEDBACK_FAILURE && nextProp.message.length > 0){
      Alert.alert("Error",nextProp.message)
    }

    if(nextProp.type == ActionTypes.FEEDBACK_SUCCESS){
      Alert.alert("Info","Send feedback successfully.")
      this.props.goHome()
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

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
