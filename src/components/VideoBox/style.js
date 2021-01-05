import {StyleSheet} from 'react-native';
import {Constants, Colors, Styles} from "@common"

export default StyleSheet.create({
  container: {
    flex:1
  },
  controlsView:{
    height:40,
    width:'100%',
    backgroundColor:'rgba(0,0,0,0.5)',
    position:'absolute',
    left:0,
    right:0,
    bottom:0,
    flexDirection:'row',
    alignItems:'center'
  },
  icon:{
    width:15,
    height:15,
    margin:10,
    resizeMode:'contain'
  },
  slider:{
    flex:1
  },
  time:{
    fontSize:10,
    color:'white',
    marginLeft:10
  }
});
