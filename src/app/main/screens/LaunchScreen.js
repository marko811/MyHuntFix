import React, {Component} from 'react';
import {Launch} from '@pages';
import {Languages, Constants, Utils} from "@common"
import { NavigationActions} from 'react-navigation';

class LaunchScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    header: null,
  })

  render() {
    const {navigation} = this.props;
    return <Launch navigation={navigation} showHome={()=>Utils.navigateAndResetStack(navigation,Constants.Screen.Login)}/>
  }

}

export default LaunchScreen;
