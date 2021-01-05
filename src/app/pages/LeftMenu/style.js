import {StyleSheet} from 'react-native';
import {Constants, Colors, Styles} from "@common"

export default StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    backgroundColor:Colors.gray
  },
  logo:{
  	width:150,
  	height:50,
  	resizeMode:'contain',
  	alignSelf:'center',
  	marginVertical:50
  },
  topView:{
  	paddingHorizontal:30
  },
  itemText:{
  	color:'white',
  	marginVertical:6
  },
  bottomView:{
  	position:'absolute',
  	bottom:50,
  	left:0,
  	right:0,
  	paddingHorizontal:30
  },
  settingIcon:{
  	width:25,
  	height:25,
  	marginVertical:10,
    marginRight:10,
  	resizeMode:'contain'
  }
});
