import {StyleSheet} from 'react-native';
import {Constants, Colors, Styles} from "@common"

export default StyleSheet.create({
  container: {
    height:45,
    width:'100%',
    backgroundColor:Colors.orange,
    ...Styles.centerContent,
    borderRadius:4
  },
  title:{
    color:'white',
    fontSize:Constants.FontSize.large,
    fontWeight:'400'
  }
});
