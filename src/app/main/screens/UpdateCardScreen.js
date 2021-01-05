import React, {Component} from 'react';
import {UpdateCard} from '@pages';
import {Languages, Constants, Utils} from "@common"
import { NavigationActions} from 'react-navigation';
import {MenuButton,SearchButton} from '@components';

class UpdateCardScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title:'',
    headerLeft:<MenuButton />,
    headerRight:<SearchButton />
  })

  render() {
    const {navigation} = this.props;
    return <UpdateCard navigation={navigation} goBack={()=>navigation.goBack()}/>
  }

}

export default UpdateCardScreen;
