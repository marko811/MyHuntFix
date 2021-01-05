import {StyleSheet} from 'react-native';
import {Constants, Colors, Styles} from "@common"

export default StyleSheet.create({
  container: {
    ...Styles.matchParent,
    backgroundColor:Colors.orange
  },
  title:{
    color:'white',
    textAlign:'center',
    marginTop:20
  },
  subTitle:{
    color:'white',
    textAlign:'center',
    fontSize:50
  },
  content:{
    position:'absolute',
    bottom:0,
    left:0,
    right:0
  }
});
