import {StyleSheet} from 'react-native';
import {Constants, Colors, Styles} from "@common"

export default StyleSheet.create({
  container: {
    paddingHorizontal:5,
    paddingVertical:1,
    width:'100%',
    flexDirection:'row',
  },
  image:{
    height:150,
    width:170,
    marginRight:5,
    backgroundColor:'transparent'
  },
  wrapContent:{
    flex:1,
    justifyContent:'space-between'
  },
  btnMore:{
    height:30,
    width:100,
  },
  btnMoreText:{
    fontSize:Constants.FontSize.tiny,
    color:Colors.orange,
    backgroundColor:'transparent'
  },
  content:{
    flex:1,
    flexWrap:'wrap',
    color:'white',
    backgroundColor:'transparent'
  }

});
