import {NetworkHelper, Api, Languages, Constants, Utils} from "./index"
import {Platform, NativeModules, AsyncStorage} from 'react-native'

class Services {
  static login(name,pass) {
    return new Promise((resolve, reject) => {

      if (!global.isConnected) {
        reject(Languages.MESSAGE_NO_INTERNET)
        return
      }

      NetworkHelper.requestPost(Api.LOGIN_API, {name,pass})
        .then(({statusCode,responseData}) => {
          if (statusCode == 200) {
            resolve(responseData)
          } else if (responseData.hasOwnProperty("error")) {
              reject(responseData.error)
          }else{
              reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
          }
        })
        .catch((error) => {
          reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
        });
    });
  }

  static getShows() {
    return new Promise((resolve, reject) => {

      if (!global.isConnected) {
        reject(Languages.MESSAGE_NO_INTERNET)
        return
      }

      NetworkHelper.requestGet(Api.SHOWS_API)
        .then(({statusCode,responseData}) => {
          if (statusCode == 200) {
            resolve(responseData.categories)
          } else if (responseData.hasOwnProperty("error")) {
              reject(responseData.error)
          }else{
              reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
          }
        })
        .catch((error) => {
          reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
        });
    });
  }

  static getSeriesShow(seriesId) {
    return new Promise((resolve, reject) => {

      if (!global.isConnected) {
        reject(Languages.MESSAGE_NO_INTERNET)
        return
      }

      NetworkHelper.requestGet(Api.GET_SERIES_SHOW_API+seriesId+"?_format=json")
        .then(({statusCode,responseData}) => {
          if (statusCode == 200) {
            resolve(responseData.series)
          } else if (responseData.hasOwnProperty("error")) {
              reject(responseData.error)
          }else{
              reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
          }
        })
        .catch((error) => {
          reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
        });
    });
  }

  static getEpisodesBySeasion(seriesId,seasionId) {
    return new Promise((resolve, reject) => {

      if (!global.isConnected) {
        reject(Languages.MESSAGE_NO_INTERNET)
        return
      }

      NetworkHelper.requestGet(Api.GET_SERIES_SHOW_API+seriesId+"/"+seasionId+"?_format=json")
        .then(({statusCode,responseData}) => {
          if (statusCode == 200) {
            resolve(responseData.series)
          } else if (responseData.hasOwnProperty("error")) {
              reject(responseData.error)
          }else{
              reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
          }
        })
        .catch((error) => {
          reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
        });
    });
  }

  static registerSubscribe(params) {
    return new Promise((resolve, reject) => {

      if (!global.isConnected) {
        reject(Languages.MESSAGE_NO_INTERNET)
        return
      }

      params.json = true
      params.endpoint = "stripe/buy"
      params.mail = params.email
      delete params.email
      if (params.hasOwnProperty('promocode') && params.promocode.length == 0) {
        delete params.promocode
      }

      NetworkHelper.requestPost(Api.REGISTER_SUBSCRIBE_API, params)
        .then(({statusCode,responseData}) => {
          if (statusCode == 200) {
            if (responseData.hasOwnProperty("error")) {
                reject(responseData.error)
            }else{
              resolve(responseData)
            }
          } else if (responseData.hasOwnProperty("error")) {
              reject(responseData.error)
          }else{
              reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
          }
        })
        .catch((error) => {
          reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
        });
    });
  }

  static getPlans() {
    return new Promise((resolve, reject) => {

      if (!global.isConnected) {
        reject(Languages.MESSAGE_NO_INTERNET)
        return
      }

      NetworkHelper.requestGet(Api.GET_PLANS_API)
        .then(({statusCode,responseData}) => {
          if (statusCode == 200) {
            resolve(responseData.plans)
          } else if (responseData.hasOwnProperty("error")) {
              reject(responseData.error)
          }else{
              reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
          }
        })
        .catch((error) => {
          reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
        });
    });
  }

  static getAsset(episodeId) {
    return new Promise((resolve, reject) => {

      if (!global.isConnected) {
        reject(Languages.MESSAGE_NO_INTERNET)
        return
      }

      NetworkHelper.requestGet(Api.GET_ASSET_API+episodeId+"?_format=json")
        .then(({statusCode,responseData}) => {
          if (statusCode == 200) {
            resolve(responseData.video)
          } else if (responseData.hasOwnProperty("error")) {
              reject(responseData.error)
          }else{
              reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
          }
        })
        .catch((error) => {
          reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
        });
    });
  }

  static getCustomerService() {
    return new Promise((resolve, reject) => {

      if (!global.isConnected) {
        reject(Languages.MESSAGE_NO_INTERNET)
        return
      }

      NetworkHelper.requestGet(Api.CUSTOMER_SERVICE_API)
        .then(({statusCode,responseData}) => {
          if (statusCode == 200) {
            resolve(responseData.page)
          } else if (responseData.hasOwnProperty("error")) {
              reject(responseData.error)
          }else{
              reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
          }
        })
        .catch((error) => {
          reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
        });
    });
  }

  static getTermOfService() {
    return new Promise((resolve, reject) => {

      if (!global.isConnected) {
        reject(Languages.MESSAGE_NO_INTERNET)
        return
      }

      NetworkHelper.requestGet(Api.TERM_OF_SERVICE_API)
        .then(({statusCode,responseData}) => {
          if (statusCode == 200) {
            resolve(responseData.page)
          } else if (responseData.hasOwnProperty("error")) {
              reject(responseData.error)
          }else{
              reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
          }
        })
        .catch((error) => {
          reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
        });
    });
  }

  static getFAQ() {
    return new Promise((resolve, reject) => {

      if (!global.isConnected) {
        reject(Languages.MESSAGE_NO_INTERNET)
        return
      }

      NetworkHelper.requestGet(Api.FAQ_API)
        .then(({statusCode,responseData}) => {
          if (statusCode == 200) {
            resolve(responseData.page)
          } else if (responseData.hasOwnProperty("error")) {
              reject(responseData.error)
          }else{
              reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
          }
        })
        .catch((error) => {
          reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
        });
    });
  }

  static feedback(email,name,topic,comments) {
    return new Promise((resolve, reject) => {

      if (!global.isConnected) {
        reject(Languages.MESSAGE_NO_INTERNET)
        return
      }

      NetworkHelper.requestPost(Api.FEEDBACK_API,{email,name,topic,comments})
        .then(({statusCode,responseData}) => {
          if (statusCode == 200) {
            resolve(responseData)
          } else if (responseData.hasOwnProperty("error")) {
              reject(responseData.error)
          }else{
              reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
          }
        })
        .catch((error) => {
          reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
        });
    });
  }

  static changeMail(email) {
    return new Promise((resolve, reject) => {

      if (!global.isConnected) {
        reject(Languages.MESSAGE_NO_INTERNET)
        return
      }

      NetworkHelper.requestPost(Api.CHANGE_MAIL_API,{email})
        .then(({statusCode,responseData}) => {
          if (statusCode == 200) {
            resolve(responseData)
          } else if (responseData.hasOwnProperty("error")) {
              reject(responseData.error)
          }else{
              reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
          }
        })
        .catch((error) => {
          reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
        });
    });
  }

  static changePassword(oldPassword,newPassword) {
    return new Promise((resolve, reject) => {

      if (!global.isConnected) {
        reject(Languages.MESSAGE_NO_INTERNET)
        return
      }

      NetworkHelper.requestPost(Api.CHANGE_PASSWORD_API,{oldPassword,newPassword})
        .then(({statusCode,responseData}) => {
          if (statusCode == 200) {
              if (responseData.hasOwnProperty("status") && responseData.status == 1) {
                resolve(responseData)
              }else{
                reject(responseData.message)
              }
          } else if (responseData.hasOwnProperty("error")) {
              reject(responseData.error)
          }else{
              reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
          }
        })
        .catch((error) => {
          reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
        });
    });
  }

  static resetPassword(userInput) {
    return new Promise((resolve, reject) => {

      if (!global.isConnected) {
        reject(Languages.MESSAGE_NO_INTERNET)
        return
      }

      NetworkHelper.requestPost(Api.FORGOT_PASSWORD_API,{userInput})
        .then(({statusCode,responseData}) => {
          if (statusCode == 200 && responseData.hasOwnProperty('success') && responseData.success == true) {
            resolve(responseData)
          } else if (responseData.hasOwnProperty("error")) {
              reject(responseData.error)
          }else{
              reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
          }
        })
        .catch((error) => {
          reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
        });
    });
  }

  static changeUserPlan(token,uid,pid) {
    return new Promise((resolve, reject) => {

      if (!global.isConnected) {
        reject(Languages.MESSAGE_NO_INTERNET)
        return
      }
      NetworkHelper.requestPost(Api.CHANGE_PLAN_API,{endpoint:'stripe',pid})
        .then(({statusCode,responseData}) => {
          if (statusCode == 200) {
            resolve(responseData)
          } else if (responseData.hasOwnProperty("error")) {
              reject(responseData.error)
          }else{
              reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
          }
        })
        .catch((error) => {
          reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
        });
    });
  }

  static createUser(name,mail,pass) {
    return new Promise((resolve, reject) => {

      if (!global.isConnected) {
        reject(Languages.MESSAGE_NO_INTERNET)
        return
      }
      NetworkHelper.requestPost(Api.CREATE_USER_API,{name,mail,pass})
        .then(({statusCode,responseData}) => {
          if (statusCode == 200 && (!responseData.hasOwnProperty('error') || responseData.error == null)) {
              resolve(responseData)
          } else if (responseData.hasOwnProperty("error")) {
              reject(responseData.error)
          }else{
              reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
          }
        })
        .catch((error) => {
          reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
        });
    });
  }

  static getTagById(tagId) {
    return new Promise((resolve, reject) => {

      if (!global.isConnected) {
        reject(Languages.MESSAGE_NO_INTERNET)
        return
      }

      NetworkHelper.requestGet(Api.GET_TAG_API+tagId+"?_format=json")
        .then(({statusCode,responseData}) => {
          if (statusCode == 200 && responseData.hasOwnProperty('tag')) {
            resolve(responseData.tag)
          } else if (responseData.hasOwnProperty("error")) {
              reject(responseData.error)
          }else{
              reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
          }
        })
        .catch((error) => {
          reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
        });
    });
  }

  static checkCoupon(promocode) {
    return new Promise((resolve, reject) => {

      if (!global.isConnected) {
        reject(Languages.MESSAGE_NO_INTERNET)
        return
      }

      let params = {
          "promocode":promocode,
          "endpoint":"stripe"
        }
      NetworkHelper.requestPost(Api.CHECK_COUPON_API,params)
        .then(({statusCode,responseData}) => {
          if (statusCode == 200 && responseData.hasOwnProperty('status') && responseData.status == 1) {
            resolve(responseData.message.isValidCoupon)
          } else if (responseData.hasOwnProperty("error")) {
              reject(responseData.error)
          }else{
              reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
          }
        })
        .catch((error) => {
          reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
        });
    });
  }

  static getProfile() {
    return new Promise((resolve, reject) => {

      if (!global.isConnected) {
        reject(Languages.MESSAGE_NO_INTERNET)
        return
      }

      NetworkHelper.requestGet(Api.PROFILE_API)
        .then(({statusCode,responseData}) => {
          if (statusCode == 200 && responseData.hasOwnProperty('uid')) {
            resolve(responseData)
          } else if (responseData.hasOwnProperty("error")) {
              reject(responseData.error)
          }else{
              reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
          }
        })
        .catch((error) => {
          reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
        });
    });
  }

  static updateUser(stripeToken,number,expMonth,expYear,cvc) {
    return new Promise((resolve, reject) => {

      if (!global.isConnected) {
        reject(Languages.MESSAGE_NO_INTERNET)
        return
      }

      NetworkHelper.requestPost(Api.UPDATE_USER_API,{stripeToken,number,"exp-month":expMonth,"exp-year":expYear,cvc})
        .then(({statusCode,responseData}) => {
          if (statusCode == 200 && responseData.hasOwnProperty('status')) {
            if (responseData.status == 1) {
              resolve(responseData)
            }else{
              reject(responseData.message)
            }
          } else if (responseData.hasOwnProperty("error")) {
              reject(responseData.error)
          }else{
              reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
          }
        })
        .catch((error) => {
          reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
        });
    });
  }

  static cancelSubscription() {
    return new Promise((resolve, reject) => {

      if (!global.isConnected) {
        reject(Languages.MESSAGE_NO_INTERNET)
        return
      }

      NetworkHelper.requestPost(Api.CANCEL_SUBSCRIPTION_API,{})
        .then(({statusCode,responseData}) => {
          if (statusCode == 200 && responseData.hasOwnProperty('error')) {
            if (responseData.error == false) {
              resolve(responseData)
            }else{
              reject(responseData.message)
            }
          } else if (responseData.hasOwnProperty("error")) {
              reject(responseData.error)
          }else{
              reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
          }
        })
        .catch((error) => {
          reject(Languages.MESSAGE_ERROR_CONNECT_SERVER)
        });
    });
  }
}

export default Services
