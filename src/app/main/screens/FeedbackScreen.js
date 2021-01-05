import React, {Component} from 'react';
import {Feedback} from '@pages';
import {Languages, Constants, Utils} from "@common"
import { NavigationActions} from 'react-navigation';
import {MenuButton,SearchButton} from '@components';

class FeedbackScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title:'',
    headerLeft:<MenuButton />,
    headerRight:<SearchButton />
  })

  render() {
    const {navigation} = this.props;
    return <Feedback navigation={navigation} goHome={()=>Utils.navigateAndResetStack(navigation,Constants.Screen.Home)}/>
  }

}

export default FeedbackScreen;
