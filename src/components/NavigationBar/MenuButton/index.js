import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Image
}from 'react-native'
import styles from "./style"
import {Global,Constants} from '@common'
import dismissKeyboard from 'react-native-dismiss-keyboard';

class MenuButton extends Component {

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={()=>{dismissKeyboard();Global.EventEmitter.emit(Constants.EventEmitterName.OpenDrawer)}}>
        <Image source={require('@images/ic_menu.png')} style={styles.icon}/>
      </TouchableOpacity>
    )
  }
}

export default MenuButton
