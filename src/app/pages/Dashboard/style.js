import {StyleSheet} from 'react-native';
import {Constants, Colors, Styles} from "@common"

export default StyleSheet.create({
  container: {
    ...Styles.matchParent,
    backgroundColor:Colors.gray
  },
  banner:{
    height:150,
    width:'100%',
    resizeMode:'cover',
    marginTop:-5
  },
  wrapContainer:{
    ...Styles.matchParent,
    justifyContent:'flex-start'
  },
  content:{
    flexDirection:'row',
  },
  leftView:{

  },
  rightView:{
    ...Styles.matchParent,
    justifyContent:'flex-start',
    paddingBottom:20
  },
  title:{
    color:Colors.orange,
    fontSize:Constants.FontSize.large,
    marginHorizontal:20,
  },
});
