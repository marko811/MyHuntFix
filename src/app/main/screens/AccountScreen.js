import React, {Component} from 'react';
import {Account} from '@pages';
import {Languages, Constants, Utils} from "@common"
import { NavigationActions} from 'react-navigation';
import {MenuButton,SearchButton} from '@components';

class AccountScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title:'',
    headerLeft:<MenuButton />,
    headerRight:<SearchButton />
  })

  render() {
    const {navigation} = this.props;
    return <Account
            navigation={navigation}
            changeMail={()=>navigation.navigate(Constants.Screen.ChangeMail)}
            changePass={()=>navigation.navigate(Constants.Screen.ChangePassword)}
            updateCard={()=>navigation.navigate(Constants.Screen.UpdateCard)}
            changePlan={()=>navigation.navigate(Constants.Screen.ChangePlan)} />
  }

}

export default AccountScreen;
