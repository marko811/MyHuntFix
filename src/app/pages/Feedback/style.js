import {StyleSheet} from 'react-native';
import {Constants, Colors, Styles} from "@common"

export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  form: {
    ...Styles.matchParent,
    marginHorizontal:35,
    marginTop:20,
    marginBottom:30
  },
  input:{
    marginBottom:8,
  },
  logo:{
  	width:200,
  	height:60,
  	resizeMode:'contain',
  	alignSelf:'center',
  	marginTop:50
  },
  label:{
    textAlign:'center',
    fontSize:Constants.FontSize.small,
    fontWeight:'bold',
    color:'white',
    marginBottom:5
  },
  dropdown:{
    width:'100%',
    height:40,
    borderRadius:4,
    backgroundColor:'rgba(170,170,170,1.0)',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:5
  },
  dropdownText:{
    color:Colors.gray,
    fontSize:Constants.FontSize.tiny
  },
  dropdownIcon:{
    width:8,
    height:15,
    resizeMode:'contain'
  },
  textarea:{
    marginTop:8,
    marginBottom:20,
    height:200
  }
});
