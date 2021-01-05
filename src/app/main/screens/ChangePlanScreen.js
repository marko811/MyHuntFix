import React, {Component} from 'react';
import {ChangePlan} from '@pages';
import {Languages, Constants, Utils} from "@common"
import { NavigationActions} from 'react-navigation';
import {MenuButton,SearchButton} from '@components';

class ChangePlanScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title:'',
    headerLeft:<MenuButton />,
    headerRight:<SearchButton />
  })

  render() {
    const {navigation} = this.props;
    return <ChangePlan navigation={navigation} goBack={()=>navigation.goBack()}/>
  }

}

export default ChangePlanScreen;
