import React, {Component} from 'react';
import {Register} from '@pages';
import {Languages, Constants, Utils} from "@common"
import {NavigationActions} from 'react-navigation';

class RegisterScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    header: null,
  })

  render() {
    const {navigation} = this.props;
    return <Register
            navigation={navigation}
            goBack={()=>navigation.goBack()}
            showHome={()=>navigation.goBack()}
            showTermOfUse={()=>navigation.navigate(Constants.Screen.TermOfUseWithoutLogin)}
            />
  }

}

export default RegisterScreen;
