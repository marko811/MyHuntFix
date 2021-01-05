import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Image
}from 'react-native'
import styles from "./style"
import Text from '../Text'
import {Colors} from '@common'

class Section extends Component {

  render() {
    let {name,selected,item,onPress} = this.props
    return (
      <TouchableOpacity style={[styles.container,selected && {backgroundColor:Colors.orange}]} onPress={()=>onPress(item)}>
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
    )
  }
}

export default Section
