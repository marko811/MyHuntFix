import React, {Component} from 'react';
import {VideoPlayer} from '@pages';
import {Languages, Constants, Utils} from "@common"
import { NavigationActions} from 'react-navigation';
import {MenuButton,SearchButton} from '@components';

class VideoPlayerScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    header: null,
    // title:'',
    headerLeft:<MenuButton />,
    headerRight:<SearchButton />,
  })

  render() {
    const {navigation} = this.props;
    return <VideoPlayer navigation={navigation}/>
  }

}

export default VideoPlayerScreen;
``
