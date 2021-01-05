import {StyleSheet} from 'react-native';
import {Constants, Colors, Styles} from "@common"

export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  loginForm: {
    ...Styles.matchParent,
    ...Styles.centerContent,
    marginHorizontal:35
  },
  input:{
    marginBottom:8,
  },
  logo:{
  	width:200,
  	height:60,
  	resizeMode:'contain',
  	alignSelf:'center',
  	marginTop:20
  },
  label:{
    width:'100%',
    textAlign:'left',
    color:Colors.orange,
    marginBottom:5
  },
  btnUpdate:{
    marginTop:30
  },
  btnCancel:{
    width:'100%',
    height:45,
    borderRadius:4,
    borderWidth:1,
    borderColor:Colors.orange,
    ...Styles.centerContent,
    marginTop:10
  },
  btnCancelText:{
    color:Colors.orange,
    fontSize:Constants.FontSize.large
  },
  note:{
    fontSize:Constants.FontSize.tiny,
    color:'red',
    textAlign:'center',
    marginVertical:5
  }
});
