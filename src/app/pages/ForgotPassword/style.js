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
    backgroundColor:'white',
    marginBottom:8,
    color:'black'
  },
  logo:{
  	width:200,
  	height:60,
  	resizeMode:'contain',
  	alignSelf:'center',
  	marginTop:20
  },
  title:{
    textAlign:'center',
    color:'white',
  },
  note:{
    textAlign:'center',
    fontSize:Constants.FontSize.tiny,
    color:'white',
    marginBottom:10
  },
  message:{
    backgroundColor:'green',
    paddingVertical:5,
    paddingHorizontal:30,
    marginBottom:20
  },
  errorMsg:{
    backgroundColor:'red',
    paddingVertical:5,
    paddingHorizontal:5,
    marginBottom:20
  },
  btnForgot:{
    alignSelf:'center',
    marginTop:5
  },
  btnForgotText:{
    color:Colors.orange
  },
  label:{
    color:Colors.orange,
    textAlign:'center',
    marginTop:20
  },
  btnRegister:{
    width:150,
    height:40,
    borderRadius:20,
    alignSelf:'center',
    marginVertical:20,
    ...Styles.centerContent,
    backgroundColor:Colors.orange
  },
  btnRegisterText:{
    color:'white'
  }
});
