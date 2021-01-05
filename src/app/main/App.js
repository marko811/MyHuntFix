import React from 'react';
import Router from './Router';
import {BackAndroid, View,NetInfo} from "react-native"
import {LeftMenu} from '@pages';
import {Constants,Global,Utils} from "@common"
import {NavigationActions} from 'react-navigation';
import Drawer from 'react-native-drawer'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      showDrawer:false
    }
  }

  render(){
    return (

        <Drawer
        ref="drawer"
        type="overlay"
        tapToClose={true}
        openDrawerOffset={0.4} // 20% gap on the right side of drawer
        panCloseMask={0.4}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: {opacity: 1},
          mainOverlay: {opacity: ratio / 2,backgroundColor: 'black'},
        })}
        content={<LeftMenu goToScreen={this.goToScreen.bind(this)} closeDrawerMenu={this.closeDrawerMenu.bind(this)} signOut={this.signOut.bind(this)}/>}
        open={this.state.showDrawer}
        >
        <Router ref={'navigator'}/>
      </Drawer>


    )
  }

  componentDidMount(){
    //Drawer sub event
    this.sideDrawerOpenListener = Global.EventEmitter.addListener(Constants.EventEmitterName.OpenDrawer, this.openDrawerMenu.bind(this));
    this.sideDrawerCloseListener = Global.EventEmitter.addListener(Constants.EventEmitterName.CloseDrawer, this.closeDrawerMenu.bind(this));

    // BackAndroid.addEventListener('hardwareBackPress', function() {
    //  return true;
    // });

    global.isConnected = true
    function handleFirstConnectivityChange(isConnected) {
      console.log("isConnected: ",isConnected);
      global.isConnected = isConnected
    }
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      handleFirstConnectivityChange
    );
  }

  componentWillUnmount() {
    //Remove drawer event
    this.sideDrawerOpenListener.remove();
    this.sideDrawerCloseListener.remove();
  }

  openDrawerMenu(){
    this.setState({showDrawer:true})
  }

  closeDrawerMenu(){
    this.setState({showDrawer:false})
  }

  signOut(){
    this.setState({showDrawer:false},()=>{
      Global.EventEmitter.emit(Constants.EventEmitterName.SignOut)
    })
  }

  goToScreen(routeName, params = undefined) {
    const {navigator} = this.refs;
    if (!navigator) {
      return toast('Cannot navigate');
    }

    if (routeName == Constants.Screen.Home) {
      Utils.navigateAndResetStack(navigator,routeName,{})
    }else{
      navigator.dispatch({type: 'Navigation/NAVIGATE', routeName, params});
    }

    this.closeDrawerMenu();
  }
}
const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
}
module.exports = App;
