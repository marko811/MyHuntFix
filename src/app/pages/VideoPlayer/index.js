import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Platform,
  NativeModules
} from 'react-native'
import styles from "./style"
import {Languages, Constants,Styles} from "@common"
import {Text,VideoBox,MenuButton,SearchButton,WebView} from '@components'
import HTMLView from 'react-native-htmlview';
var ScreenManager = NativeModules.ScreenManager;

const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
};

import {connect} from 'react-redux';
import {ActionCreators} from '@actions';
import {bindActionCreators} from 'redux';
import * as ActionTypes from '@actions/ActionTypes'
import Base from "../Base/Base"

class VideoPlayer extends Base {

  state = {
    contentHeight:0
  };

  renderContent() {
    let {selectedShow,selectedEpisode,video} = this.props

    return (
      <View style={styles.container}>
        {isPortrait() && (
          <View style={styles.header}>
            <MenuButton />
            <SearchButton />
          </View>
        )}
        <View style={[styles.player,!isPortrait() && Styles.matchParent]}>
          <VideoBox url={video.lowUrl}/>
        </View>
        {isPortrait() && (
          <View style={Styles.matchParent} onLayout={(event)=>this.setState({contentHeight:event.nativeEvent.layout.height})}>
            <ScrollView contentContainerStyle={{minHeight:this.state.contentHeight}} showsVerticalScrollIndicator={false}>
              <View style={styles.content}>
                <View style={Styles.matchParent}>
                  <Text style={styles.title}>{selectedShow.title}</Text>
                  <Text style={styles.text}>NOW WATCHING: <Text style={styles.state}>{selectedEpisode.title}</Text></Text>
                  <WebView html={"<span>"+selectedEpisode.body.trim()+"</span>"}/>
                  {/*
                    <HTMLView
                      value={"<p>"+selectedEpisode.body.trim()+"</p>"}
                      stylesheet={{p:{color:'white'}}}
                    />
                    */}
                  <Text style={styles.text}>Tags</Text>
                  <Text style={styles.text}>{this.getTagsList()}</Text>
                </View>
                <View style={styles.row}>
                  {this.getPreEpisode() && (
                    <TouchableOpacity  onPress={this.onBackEpisode.bind(this)}>
                      <Image source={require('@images/ic_prv.png')} style={styles.btnIcon}/>
                    </TouchableOpacity>
                  )}
                  {!this.getPreEpisode() && <View />}
                  {this.getNextEpisode() && (
                    <TouchableOpacity style={styles.btnNext} onPress={this.onNextEpisode.bind(this)}>
                      <View style={{marginRight:5}}>
                        <Text style={styles.btnNextTitle}>Next Episode</Text>
                        <Text style={styles.btnNextSubTitle}>{this.nextEpisode.title}</Text>
                      </View>
                      <Image source={require('@images/ic_nxt.png')} style={styles.btnIcon}/>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    );
  }

  getNextEpisode(){
    let {episodes,selectedEpisode} = this.props
    let currentIndex = episodes.indexOf(selectedEpisode)
    if (currentIndex < episodes.length - 1) {
      this.nextEpisode =  episodes[currentIndex+1]
    }else{
      this.nextEpisode = null
    }

    return this.nextEpisode
  }

  getPreEpisode(){
    let {episodes,selectedEpisode} = this.props
    let currentIndex = episodes.indexOf(selectedEpisode)
    if (currentIndex > 0) {
      this.preEpisode = episodes[currentIndex-1]
    }else{
      this.preEpisode = null
    }

    return this.preEpisode
  }

  onBackEpisode(){
    let {episodes,selectedEpisode} = this.props
    let currentIndex = episodes.indexOf(selectedEpisode)
    this.props.selectEpisodeIndex(currentIndex-1)
    this.props.selectEpisode(this.preEpisode,episodes)
    this.props.getAsset(this.preEpisode.nid,Constants.Screen.VideoPlayer)

    this.props.getTags(this.preEpisode.field_tags_id)
  }

  onNextEpisode(){
    let {episodes,selectedEpisode} = this.props
    let currentIndex = episodes.indexOf(selectedEpisode)
    this.props.selectEpisodeIndex(currentIndex+1)
    this.props.selectEpisode(this.nextEpisode,episodes)
    this.props.getAsset(this.nextEpisode.nid,Constants.Screen.VideoPlayer)

    this.props.getTags(this.nextEpisode.field_tags_id)
  }

  getTagsList(){
    let {tags} = this.props

    if (tags.length == 0) {
      return "No tags to play"
    }else{
      var items = ""
      tags.forEach((tag)=>{
        items += tag.name + ", "
      })

      return items
    }
  }

  componentDidMount(){
    //let {selectedEpisode} = this.props
    //this.props.getTags(selectedEpisode.field_tags_id)

    Dimensions.addEventListener('change', () => {
        this.forceUpdate()
    });
  }

  componentWillUnmount(){
    if (!isPortrait()) {
      ScreenManager.changeOrientation()
    }
  }
}

VideoPlayer.defaultProps = {
  tags:[],
  video:{
    lowUrl:''
  },
  selectedShow:{
    title:''
  },
  selectedEpisode:{
    title:'',
  },
  episodes:[]
}

function mapStateToProps(state) {
  return {
    isShowProgress: state.appReducers.isRequesting,
    type: state.appReducers.type,
    message: state.appReducers.message,
    selectedShow: state.appReducers.selectedShow,
    selectedEpisode: state.appReducers.selectedEpisode,
    episodes: state.appReducers.episodes,
    video: state.appReducers.video,
    tags: state.appReducers.tags,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
