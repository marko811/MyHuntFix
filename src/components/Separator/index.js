import React,{Component} from 'react';
import {
View
} from 'react-native';
import styles from './style'

class Separator extends Component{

  render(){

    return (
      <View style={styles.container}>
        <View style={styles.progress}/>
      </View>
    )
  }
}

export default Separator;
