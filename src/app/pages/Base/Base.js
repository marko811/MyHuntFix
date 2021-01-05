import React from 'react';
import {
  StyleSheet,
  View,
  Keyboard,
  Dimensions,
  TouchableWithoutFeedback,
  Platform
}from 'react-native'
import {Constants,Utils,Global} from "@common"
import {ProgressView} from "@components"
import * as ActionTypes from '@actions/ActionTypes'

class Base extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <View style={{flex:1}}>
        {this.renderContent()}
        {this.props.isShowProgress && <ProgressView />}
      </View>
    )
  }

  renderContent(){

  }

  componentDidMount(){
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.type == ActionTypes.INVALID_TOKEN) {
      const {navigation} = this.props;
      Utils.navigateAndResetStack(navigation, Constants.Screen.Login)
    }
  }
}

export default Base;
