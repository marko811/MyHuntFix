import {StyleSheet} from 'react-native';
import {Constants, Colors, Styles} from "@common"

export default StyleSheet.create({
  container: {
    ...Styles.matchParent,
    backgroundColor:Colors.black
  },
  title:{
    color:Colors.orange,
    textAlign:'center',
  },
  logo:{
  	width:200,
  	height:60,
  	resizeMode:'contain',
  	alignSelf:'center',
  	marginTop:50
  },
  content:{
    ...Styles.matchParent,
    justifyContent:'center'
  },
  list:{
    marginTop:20
  }
});
