import React,{Component} from 'react';
import {
  Platform,
  View,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Image,
  Alert,

} from 'react-native'
import styles from "./style"
import {Languages, Constants,Global,Utils,Colors} from "@common"
import {Text,Button,HomeItem} from '@components'

import {connect} from 'react-redux';
import {ActionCreators} from '@actions';
import {bindActionCreators} from 'redux';
import * as ActionTypes from '@actions/ActionTypes'
import Base from "../Base/Base"

class Home extends Base {

  state = {
      categoryIndex:0,
      categories:[]
  }

  renderContent() {
    let {categoryIndex,categories} = this.state
    //let {categories} = this.props

    return (
      <ImageBackground style={styles.container} source={require('@images/test/bg.png')} onLayout={(event)=>global.heightScreen = event.nativeEvent.layout.height}>
        <View style={styles.foreground}>
          <View style={styles.topView}>
            <Text style={styles.title}>SHOWS</Text>
            <View style={styles.row}>
              <View>
                {
                  categories.map((category,categoryIndex)=><Button key={categoryIndex} title={category.title} style={[styles.button,categoryIndex==this.state.categoryIndex && {backgroundColor:Colors.darkOrange}]} textStyle={styles.buttonText} onPress={()=>this.setState({categoryIndex})}/>)
                }
              </View>
              {categories.length > 0 && (
                <View style={styles.dropdownWrap}>
                  <TouchableOpacity activeOpacity={0.8} onPress={()=>this.onPrevCategory()}>
                    <Image source={require('@images/ic_up_arrow.png')} style={styles.dropdownIcon}/>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.8} onPress={()=>this.onNextCategory()}>
                    <Image source={require('@images/ic_down_arrow.png')} style={styles.dropdownIcon}/>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
          <View style={styles.wrapContainer}>
            <FlatList
              data={this.getShowsByCategory(categoryIndex)}
              renderItem={({item,index})=><HomeItem item={item} onPress={this.showDetail}/>}
              keyExtractor={(item,index)=>index}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }

  getShowsByCategory(categoryIndex){
    if (categoryIndex < this.state.categories.length) {
      let category = this.state.categories[categoryIndex]
      if (category.shows.length > 0 && category.shows[0] != false) {
        return category.shows
      }else{
        return []
      }
    }else{
      return []
    }
  }

  showDetail = (item)=>{
    this.props.getSeriesShow(item)
  }

  onPrevCategory(){
    if (this.state.categoryIndex > 0) {
      this.setState({categoryIndex:this.state.categoryIndex-1})
    }else{
      var categories = this.state.categories
      let firstItem = this.props.categories[0]
      if (categories[0] != firstItem) {
        let index = this.props.categories.indexOf(categories[0])
         categories.splice(2, 1);
         categories.unshift(this.props.categories[index-1])
         this.setState({categories,selectedIndex:0})
      }
    }
  }

  onNextCategory(){
      if (this.state.categoryIndex < this.state.categories.length - 1) {
        this.setState({categoryIndex:this.state.categoryIndex+1})
      }else{
        var categories = this.state.categories
        let lastItem = this.props.categories[this.props.categories.length - 1]
        if (categories[2] != lastItem) {
          let index = this.props.categories.indexOf(categories[2])
           categories.splice(0, 1);
           categories.push(this.props.categories[index+1])
           this.setState({categories,selectedIndex:2})
        }
      }
  }

  componentWillReceiveProps(nextProp){
    super.componentWillReceiveProps(nextProp)

    if((nextProp.type == ActionTypes.GET_SHOWS_FAILURE || nextProp.type == ActionTypes.GET_SERIES_SHOW_FAILURE) && nextProp.message.length > 0){
      Alert.alert("Error",nextProp.message)
    }

    if(nextProp.type == ActionTypes.GET_SERIES_SHOW_SUCCESS){
      this.props.showDetail()
    }

    if(nextProp.type == ActionTypes.GET_SHOWS_SUCCESS){
      this.showData(nextProp.categories)
    }
  }

  showData(data){
    var categories = []
    data.forEach((item,index)=>{
      if (index < 3) {
        categories.push(item)
      }else{
        return
      }
    })
    this.setState({categories})
  }

  componentDidMount(){
    if (this.props.categories.length > 0) {
      this.showData(this.props.categories)
    }else{
      this.props.getShows()
    }
    this.signOutListener = Global.EventEmitter.addListener(Constants.EventEmitterName.SignOut, this.signOut.bind(this));
  }

  componentWillUnmount() {
    this.signOutListener.remove();
  }

  signOut(){
    Utils.navigateAndResetStack(this.props.navigation,Constants.Screen.Login)
  }
}

Home.defaultProps = {
    categories:[]
}

function mapStateToProps(state) {
  return {
    isShowProgress: state.appReducers.isRequesting,
    type: state.appReducers.type,
    message: state.appReducers.message,
    categories: state.appReducers.categories,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
