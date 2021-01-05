import Helper from './dev_network';
import {Platform} from 'react-native'
const ALLOW_INVALID_HTTPS = true;

class NetworkHelper {
  static requestPost(url,params,headers=null){
    return new Promise((resolve,reject)=>{
      if (ALLOW_INVALID_HTTPS) {
        Helper.requestAPIByURL(url,"POST",params,function(response){
          console.log("****************Request****************");
          console.log("url: ",url);
          console.log("params: ",JSON.stringify(params));
          console.log("response: ",response);
          console.log("****************End****************");

          
          if (Platform.OS=="android") {
            response = JSON.parse(response)
          }
          let statusCode = response.statusCode
          let responseData = response.body
          resolve({statusCode,responseData})
          
        },function(error){
          console.log("****************Request****************");
          console.log("url: ",url);
          console.log("params: ",params);
          console.log("Request error: ",error);
          console.log("****************End****************");

          reject(error);
        });
      }else{
        fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(params)
          })
        .then((response) =>  {
          console.log("****************Request****************");
          console.log("url: ",url);
          console.log("params: ",params);
          console.log("response: ",response);
          console.log("****************End****************");
          let statusCode = response.status
          let responseData = response.bodyText
          resolve({statusCode,responseData})
        })
        .catch((error) => {
          console.log("****************Request****************");
          console.log("url: ",url);
          console.log("params: ",params);
          console.log("Request error: ",error);
          console.log("****************End****************");
          reject(error)
        });
      }
    });
  }

  static requestPostForm(url,params,headers=null){
    return new Promise((resolve,reject)=>{
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params
      })
        .then((response) => {
          console.log("****************Request****************");
          console.log("url: ",url);
          console.log("params: ",params);
          console.log("response: ",response.bodyText);
          console.log("****************End****************");
          let statusCode = response.status
          let responseData = response.bodyText
          resolve({statusCode,responseData})
        })
        .catch((error) => {
          console.log("****************Request****************");
          console.log("url: ",url);
          console.log("params: ",params);
          console.log("Request error: ",error);
          console.log("****************End****************");
          reject(error)
        });
    });
  }

  static requestGet(url,headers=null){
    return new Promise((resolve,reject)=>{
      if (ALLOW_INVALID_HTTPS) {
        Helper.requestAPIByURL(url,"GET",null,function(response){
          console.log("****************Request****************");
          console.log("url: ",url);
          console.log("response: ",response);
          console.log("****************End****************");

          if (Platform.OS=="android") {
            response = JSON.parse(response)
          }
          
          let statusCode = response.statusCode
          let responseData = response.body
          resolve({statusCode,responseData})
        },function(error){
          console.log("****************Request****************");
          console.log("url: ",url);
          console.log("Request error: ",error);
          console.log("****************End****************");

          reject(error);
        });
      }else{
        fetch(url, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+headers
          }
        })
          .then((response) => {
            console.log("****************Request****************");
            console.log("url: ",url);
            console.log('header: ',headers);
            console.log("response: ",response.bodyText);
            console.log("****************End****************");
            let statusCode = response.status
            let responseData = response.bodyText
            resolve({statusCode,responseData})
          })
          .catch((error) => {
            console.log("****************Request****************");
            console.log("url: ",url);
            console.log('header: ',headers);
            console.log("Request error: ",error);
            console.log("****************End****************");
            reject(error)
          });
      }
    });
  }
}

export default NetworkHelper
