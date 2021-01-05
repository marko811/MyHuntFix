import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Constants, Colors, Styles} from "@common"

export default class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
    }
  }

  render() {
    return (
      <View style={style.container}>
        <TouchableOpacity style={[style.left, this.state.current===0&&style.selected]}
                          onPress={()=>{this.setState({current: 0})}}>
          <Text style={[style.text, this.state.current===0&&style.textFocus]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[style.right, this.state.current===1&&style.selected]}
                          onPress={()=>{this.setState({current: 1})}}>
          <Text style={[style.text, this.state.current===1&&style.textFocus]}>Registered</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    padding: 8,
    ...Styles.centerContent,
    flexDirection: 'row',
  },


  left: {
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    borderLeftWidth: 1.5,
    borderTopWidth: 1.5,
    borderBottomWidth: 1.5,
    borderColor: '#0076FF',
    width: 100,
    ...Styles.centerContent,
  },

  right: {
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    borderRightWidth: 1.5,
    borderTopWidth: 1.5,
    borderBottomWidth: 1.5,
    borderColor: '#0076FF',
    width: 100,
    ...Styles.centerContent,
  },

  selected: {
    backgroundColor: '#0076FF',
  },

  text: {
    backgroundColor: 'transparent',
    fontSize: Constants.FontSize.tiny,
    color: '#0076FF',
    textAlign: 'center',
    lineHeight: 30,
  },

  textFocus: {
    color: 'white',
  }
});

