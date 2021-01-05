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
    let {item,hightLight,onPress} = this.props
    return (
      <TouchableOpacity style={[styles.container,hightLight && styles.hightLight]} onPress={()=>onPress(item)} activeOpacity={0.8}>
        <Image source={item.image} style={styles.image}/>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    )
  }
}

export default HuntItem
