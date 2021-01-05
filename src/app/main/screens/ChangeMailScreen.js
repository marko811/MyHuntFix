import React, {Component} from 'react';
import {ChangeMail} from '@pages';
import {Languages, Constants, Utils} from "@common"
import { NavigationActions} from 'react-navigation';
import {MenuButton,SearchButton} from '@components';

class ChangeMailScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title:'',
    headerLeft:<MenuButton />,
    headerRight:<SearchButton />
  })

  render() {
    const {navigation} = this.props;
    return <ChangeMail navigation={navigation} goBack={()=>navigation.goBack()} goToLogin={()=>Utils.navigateAndResetStack(navigation,Constants.Screen.Login)}/>
  }

}

export default ChangeMailScreen;
