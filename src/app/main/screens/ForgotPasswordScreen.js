import React, {Component} from 'react';
import {ForgotPassword} from '@pages';
import {Languages, Constants, Utils} from "@common"
import { NavigationActions} from 'react-navigation';

class ForgotPasswordScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    header: null,
  })

  render() {
    const {navigation} = this.props;
    return <ForgotPassword
              navigation={navigation}
              goToRegister={()=>navigation.navigate(Constants.Screen.Register)}
              goToForgotPass={()=>{}}
              showHome={()=>Utils.navigateAndResetStack(navigation,Constants.Screen.Home)}/>
  }

}

export default ForgotPasswordScreen;
