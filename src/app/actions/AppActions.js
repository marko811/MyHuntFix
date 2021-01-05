import * as ActionTypes from './ActionTypes'
import {Services, Constants, Languages, Utils} from "@common"
import {AsyncStorage} from 'react-native'
import stripe from 'tipsi-stripe'
import dismissKeyboard from 'react-native-dismiss-keyboard';

export const login = (name,pass) => {
  dismissKeyboard()
  return (dispatch, getState) => {
    dispatch({type: ActionTypes.LOGIN_PENDING})
    Services.login(name,pass)
      .then((response) => {
        Services.getProfile()
        .then((userInfo)=>{
          dispatch({type: ActionTypes.LOGIN_SUCCESS,userInfo})
        })
        .catch((errorMsg)=>{
            dispatch({type: ActionTypes.LOGIN_FAILURE, message: errorMsg})
        })
      })
      .catch((errorMsg) => {
        dispatch({type: ActionTypes.LOGIN_FAILURE, message: errorMsg})
      })
  }
};

export const registerSubscribe = (stripeParams,infoParams) => {
  dismissKeyboard()
  return (dispatch, getState) => {
    dispatch({type: ActionTypes.REGISTER_SUBSCRIBE_PENDING})

    if (stripeParams.number.length == 0 || stripeParams.expMonth.length == 0 || stripeParams.expYear.length == 0 || stripeParams.cvc.length == 0 || stripeParams.name.length == 0
    || infoParams.email.length == 0 || infoParams.pass.length == 0) {
      dispatch({type: ActionTypes.REGISTER_SUBSCRIBE_FAILURE, message: "Please fill all fields."})
      return
    }

    if (!Utils.check_email(infoParams.email)) {
      dispatch({type: ActionTypes.REGISTER_SUBSCRIBE_FAILURE, message: "The Email Address is in an invalid format."})
      return
    }

    let registerUser = (dispatch,stripeParams,infoParams)=>{
      stripe.init({
        publishableKey: Constants.StripePublicKey,
        androidPayMode: Constants.AndroidPayMode
      })
      stripe.createTokenWithCard(stripeParams)
      .then((response)=>{
        if (response.hasOwnProperty('tokenId')) {
            infoParams["stripeToken"] = response.tokenId
            Services.registerSubscribe(infoParams)
            .then((response) => {
              dispatch({type: ActionTypes.REGISTER_SUBSCRIBE_SUCCESS})
              // Services.createUser(infoParams.name,infoParams.email,infoParams.password)
              // .then((res)=>{
              //   dispatch({type: ActionTypes.REGISTER_SUBSCRIBE_SUCCESS})
              // })
              // .catch((errorMsg)=>{
              //   dispatch({type: ActionTypes.REGISTER_SUBSCRIBE_FAILURE, message: errorMsg})
              // })
            })
            .catch((errorMsg) => {
              dispatch({type: ActionTypes.REGISTER_SUBSCRIBE_FAILURE, message: errorMsg})
            })
        }else{
          dispatch({type: ActionTypes.REGISTER_SUBSCRIBE_FAILURE, message: "Invalid card"})
        }
      })
      .catch((error)=>{
        dispatch({type: ActionTypes.REGISTER_SUBSCRIBE_FAILURE, message: "Invalid card"})
      })
    }

    if (infoParams.promocode.length > 0) {
      Services.checkCoupon(infoParams.promocode)
      .then((res)=>{
        registerUser(dispatch,stripeParams,infoParams)
      })
      .catch((errorMsg)=>{
        dispatch({type: ActionTypes.REGISTER_SUBSCRIBE_FAILURE, message: errorMsg})
      })
    }else{
      registerUser(dispatch,stripeParams,infoParams)
    }
  }
};

export const getShows = () => {
  return (dispatch, getState) => {
    dispatch({type: ActionTypes.GET_SHOWS_PENDING})
    Services.getShows()
      .then((categories) => {
        var data = []
        var originals = null

        categories.forEach((category)=>{
          if (category.title == 'MHF Originals') {
            originals = category
          }
          if (category.shows.length > 0 && category.shows[0] != false) {
            data.push(category)
          }
        })
        dispatch({type: ActionTypes.GET_SHOWS_SUCCESS, categories:data,originals})
      })
      .catch((errorMsg) => {
        dispatch({type: ActionTypes.GET_SHOWS_FAILURE, message: errorMsg})
      })
  }
};

export const getSeriesShow = (item) => {
  return (dispatch, getState) => {
    dispatch({type: ActionTypes.GET_SERIES_SHOW_PENDING})
    Services.getSeriesShow(item.nid)
      .then((series) => {
        series.field_asset_art = item.field_asset_art
        dispatch({type: ActionTypes.GET_SERIES_SHOW_SUCCESS, series})
      })
      .catch((errorMsg) => {
        dispatch({type: ActionTypes.GET_SERIES_SHOW_FAILURE, message: errorMsg})
      })
  }
};

export const getEpisodesBySeasion = (seriesId,seasionId) => {
  return (dispatch, getState) => {
    dispatch({type: ActionTypes.GET_EPISODES_PENDING})
    Services.getEpisodesBySeasion(seriesId,seasionId)
      .then((episodes) => {
        dispatch({type: ActionTypes.GET_EPISODES_SUCCESS, episodes})
      })
      .catch((errorMsg) => {
        dispatch({type: ActionTypes.GET_EPISODES_FAILURE, message: errorMsg})
      })
  }
};

export const selectEpisode = (selectedEpisode,episodes) => {
  return (dispatch, getState) => {
    dispatch({type: ActionTypes.SELECTED_EPISODE,selectedEpisode,episodes})
  }
};

export const selectEpisodeIndex = (index) => {
  return (dispatch, getState) => {
    dispatch({type: ActionTypes.SELECTED_EPISODE_INDEX,index})
  }
};

export const getAsset = (episodeId,screenName) => {
  return (dispatch, getState) => {
    dispatch({type: ActionTypes.GET_ASSET_PENDING})
    Services.getAsset(episodeId)
      .then((video) => {
        dispatch({type: ActionTypes.GET_ASSET_SUCCESS, video,screenName})
      })
      .catch((errorMsg) => {
        dispatch({type: ActionTypes.GET_ASSET_FAILURE, message: errorMsg})
      })
  }
};

export const getPlans = () => {
  return (dispatch, getState) => {
    dispatch({type: ActionTypes.GET_PLANS_PENDING})
    Services.getPlans()
      .then((plans) => {
        dispatch({type: ActionTypes.GET_PLANS_SUCCESS, plans})
      })
      .catch((errorMsg) => {
        dispatch({type: ActionTypes.GET_PLANS_FAILURE, message: errorMsg})
      })
  }
};

export const getCustomerService = () => {
  return (dispatch, getState) => {
    dispatch({type: ActionTypes.GET_CUSTOMER_SERVICE_PENDING})
    Services.getCustomerService()
      .then((page) => {
        dispatch({type: ActionTypes.GET_CUSTOMER_SERVICE_SUCCESS, page})
      })
      .catch((errorMsg) => {
        dispatch({type: ActionTypes.GET_CUSTOMER_SERVICE_FAILURE, message: errorMsg})
      })
  }
};

export const getTermOfService = () => {
  return (dispatch, getState) => {
    dispatch({type: ActionTypes.GET_TERM_SERVICE_PENDING})
    Services.getTermOfService()
      .then((page) => {
        dispatch({type: ActionTypes.GET_TERM_SERVICE_SUCCESS, page})
      })
      .catch((errorMsg) => {
        dispatch({type: ActionTypes.GET_TERM_SERVICE_FAILURE, message: errorMsg})
      })
  }
};

export const getFAQ = () => {
  return (dispatch, getState) => {
    dispatch({type: ActionTypes.GET_FAQ_PENDING})
    Services.getFAQ()
      .then((page) => {
        dispatch({type: ActionTypes.GET_FAQ_SUCCESS, page})
      })
      .catch((errorMsg) => {
        dispatch({type: ActionTypes.GET_FAQ_FAILURE, message: errorMsg})
      })
  }
};

export const feedback = (email,name,topic,comments) => {
  dismissKeyboard()
  return (dispatch, getState) => {
    dispatch({type: ActionTypes.FEEDBACK_PENDING})
    Services.feedback(email,name,topic,comments)
      .then((response) => {
        dispatch({type: ActionTypes.FEEDBACK_SUCCESS})
      })
      .catch((errorMsg) => {
        dispatch({type: ActionTypes.FEEDBACK_FAILURE, message: errorMsg})
      })
  }
};

export const changeMyMail = (email,confirmEmail) => {
  dismissKeyboard()
  return (dispatch, getState) => {
    dispatch({type: ActionTypes.CHANGE_MAIL_PENDING})

    if (email.length == 0) {
      dispatch({type: ActionTypes.CHANGE_MAIL_FAILURE, message: "Email is empty."})
      return
    }

    if (!Utils.check_email(email)) {
      dispatch({type: ActionTypes.CHANGE_MAIL_FAILURE, message: "The Email Address is in an invalid format."})
      return
    }

    if (email != confirmEmail) {
      dispatch({type: ActionTypes.CHANGE_MAIL_FAILURE, message: "Email is not match."})
      return
    }
    Services.changeMail(email)
      .then((response) => {
        dispatch({type: ActionTypes.CHANGE_MAIL_SUCCESS,email})
      })
      .catch((errorMsg) => {
        dispatch({type: ActionTypes.CHANGE_MAIL_FAILURE, message: errorMsg})
      })
  }
};

export const changePassword = (oldPassword,newPassword,confirmPass) => {
  dismissKeyboard()
  return (dispatch, getState) => {
    if (oldPassword.length == 0 || newPassword.length == 0) {
      dispatch({type: ActionTypes.CHANGE_PASSWORD_FAILURE, message: "Password is empty."})
      return
    }
    if (newPassword != confirmPass) {
      dispatch({type: ActionTypes.CHANGE_PASSWORD_FAILURE, message: "New password and confirm new password are not match."})
      return
    }
    dispatch({type: ActionTypes.CHANGE_PASSWORD_PENDING})
    Services.changePassword(oldPassword,newPassword)
      .then((response) => {
        dispatch({type: ActionTypes.CHANGE_PASSWORD_SUCCESS})
      })
      .catch((errorMsg) => {
        dispatch({type: ActionTypes.CHANGE_PASSWORD_FAILURE, message: errorMsg})
      })
  }
};

export const resetPassword = (email) => {
  dismissKeyboard()
  return (dispatch, getState) => {
    if (email.length == 0) {
      dispatch({type: ActionTypes.FORGOT_PASSWORD_FAILURE, message: "Email is empty."})
      return
    }

    if (!Utils.check_email(email)) {
      dispatch({type: ActionTypes.FORGOT_PASSWORD_FAILURE, message: "The Email Address is in an invalid format."})
      return
    }

    dispatch({type: ActionTypes.FORGOT_PASSWORD_PENDING})
    Services.resetPassword(email)
      .then((response) => {
        dispatch({type: ActionTypes.FORGOT_PASSWORD_SUCCESS})
      })
      .catch((errorMsg) => {
        dispatch({type: ActionTypes.FORGOT_PASSWORD_FAILURE, message: errorMsg})
      })
  }
};

export const changeUserPlan = (token,uid,pid) => {
  dismissKeyboard()
  return (dispatch, getState) => {
    dispatch({type: ActionTypes.CHANGE_PLAN_PENDING})

          Services.changeUserPlan(token,uid,pid)
            .then((responseData) => {
              dispatch({type: ActionTypes.CHANGE_PLAN_SUCCESS})
            })
            .catch((errorMsg) => {
              dispatch({type: ActionTypes.CHANGE_PLAN_FAILURE, message: errorMsg})
            })
  }
};

export const getTags = (tags) => {
  dismissKeyboard()
  return (dispatch, getState) => {
    //dispatch({type: ActionTypes.GET_TAG_PENDING})
    var count = 0
    var list = []
    tags.forEach((tagId)=>{
      Services.getTagById(tagId)
      .then((tag) => {
        list.push(tag)
        count += 1
        if (count == tags.length) {
          dispatch({type: ActionTypes.GET_TAG_SUCCESS,tags:list})
        }
      })
      .catch((errorMsg) => {
        count += 1
        if (count == tags.length) {
          dispatch({type: ActionTypes.GET_TAG_FAILURE,message:errorMsg})
        }
      })
    })
  }
};

export const updateUser = (number,expMonth,expYear,cvc,name) => {
  dismissKeyboard()
  return (dispatch, getState) => {
    dispatch({type: ActionTypes.UPDATE_USER_PENDING})

    if (number.length == 0 || expMonth.length == 0 || expYear.length == 0 || cvc.length == 0 || name.length == 0) {
      dispatch({type: ActionTypes.UPDATE_USER_FAILURE, message: "Please fill all fields."})
      return
    }

    let stripeParams = {
      number,
      expMonth,
      expYear,
      cvc,
      name
    }

    stripe.init({
      publishableKey: Constants.StripePublicKey,
      androidPayMode: Constants.AndroidPayMode,
    })
    stripe.createTokenWithCard(stripeParams)
    .then((response)=>{
      if (response.hasOwnProperty('tokenId')) {
          Services.updateUser(response.tokenId,number,expMonth,expYear,cvc)
          .then((response) => {
            dispatch({type: ActionTypes.UPDATE_USER_SUCCESS})
          })
          .catch((errorMsg) => {
            dispatch({type: ActionTypes.UPDATE_USER_FAILURE, message: errorMsg})
          })
      }else{
        dispatch({type: ActionTypes.UPDATE_USER_FAILURE, message: "Invalid card"})
      }
    })
    .catch((error)=>{
      dispatch({type: ActionTypes.UPDATE_USER_FAILURE, message: "Invalid card"})
    })
  }
};

export const cancelSubscription = () => {
  return (dispatch, getState) => {
    dispatch({type: ActionTypes.CANCEL_SUBSCRIPTION_PENDING})
      Services.cancelSubscription()
      .then((responseData) => {
        dispatch({type: ActionTypes.CANCEL_SUBSCRIPTION_SUCCESS})
      })
      .catch((errorMsg) => {
        dispatch({type: ActionTypes.CANCEL_SUBSCRIPTION_FAILURE, message: errorMsg})
      })
  }
};
