import React, {Component} from 'react';
import {
  Platform,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native'
import styles from "./style"
import {Languages, Constants} from "@common"
import {Button,TextInput,Text,Separator,WebView} from '@components'

class HuntDetail extends Component {

  render() {
    let {item} = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <Image source={item.image} style={styles.logo}/>
        <Text style={styles.label}>{item.title}</Text>
        <Separator />
        <ScrollView style={styles.content} contentContainerStyle={{padding:10}}>
          <WebView html={"<p style='text-align:justify'>"+item.content+"</p>"}/>
        </ScrollView>
      </View>
    );
  }
}

export default HuntDetail;
