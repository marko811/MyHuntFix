import {StyleSheet,Platform} from 'react-native';
import {Constants, Colors, Styles} from "@common"

export default StyleSheet.create({
  container:{
    ...Styles.matchParent,
    backgroundColor:'rgba(22,22,22,1.0)',
  },
  player:{
    height:220,
    width:'100%'
  },
  content:{
    ...Styles.matchParent,
    backgroundColor:'rgba(22,22,22,1.0)',
    paddingHorizontal:20,
    paddingTop:20,
    justifyContent:'space-between',
  },
  title:{
    color:Colors.orange,
    fontSize:Constants.FontSize.large
  },
  state:{
    color:Colors.orange,
  },
  text:{
    color:'white',
    marginTop:20,
    fontSize:Constants.FontSize.tiny
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginVertical:10
  },
  btnIcon:{
    width:30,
    height:40,
    resizeMode:'contain'
  },
  btnNext:{
    flexDirection:'row',
    ...Styles.centerContent
  },
  btnNextTitle:{
    color:Colors.orange,
    fontSize:Constants.FontSize.superLarge,
    textAlign:'right',
    marginTop:-5
  },
  btnNextSubTitle:{
    color:'white',
    fontSize:Constants.FontSize.tiny,
    textAlign:'right'
  },
  header:{
    flexDirection:'row',
    height:Platform.OS === "ios" ? 64 : 56,
    backgroundColor:Colors.orange,
    justifyContent:'space-between',
    alignItems:'center'
  }

});
