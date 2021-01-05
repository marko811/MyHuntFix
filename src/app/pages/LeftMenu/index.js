import React, {Component} from 'react';
import {
  Platform,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import styles from "./style"
import {Languages, Constants,Utils} from "@common"
import {Text} from '@components'

class LeftMenu extends Component {

  render() {
    let {goToScreen,signOut} = this.props

    return (
      <View style={styles.container}>
        <Image source={require('@images/ic_logo.png')} style={styles.logo}/>
        <View style={styles.topView}>
          <TouchableOpacity onPress={()=>goToScreen(Constants.Screen.Originals)}>
            <Text style={styles.itemText}>MHF Originals</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>goToScreen(Constants.Screen.Home)}>
            <Text style={styles.itemText}>Shows</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>goToScreen(Constants.Screen.HowToHunt)}>
            <Text style={styles.itemText}>How to hunt</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomView}>
          <TouchableOpacity>
            <Image source={require('@images/ic_setting.png')} style={styles.settingIcon}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>goToScreen(Constants.Screen.Account)}>
            <Text style={styles.itemText}>Account</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>goToScreen(Constants.Screen.FAQ)}>
            <Text style={styles.itemText}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>goToScreen(Constants.Screen.Feedback)}>
            <Text style={styles.itemText}>Feedback</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>goToScreen(Constants.Screen.CustomerService)}>
            <Text style={styles.itemText}>Customer Service</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>goToScreen(Constants.Screen.TermOfUse)}>
            <Text style={styles.itemText}>Terms of use</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>signOut()}>
            <Text style={styles.itemText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }



}

export default LeftMenu;
