import {StyleSheet} from 'react-native';
import {Constants, Colors, Styles} from "@common"

export default StyleSheet.create({
  container: {
    paddingHorizontal:20,
    paddingVertical:10,
    flexDirection:'row',
    alignItems:'center'
  },
  title:{
    color:'white',
    fontSize:Constants.FontSize.medium,
    marginLeft:20
  },
  image:{
    width:60,
    height:60,
    resizeMode:'contain'
  },
  hightLight:{
    backgroundColor:Colors.lightOrange
  }
});
