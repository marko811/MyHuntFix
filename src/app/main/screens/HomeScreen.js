import React, {Component} from 'react';
import {Home} from '@pages';
import {Languages, Constants, Utils} from "@common"
import { NavigationActions} from 'react-navigation';
import {MenuButton,SearchButton} from '@components';

class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title:'',
    headerLeft:<MenuButton />,
    headerRight:<SearchButton />
  })

  render() {
    const {navigation} = this.props;
    return <Home navigation={navigation} showDetail={(item)=>navigation.navigate(Constants.Screen.Dashboard,{item})}/>
  }

}

export default HomeScreen;
``
