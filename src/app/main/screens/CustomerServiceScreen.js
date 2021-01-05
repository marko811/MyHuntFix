import React, {Component} from 'react';
import {CustomerService} from '@pages';
import {Languages, Constants, Utils} from "@common"
import { NavigationActions} from 'react-navigation';
import {MenuButton,SearchButton} from '@components';

class CustomerServiceScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title:'',
    headerLeft:<MenuButton />,
    headerRight:<SearchButton />,
    headerStyle:{
      backgroundColor:'black'
    }
  })

  render() {
    const {navigation} = this.props;
    return <CustomerService navigation={navigation} goToFAQ={()=>navigation.navigate(Constants.Screen.FAQ)} goToFeedback={()=>navigation.navigate(Constants.Screen.Feedback)}/>
  }

}

export default CustomerServiceScreen;
