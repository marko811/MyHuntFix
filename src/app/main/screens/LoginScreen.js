import React, {Component} from 'react';
import {Login} from '@pages';
import {Languages, Constants, Utils} from "@common"
import { NavigationActions} from 'react-navigation';

class LoginScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    header: null,
  })

  render() {
    const {navigation} = this.props;
    return <Login
              navigation={navigation}
              goToRegister={()=>navigation.navigate(Constants.Screen.Register)}
              goToForgotPass={()=>navigation.navigate(Constants.Screen.ForgotPassword)}
              showHome={()=>Utils.navigateAndResetStack(navigation,Constants.Screen.Home)}/>
  }

}

export default LoginScreen;
