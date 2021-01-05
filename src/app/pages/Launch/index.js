import React, {Component} from 'react';
import {
  Platform,
  View,
  Image
} from 'react-native'
import styles from "./style"
import {Languages, Constants,Styles} from "@common"
import {Text} from '@components'

class Launch extends Component {

  render() {
    return (
      <View style={Styles.matchParent} onLayout={(event)=>global.heightFullScreen = event.nativeEvent.layout.height}>
        <Image source={require('@images/ic_background.png')} style={styles.container}/>
      </View>
    );
  }

  componentDidMount(){
    setTimeout(()=>{
      this.props.showHome()
    },3000)
  }
}

export default Launch;
