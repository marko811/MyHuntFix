import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Image
}from 'react-native'
import styles from "./style"
import Text from '../../Text'
import {Colors} from '@common'

class HuntItem extends Component {

  render() {
    let {item,onPress} = this.props
    return (
      <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={()=>onPress(item)}>
        <Image source={{uri:item.field_asset_art}} style={styles.image}/>
      </TouchableOpacity>
    )
  }
}

export default HuntItem
