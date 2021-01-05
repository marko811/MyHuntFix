import React, {Component} from 'react';
import {HowToHunt} from '@pages';
import {Languages, Constants, Utils} from "@common"
import { NavigationActions} from 'react-navigation';
import {MenuButton,SearchButton} from '@components';

class HowToHuntScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title:'',
    headerLeft:<MenuButton />,
    headerRight:<SearchButton />
  })

  render() {
    const {navigation} = this.props;
    return <HowToHunt navigation={navigation} showDetail={(item)=>navigation.navigate(Constants.Screen.HuntDetail,{item})}/>
  }

}

export default HowToHuntScreen;
