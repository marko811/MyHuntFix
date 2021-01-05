import React,{Component} from 'react';
import {
TouchableOpacity,
View,
TextInput
} from 'react-native';
import Text from "../Text"
import styles from './style'
import {Colors} from '@common'

class Input extends Component{
  static defaultProps = {
    style:{},
  }
  render(){
    let {style} = this.props

    return (
      <TextInput
          autoCapitalize='none'
          underlineColorAndroid='transparent'
          placeholderTextColor={Colors.gray}
          {...this.props}
          style={[styles.container,style]}
          />
    )
  }
}

export default Input;
