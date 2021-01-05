import {StyleSheet} from 'react-native';
import {Constants, Colors, Styles} from "@common"

export default StyleSheet.create({
  container: {
    width:60,
    height:60,
    ...Styles.centerContent,
    backgroundColor:Colors.darkOrange,
    marginTop:2
  },
  text:{
    color:'white',
    fontSize:Constants.FontSize.large
  },

});
