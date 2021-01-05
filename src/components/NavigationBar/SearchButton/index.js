import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Image
}from 'react-native'
import styles from "./style"

class SearchButton extends Component {

  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Image source={require('@images/ic_search.png')} style={styles.icon}/>
      </TouchableOpacity>
    )
  }
}

export default SearchButton
