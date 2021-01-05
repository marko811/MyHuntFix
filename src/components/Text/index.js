import React,{Component} from 'react';
import { StyleSheet, Text } from 'react-native';
import {Constants,Colors} from "@common"

class MyText extends Component{
  constructor(props) {
    super(props)
    this.state = {
      fontFamily: Constants.FontName.ProximaNova,
    }
  }

  render(){
    return(
      <Text {...this.props} style={[style.text,this.props.style]}>{this.props.children}</Text>
    )
  }
}

const style = StyleSheet.create({
  text: {
    fontSize: Constants.FontSize.small,
    color: Colors.black,
  }
});

export default MyText;
