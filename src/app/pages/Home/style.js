import {StyleSheet} from 'react-native';
import {Constants, Colors, Styles} from "@common"

export default StyleSheet.create({
  container: {
    ...Styles.matchParent,
    width:null,
    height:null
  },
  foreground:{
    flex:1,
    backgroundColor:"rgba(0,0,0,0.4)"
  },
  topView:{
    backgroundColor:Colors.backgroundProgress,
    ...Styles.centerContent,
    paddingVertical:20
  },
  title:{
    color:'white',
    fontSize:70,
  },
  row:{
    flexDirection:'row',
    alignItems:'center'
  },
  button:{
    height:30,
    borderRadius:0,
    width:200,
    alignItems:'flex-start',
    marginTop:5
  },
  buttonText:{
    fontSize:Constants.FontSize.tiny,
    marginLeft:10
  },
  dropdownIcon:{
    width:20,
    height:20,
    resizeMode:'contain',
    tintColor:Colors.orange,
    margin:5
  },
  dropdownWrap:{
    alignItems:'center'
  },
  wrapContainer:{
    ...Styles.matchParent,
    justifyContent:'flex-end'
  },
});
