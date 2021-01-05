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
import {Languages, Constants,Utils,Styles,Colors} from "@common"
import {Button,TextInput,Text,Separator} from '@components'

const SelectedIcon = require('@images/ic_selected_radio.png')
const UnselectIcon = require('@images/ic_unselect_radio.png')

import {connect} from 'react-redux';
import {ActionCreators} from '@actions';
import {bindActionCreators} from 'redux';
import * as ActionTypes from '@actions/ActionTypes'
import Base from "../Base/Base"

import DatePicker from 'react-native-datepicker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import ModalDropdown from 'react-native-modal-dropdown';
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const years = ["2017","2018","2019","2020","2021","2022","2023","2024","2025","2026","2027","2028","2029","2030","2031","2032","2033","2034","2035"]

class UpdateCard extends Base {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      fullname:'',
      number:'',
      cvc:'',
      expMonth:"1",
      expYear:"2017"
    }
  }

  renderContent() {
    let {plans} = this.props
    return (
      <KeyboardAwareScrollView style={{backgroundColor:'black'}}>
        <View style={[styles.container,{minHeight:global.heightScreen}]}>
        <Image source={require('@images/ic_logo.png')} style={styles.logo}/>
        <View style={styles.form}>
            <Text style={styles.label}>Update Credit Card</Text>
            <TextInput placeholder='Name on card' autoCorrect={false} style={styles.input} value={this.state.fullname} onChangeText={(fullname)=>this.setState({fullname})}/>
            <TextInput placeholder='Card number' autoCorrect={false} style={styles.input} value={this.state.number} onChangeText={(number)=>this.setState({number})}/>
            <View style={styles.row}>
              <TextInput placeholder='Security Code' autoCorrect={false} style={styles.code} value={this.state.cvc} onChangeText={(cvc)=>this.setState({cvc})}/>
              <ModalDropdown style={{height:40,
                width:85,
                borderRadius:4,
                backgroundColor:'rgba(170,170,170,1.0)',
                justifyContent:'center',marginRight:5}}
                options={months}
                textStyle={{textAlign:'center',color:Colors.gray,fontSize:Constants.FontSize.tiny}}
                dropdownStyle={{width:85}}
                defaultIndex={0}
                defaultValue="January"
                onSelect={(index,value)=>this.setState({expMonth:parseInt(index)+1})}/>

              <ModalDropdown style={{height:40,
              width:70,
              borderRadius:4,
              backgroundColor:'rgba(170,170,170,1.0)',
              justifyContent:'center'}}
              options={years}
              textStyle={{textAlign:'center',color:Colors.gray,fontSize:Constants.FontSize.tiny}}
              dropdownStyle={{width:70}}
              defaultIndex={0}
              defaultValue="2017"
              onSelect={(index,value)=>this.setState({expYear:years[index]})}/>

              <Image source={require('@images/ic_dropdown.png')} style={[styles.dropdownIcon,{position:'absolute',right:80,top:12}]}/>
              <Image source={require('@images/ic_dropdown.png')} style={[styles.dropdownIcon,{position:'absolute',right:3,top:12}]}/>
              {/*
              <TouchableOpacity style={[styles.dropdown,styles.month]} activeOpacity={0.8}>
                <DatePicker
                style={{flex:1}}
                  customStyles={Styles.DatePicker}
                  showIcon={false}
                  date={this.state.expMonth}
                  mode="date"
                  format={Constants.MonthFormat}
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  onDateChange={(expMonth)=>this.setState({expMonth})}
                />
                <Image source={require('@images/ic_dropdown.png')} style={styles.dropdownIcon}/>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.dropdown,styles.year]} activeOpacity={0.8}>
                <DatePicker
                  style={{flex:1}}
                  customStyles={Styles.DatePicker}
                  showIcon={false}
                  date={this.state.expYear}
                  mode="date"
                  format={Constants.YearFormat}
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  onDateChange={(expYear)=>this.setState({expYear})}
                />
                <Image source={require('@images/ic_dropdown.png')} style={styles.dropdownIcon}/>
              </TouchableOpacity>
              */}
            </View>

            <Button title="Enter" onPress={this.updateUser.bind(this)} style={{marginTop:20}}/>
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

    if(nextProp.type == ActionTypes.UPDATE_USER_FAILURE && nextProp.message.length > 0){
      Alert.alert("Error",nextProp.message)
    }

    if(nextProp.type == ActionTypes.UPDATE_USER_SUCCESS){
      Alert.alert("Info","Your default credit card has been updated.")
      this.props.goBack()
    }
  }


  updateUser(){
    let {number,expMonth,expYear,cvc,fullname} = this.state
    this.props.updateUser(number,parseInt(expMonth),parseInt(expYear),cvc,fullname)
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCard);
