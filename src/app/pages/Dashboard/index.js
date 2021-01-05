import React,{Component} from 'react';
import {
  Platform,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Alert
} from 'react-native'
import styles from "./style"
import {Languages, Constants} from "@common"
import {Text,Section,EpisodeItem} from '@components'

import {connect} from 'react-redux';
import {ActionCreators} from '@actions';
import {bindActionCreators} from 'redux';
import * as ActionTypes from '@actions/ActionTypes'
import Base from "../Base/Base"

class Dashboard extends Base {

  state = {
    selectedSeason:0,
    list:[]
  }

  renderContent() {
    let {selectedShow} = this.props

    return (
      <View style={styles.container}>
        <Image style={styles.banner} source={{uri:selectedShow.field_asset_art}} />
        <View style={styles.wrapContainer}>
          <View style={styles.content}>
            {this.renderLeftView()}
            {this.renderContentView()}
          </View>
        </View>
      </View>
    );
  }

  renderLeftView(){
    let {selectedShow} = this.props
    return (
      <View style={styles.leftView}>
        {selectedShow.seasons.map((item,index)=><Section item={item} name={"S"+(index+1)} key={index} selected={this.state.selectedSeason==index} onPress={this.clickSeason.bind(this)}/>)}
      </View>
    )
  }

  renderContentView(){
    let {selectedShow} = this.props
    return (
      <View style={styles.rightView}>
        <Text style={styles.title}>{selectedShow.title}</Text>
        <FlatList
          data={this.state.list}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={(item,index)=>index}
        />
      </View>
    )
  }

  renderItem({item,index}){
    return <EpisodeItem title={item.title} position={index+1} onPress={this.clickEpisode.bind(this)}/>
  }

  getEpisodes(index){
    let {selectedShow} = this.props
    if (selectedShow.seasons.length > index) {
      var list = selectedShow.seasons[index].episodes
      if (Array.isArray(list)) {
        return list
      }
    }
    return []
  }

  clickSeason(item){
    let {selectedShow} = this.props
    let index = selectedShow.seasons.indexOf(item)

    var self = this
    var list = this.getEpisodes(index)
    this.setState({list},()=>{
      self.setState({selectedSeason:index})
    })
  }

  clickEpisode(selectedEpisode){
    this.props.selectEpisodeIndex(selectedEpisode)
    let {selectedShow} = this.props
    let episodes = selectedShow.seasons[this.state.selectedSeason].episodes
    let episode = episodes[selectedEpisode]
    this.props.selectEpisode(episode,episodes)
    this.props.getAsset(episode.nid,Constants.Screen.Dashboard)
  }

  componentWillReceiveProps(nextProp){
    super.componentWillReceiveProps(nextProp)

    if(nextProp.type == ActionTypes.GET_ASSET_FAILURE && nextProp.message.length > 0){
      Alert.alert("Error",nextProp.message)
    }

    if(nextProp.type == ActionTypes.GET_ASSET_SUCCESS && nextProp.screenName == Constants.Screen.Dashboard){
      this.props.showPlayer()
    }
  }

  componentDidMount(){
    var list = this.getEpisodes(this.state.selectedSeason)
    this.setState({list})
  }
}

Dashboard.defaultProps = {
  selectedShow:{
    seasons:[]
  }
}

function mapStateToProps(state) {
  return {
    isShowProgress: state.appReducers.isRequesting,
    type: state.appReducers.type,
    message: state.appReducers.message,
    selectedShow: state.appReducers.selectedShow,
    screenName: state.appReducers.screenName,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
