import React, {Component} from 'react';
import {HuntDetail} from '@pages';
import {Languages, Constants, Utils} from "@common"
import { NavigationActions} from 'react-navigation';
import {MenuButton,SearchButton} from '@components';

class HuntDetailScreen extends Component {
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
    return <HuntDetail navigation={navigation} />
  }

}

export default HuntDetailScreen;
