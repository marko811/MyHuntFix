import React,{Component} from 'react';
import {
TouchableOpacity,
View
} from 'react-native';
import Text from "../Text"
import styles from './style'

class Button extends Component{
  static defaultProps = {
    style:{},
    title:'',
    textStyle:{},
    disabled:false,
    onPress:()=>{}
  }
  render(){
    let {title,style,textStyle,onPress,disabled} = this.props

    return (
      <TouchableOpacity style={[styles.container,style]} onPress={()=>onPress()} activeOpacity={0.8} disabled={disabled}>
        <Text style={[styles.title,textStyle]}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

export default Button;
