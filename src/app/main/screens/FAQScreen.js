import React, {Component} from 'react';
import {FAQ} from '@pages';
import {Languages, Constants, Utils} from "@common"
import { NavigationActions} from 'react-navigation';
import {MenuButton,SearchButton} from '@components';

class FAQScreen extends Component {
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
    return <FAQ navigation={navigation} />
  }

}

export default FAQScreen;
