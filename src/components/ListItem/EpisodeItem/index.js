import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Image
}from 'react-native'
import styles from "./style"
import Text from '../../Text'
import {Colors} from '@common'

import {connect} from 'react-redux';
import {ActionCreators} from '@actions';
import {bindActionCreators} from 'redux';
import * as ActionTypes from '@actions/ActionTypes'

class EpisodeItem extends Component {

  render() {
    let {title,position,onPress,selectedEpisodeIndex} = this.props
    return (
      <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={()=>onPress(position-1)}>
        <Text style={[styles.label,selectedEpisodeIndex+1 == position && styles.labelSelected]}>Episode {position}</Text>
        <Text style={[styles.title,selectedEpisodeIndex+1 == position && styles.titleSelected]}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

EpisodeItem.defaultProps = {
  selectedEpisodeIndex:0
}

function mapStateToProps(state) {
  return {
    selectedEpisodeIndex: state.appReducers.selectedEpisodeIndex,
    type: state.appReducers.type,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeItem);
