import {StyleSheet} from 'react-native';
import {Constants, Colors, Styles} from "@common"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  logo:{
  	width:200,
  	height:60,
  	resizeMode:'contain',
  	alignSelf:'center',
  	marginTop:50
  },
  content:{
    ...StyleSheet.absoluteFillObject,
    ...Styles.matchParent,
    justifyContent:'center',
    marginHorizontal:20
  },
  label:{
    color:"white",
    fontWeight:'bold',
    marginTop:20
  },
  info:{
    color:"white",
    fontWeight:'normal'
  },
  button:{
    width:140,
    height:30,
    marginTop:5,
    marginRight:20
  },
  buttonText:{
    fontSize:Constants.FontSize.tiny
  },
  row:{
    flexDirection:'row'
  },
  btnCancel:{
    marginVertical:8,
    color:Colors.orange,
    fontSize:Constants.FontSize.tiny
  }

});
