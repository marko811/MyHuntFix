import {StyleSheet} from 'react-native';
import {Constants, Colors, Styles} from "@common"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  logo:{
  	width:200,
  	height:60,
  	resizeMode:'contain',
  	alignSelf:'center',
  	marginTop:10
  },
  label:{
    textAlign:'center',
    fontSize:Constants.FontSize.large,
    fontWeight:'bold',
    color:'white',
    marginBottom:30
  },
  content:{
    ...Styles.matchParent,
    backgroundColor:'rgba(22,22,22,1.0)',
  },
  text:{
    color:'white',
    fontSize:Constants.FontSize.tiny
  }
});
