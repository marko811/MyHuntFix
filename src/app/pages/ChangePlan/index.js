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
import {Languages, Constants,Utils,Styles} from "@common"
import {Button,TextInput,Text,Separator} from '@components'

const SelectedIcon = require('@images/ic_selected_radio.png')
const UnselectIcon = require('@images/ic_unselect_radio.png')

import {connect} from 'react-redux';
import {ActionCreators} from '@actions';
import {bindActionCreators} from 'redux';
import * as ActionTypes from '@actions/ActionTypes'
import Base from "../Base/Base"

class ChangePlan extends Base {

  constructor(props) {
    super(props);
    this.currentPlan = null
    this.state = {
      selectedIndex: 0,
    }
  }


  componentDidMount() {
    this.props.plans.length == 0 && this.props.getPlans()
    if (this.props.plans.length > 0) {
      this.currentPlan = this.props.plans[0]
    }
  }

  renderContent() {
    let {plans,userInfo} = this.props
    return (
      <View>
        <View style={[styles.container,{minHeight:global.heightScreen}]}>
        <Image source={require('@images/ic_logo.png')} style={styles.logo}/>
        <View style={styles.form}>
            <Text style={styles.label}>Select your plan</Text>
            <View style={styles.radioWrap}>
            {
              plans.map((item,index)=>(
                <TouchableOpacity key={index} style={styles.radioButton} activeOpacity={0.8} onPress={()=>this.choosePlan(item,index)}>
                  <Image source={this.state.selectedIndex==index?SelectedIcon:UnselectIcon} style={styles.radioIcon}/>
                  <View>
                    <Text style={styles.radioText}>{item.title}</Text>
                    <Text style={styles.radioSubText}>{"$"+item.field_plan_price+" "+item.field_currency.toUpperCase()+" for "+item.field_length+" "+Utils.capitalize(item.field_su)}</Text>
                  </View>
                </TouchableOpacity>
              ))
            }
            </View>
            <Button title="Enter" onPress={this.changeUserPlan.bind(this)}/>
            <TouchableOpacity style={styles.btnCancel} onPress={this.props.goBack}>
              <Text style={styles.btnCancelText}>Cancel</Text>
            </TouchableOpacity>
        </View>
      </View>
      </View>
    );
  }

  componentWillReceiveProps(nextProp){
    super.componentWillReceiveProps(nextProp)

    if((nextProp.type == ActionTypes.GET_PLANS_FAILURE || nextProp.type == ActionTypes.CHANGE_PLAN_FAILURE) && nextProp.message.length > 0){
      Alert.alert("Error",nextProp.message)
    }

    if(nextProp.type == ActionTypes.GET_PLANS_SUCCESS && nextProp.plans.length > 0){
      this.currentPlan = nextProp.plans[0]
    }

    if(nextProp.type == ActionTypes.CHANGE_PLAN_SUCCESS){
      Alert.alert("Info","Plan has changed successfully.")
      this.props.goBack()
    }
  }

  choosePlan(item,selectedIndex){
    this.setState({selectedIndex})
    this.currentPlan = item
  }

  changeUserPlan(){
    let {userInfo} = this.props
    this.props.changeUserPlan(userInfo.key,userInfo.uid,this.currentPlan.nid)
  }
}

ChangePlan.defaultProps = {
  plans:[]
}
function mapStateToProps(state) {
  return {
    isShowProgress: state.appReducers.isRequesting,
    type: state.appReducers.type,
    message: state.appReducers.message,
    plans: state.appReducers.plans,
    userInfo: state.appReducers.userInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePlan);
