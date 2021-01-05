import {Constants,Languages} from './index'

import { NavigationActions} from 'react-navigation';
import Moment from 'moment';

function Utils() {};

Utils.check_email = function(val){
    if(!val.match(/\S+@\S+\.\S+/)){ // Jaymon's / Squirtle's solution
        // Do something
        return false;
    }
    if( val.indexOf(' ')!=-1 || val.indexOf('..')!=-1){
        // Do something
        return false;
    }
    return true;
}

Utils.navigateAndResetStack = function(navigation, screen, params){
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: screen, params: params})
      ]
    });
    navigation.dispatch(resetAction)
}

Utils.toHHMMSS = (sec) => {
    var sec_num = parseInt(sec, 10);
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    if (hours==0) {
      return minutes+':'+seconds;
    }else{
      if (hours   < 10) {hours   = "0"+hours;}
      return hours+':'+minutes+':'+seconds;
    }
}

Utils.clearHtmlTags = (text)=>{
  var regex = /(<([^>]+)>)/ig
  return text.replace(regex, "")
}

Utils.capitalize =  (text)=>{
    return text.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
}

Utils.dateFormat = (date,format=Constants.MonthFormat)=>{
  return Moment(date).format(format);
}
module.exports = Utils;
