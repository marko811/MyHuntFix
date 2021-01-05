import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Slider,
  NativeModules,
  Alert
} from 'react-native';
import {Constants, Colors, Styles, Utils} from "@common"
import Video from 'react-native-video'
import styles from './style'
import Text from '../Text'
var ScreenManager = NativeModules.ScreenManager;

export default class VideoBox extends Component {
  state = {
    muted: false,
    duration: 0.0,
    currentTime: 0.0,
    paused: false,
    isBuffering: false,
    hideControl:true,
    contentHeight:0,
    endPlay:false,
    progress:0
  };

  render() {
    let {url} = this.props
    return (
      <TouchableOpacity style={styles.container} activeOpacity={1.0} onPress={this.showControl.bind(this)}>
        <Video
          source={{uri: url}}   // Can be a URL or a local file.
          ref={(ref) => {
            this.player = ref
          }}                                      // Store reference
          rate={1.0}                              // 0 is paused, 1 is normal.
          volume={1.0}                            // 0 is muted, 1 is normal.
          muted={this.state.muted}                           // Mutes the audio entirely.
          paused={this.state.paused}                          // Pauses playback entirely.
          resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
          playInBackground={false}                // Audio continues to play when app entering background.
          playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
          ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
          progressUpdateInterval={1000}          // [iOS] Interval to fire onProgress (default to ~250ms)
          onLoadStart={this.onLoadStart.bind(this)}            // Callback when video starts to load
          onLoad={this.onLoad.bind(this)}
          onBuffer={this.onBuffer.bind(this)}
          onProgress={this.onProgress.bind(this)}
          onEnd={this.onEnd.bind(this)}
          onError={this.onError.bind(this)}               // Callback when video cannot be loaded
          style={styles.container}/>
          {!this.state.hideControl && (
            <View style={styles.controlsView}>
              <TouchableOpacity onPress={this.playOrPause.bind(this)}>
                <Image source={this.state.paused ? require('@images/player/ic_play.png') : require('@images/player/ic_pause.png')} style={styles.icon}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.turnOnOffSound.bind(this)}>
                <Image source={this.state.muted ? require('@images/player/ic_volume_off.png') : require('@images/player/ic_volume_up.png')} style={styles.icon}/>
              </TouchableOpacity>
              <Slider
                style={styles.slider}
                maximumTrackTintColor="#5c6474"
                minimumTrackTintColor="white"
                maximumValue={parseInt(this.state.duration)}
                step={1}
                value={this.state.progress}
                onValueChange={this.onSliderChange.bind(this)}
                thumbTintColor="white"
                thumbImage={require('@images/player/ic_circle.png')}/>
              <Text style={styles.time}>{Utils.toHHMMSS(this.state.currentTime)}</Text>
              <TouchableOpacity onPress={()=>ScreenManager.changeOrientation()}>
                <Image source={require('@images/player/ic_fullscreen.png')} style={styles.icon}/>
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
    )
  }

  onLoad(data) {
     console.log('On load fired!');
     this.endPlay = false
     this.setState({duration: data.duration,hideControl:false});
     setTimeout(()=>{
       this.setState({hideControl:true});
     },2000)
   }

   onProgress(data) {
     var progress = parseInt(data.currentTime);
     this.setState({currentTime: data.currentTime,progress});
   }

   onBuffer({ isBuffering }: { isBuffering: boolean }) {
     this.setState({ isBuffering });
   }

   onLoadStart(data) {
      console.log('onLoadStart: ',data);
    }

   onError(error) {
     console.log('onError: ',error);
     //Alert.alert("Error","Can not play this video")
   }

   onEnd() {
     console.log('onEnd');
     this.endPlay = true
     this.setState({currentTime: 0,paused:true});
   }

   playOrPause(){
     if(this.endPlay){
       this.player.seek(0)
       this.endPlay = false
     }
     this.setState({paused:!this.state.paused})
   }

   turnOnOffSound(){
     this.setState({muted:!this.state.muted})
   }

   onSliderChange(progress){
     this.player.seek(progress)
   }

   showControl(){
     this.setState({hideControl:false});
     setTimeout(()=>{
       this.setState({hideControl:true});
     },2000)
   }
}
