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
  	marginTop:30
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
  },
  message:{
    color:'white',
    marginVertical:5,
    textAlign:'center'
  },
  messageWrap:{
    backgroundColor:'red',
    marginBottom:10,
    width:'100%',
  }
});
