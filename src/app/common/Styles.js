import Constants from "./Constants"
import Colors from "./Colors"

export default {
  matchParent: {
    flex: 1
  },
  centerContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  NavigationBar:{
    header:{
      backgroundColor:Colors.orange,
      borderBottomWidth:0
    }
  },
  DatePicker:{
    dateInput: {
      borderWidth:0,
      alignItems:'center',
    },
    dateText:{
      color:Colors.gray,
      fontSize:Constants.FontSize.tiny
    }
  },
  Html:{
    p:{
      color:'white'
    },
    h2:{
      color:'white'
    },
    label:{
      color:'white'
    },
    span:{
      color:'white'
    },
    div:{
      color:'white'
    },
  }
}
