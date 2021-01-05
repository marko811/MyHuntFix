import React, {Component} from 'react';
import {Dashboard} from '@pages';
import {Languages, Constants, Utils} from "@common"
import { NavigationActions} from 'react-navigation';
import {MenuButton,SearchButton} from '@components';

class DashboardScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title:'',
    headerLeft:<MenuButton />,
    headerRight:<SearchButton />
  })

  render() {
    const {navigation} = this.props;
    return <Dashboard navigation={navigation} showPlayer={()=>navigation.navigate(Constants.Screen.VideoPlayer)}/>
  }

}

export default DashboardScreen;
``
