import {StyleSheet} from 'react-native';
import {Constants, Colors, Styles} from "@common"

export default StyleSheet.create({
  container: {
    marginHorizontal:20,
    marginVertical:5
  },
  label:{
    color:Colors.lightGrey,
    fontSize:Constants.FontSize.superLarge,
  },
  title:{
    color:Colors.darkOrange,
    fontSize:Constants.FontSize.tiny
  },
  labelSelected:{
    color:Colors.orange,
    fontSize:Constants.FontSize.superLarge,
    fontWeight:'bold'
  },
  titleSelected:{
    color:'white',
    fontSize:Constants.FontSize.big
  }
});
