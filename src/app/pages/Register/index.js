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
import { Dropdown } from 'react-native-material-dropdown';
import ModalDropdown from 'react-native-modal-dropdown';
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const years = ["2017","2018","2019","2020","2021","2022","2023","2024","2025","2026","2027","2028","2029","2030","2031","2032","2033","2034","2035"]
class Register extends Base {

  constructor(props) {
    super(props);
    this.currentPlan = null
    this.state = {
      selectedIndex: 0,
      email:'',
      pass:'',
      confirmPass:'',
      promocode:'',
      fullname:'',
      number:'',
      cvc:'',
      expMonth:"1",
      expYear:"2017"
    }
  }

  componentDidMount() {
    this.props.getPlans()
  }

  renderContent() {
    let {plans} = this.props

    return (
      <ScrollView style={styles.container}>
        <Image source={require('@images/ic_logo.png')} style={styles.logo}/>
        <View style={styles.form}>
            <TextInput placeholder='Email' style={styles.input} value={this.state.email} onChangeText={(email)=>this.setState({email})}/>
            <TextInput placeholder='Password' secureTextEntry={true} style={styles.input} value={this.state.pass} onChangeText={(pass)=>this.setState({pass})}/>
            <TextInput placeholder='Confirm Password' secureTextEntry={true} style={styles.input} value={this.state.confirmPass} onChangeText={(confirmPass)=>this.setState({confirmPass})}/>
            <Text style={styles.labelBill}>Billing Information</Text>
            <TextInput placeholder='Name on card' style={styles.input} value={this.state.fullname} onChangeText={(fullname)=>this.setState({fullname})}/>
            <TextInput placeholder='Card number' style={styles.input} value={this.state.number} onChangeText={(number)=>this.setState({number})}/>
            <View style={styles.row}>
              <TextInput placeholder='Security Code' style={styles.code} value={this.state.cvc} onChangeText={(cvc)=>this.setState({cvc})}/>
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
                <Dropdown
                  label='Favorite Fruit'
                  data={monthData}
                />

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
            <View style={[styles.row,{marginBottom:30}]}>
              <TextInput placeholder='PROMO CODE' style={styles.promo} value={this.state.promocode} onChangeText={(promocode)=>this.setState({promocode})}/>
              <Text style={styles.note}>You will not be billed until after your 14 day trial expires</Text>
            </View>
            <Button title="Enter" onPress={this.register}/>
            <TouchableOpacity style={styles.btnTerm} onPress={this.props.showTermOfUse}>
              <Text style={styles.btnTermText}>By creating an account you agree to our Term of use</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  componentWillReceiveProps(nextProp){
    super.componentWillReceiveProps(nextProp)

    if((nextProp.type == ActionTypes.GET_PLANS_FAILURE || nextProp.type == ActionTypes.REGISTER_SUBSCRIBE_FAILURE) && nextProp.message.length > 0){
      Alert.alert("Error",nextProp.message)
    }

    if(nextProp.type == ActionTypes.GET_PLANS_SUCCESS && nextProp.plans.length > 0){
      this.currentPlan = nextProp.plans[0]
    }

    if (nextProp.type == ActionTypes.REGISTER_SUBSCRIBE_SUCCESS) {
      Alert.alert("Info","You have successfully subscribed!")
      this.props.showHome()
    }
  }

  choosePlan(item,selectedIndex){
    this.setState({selectedIndex})
    this.currentPlan = item
  }

  register = ()=>{
    let {number,expMonth,expYear,cvc,fullname,email,pass,confirmPass,promocode} = this.state
    let stripeParams = {
      number,
      expMonth:parseInt(expMonth),
      expYear:parseInt(expYear),
      cvc,
      name:fullname
    }

    var params = {
      email,
      pass,
      promocode
    }

    if (this.currentPlan) {
      params["planid"] = this.currentPlan.nid
      params["plantitle"] = this.currentPlan.title
    }
    if (pass != confirmPass) {
      Alert.alert("Error","Password is not match.")
    }else{
      this.props.registerSubscribe(stripeParams,params)
    }
  }
}

Register.defaultProps = {
  plans:[]
}
function mapStateToProps(state) {
  return {
    isShowProgress: state.appReducers.isRequesting,
    type: state.appReducers.type,
    message: state.appReducers.message,
    plans: state.appReducers.plans,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
