import React, {Component} from 'react';
import {
  Platform,
  View,
  Image,
  FlatList
} from 'react-native'
import styles from "./style"
import {Languages, Constants,Styles} from "@common"
import {Text,OriginalItem} from '@components'
const data = [
  require('@images/test/image1.png'),
  require('@images/test/image2.png'),
  require('@images/test/image3.png'),
  require('@images/test/image4.png')
]

import {connect} from 'react-redux';
import {ActionCreators} from '@actions';
import {bindActionCreators} from 'redux';
import * as ActionTypes from '@actions/ActionTypes'
import Base from "../Base/Base"

class Originals extends Base {

  renderContent() {
    let {originals} = this.props
    return (
      <View style={styles.container}>
        <Image source={require('@images/ic_logo.png')} style={styles.logo}/>
        <Text style={styles.title}>ORIGINALS</Text>
        <View style={styles.content}>
          <FlatList
            style={styles.list}
            data={originals.shows}
            renderItem={({item,index})=><OriginalItem item={item} onPress={this.showDetail}/>}
            keyExtractor={(item,index)=>index}
          />
        </View>
      </View>
    );
  }

  showDetail = (item)=>{
    this.props.getSeriesShow(item)
  }
}

Originals.defaultProps = {
  originals:{
    shows:[]
  }
}

function mapStateToProps(state) {
  return {
    isShowProgress: state.appReducers.isRequesting,
    type: state.appReducers.type,
    message: state.appReducers.message,
    originals: state.appReducers.originals,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Originals);
