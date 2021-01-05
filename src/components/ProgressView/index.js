import React from 'react';
import { StyleSheet, View,ActivityIndicator } from 'react-native';
import {Constants} from "../../app/common"

const ProgressView = (props) => {
    return (
      <View style={style.indicatorContainer}>
        <ActivityIndicator
          animating={true}
          size="large"
          color={"black"}
        />
      </View>
    )
};

const style = StyleSheet.create({
  indicatorContainer: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    top:0,
    left:0,
    bottom:0,
    right:0,
    position: 'absolute',
    backgroundColor:'rgba(255,255,255,0.5)'
  }
});

export default ProgressView;
