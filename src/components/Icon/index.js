import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Constants, Colors, Styles, Icons} from "@common"

export default class SearchBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    let {onPress, icon, width} = this.props;
    let Tag = onPress?TouchableOpacity:View;
    return (

      <Tag style={[style.container, this.props.style, {width: width, height: width}]}
                        onPress={() => onPress&&onPress()}>
        <Image style={style.image} source={icon}/>
      </Tag>
    )
  }
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    ...Styles.centerContent
  },

  image: {
    flex: 1,
    resizeMode: 'contain',
  },

});

