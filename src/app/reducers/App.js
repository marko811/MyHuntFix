import * as ActionTypes from '@actions/ActionTypes'

const dataSuccess = (action) => {
  return {type: action.type, isRequesting: false, message: ""}
}
const dataFail = (action) => {
  return {type: action.type, isRequesting: false, message: action.message}
}
const dataPending = (action) => {
  return {type: action.type, isRequesting: true, message: ""}
}

export default function base(state = {}, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_PENDING:
    case ActionTypes.GET_SHOWS_PENDING:
    case ActionTypes.GET_SERIES_SHOW_PENDING:
    case ActionTypes.REGISTER_SUBSCRIBE_PENDING:
    case ActionTypes.GET_PLANS_PENDING:
    case ActionTypes.GET_ASSET_PENDING:
    case ActionTypes.GET_CUSTOMER_SERVICE_PENDING:
    case ActionTypes.GET_TERM_SERVICE_PENDING:
    case ActionTypes.FEEDBACK_PENDING:
    case ActionTypes.CHANGE_MAIL_PENDING:
    case ActionTypes.CHANGE_PASSWORD_PENDING:
    case ActionTypes.FORGOT_PASSWORD_PENDING:
    case ActionTypes.CHANGE_PLAN_PENDING:
    case ActionTypes.GET_FAQ_PENDING:
    case ActionTypes.GET_TAG_PENDING:
    case ActionTypes.UPDATE_USER_PENDING:
    case ActionTypes.CANCEL_SUBSCRIPTION_PENDING: {
      return Object.assign({}, state, {
        ...dataPending(action)
      })
    }
    case ActionTypes.LOGIN_FAILURE:
    case ActionTypes.GET_SHOWS_FAILURE:
    case ActionTypes.GET_SERIES_SHOW_FAILURE:
    case ActionTypes.REGISTER_SUBSCRIBE_FAILURE:
    case ActionTypes.GET_PLANS_FAILURE:
    case ActionTypes.GET_ASSET_FAILURE:
    case ActionTypes.GET_CUSTOMER_SERVICE_FAILURE:
    case ActionTypes.GET_TERM_SERVICE_FAILURE:
    case ActionTypes.FEEDBACK_FAILURE:
    case ActionTypes.CHANGE_PASSWORD_FAILURE:
    case ActionTypes.CHANGE_MAIL_FAILURE:
    case ActionTypes.FORGOT_PASSWORD_FAILURE:
    case ActionTypes.CHANGE_PLAN_FAILURE:
    case ActionTypes.GET_FAQ_FAILURE:
    case ActionTypes.GET_TAG_FAILURE:
    case ActionTypes.UPDATE_USER_FAILURE:
    case ActionTypes.CANCEL_SUBSCRIPTION_FAILURE:{
      return Object.assign({}, state, {
        ...dataFail(action)
      })
    }
    case ActionTypes.REGISTER_SUBSCRIBE_SUCCESS:
    case ActionTypes.FEEDBACK_SUCCESS:
    case ActionTypes.CHANGE_PASSWORD_SUCCESS:
    case ActionTypes.FORGOT_PASSWORD_SUCCESS:
    case ActionTypes.UPDATE_USER_SUCCESS: {
      return Object.assign({}, state, {
        ...dataSuccess(action)
      })
    }
    case ActionTypes.CHANGE_MAIL_SUCCESS:{
      state.userInfo.email = action.email
      return Object.assign({}, state, {
        ...dataSuccess(action)
      })
    }
    case ActionTypes.CHANGE_PLAN_SUCCESS:{
      state.userInfo.isSubbed = 1
      return Object.assign({}, state, {
        ...dataSuccess(action)
      })
    }
    case ActionTypes.CANCEL_SUBSCRIPTION_SUCCESS: {
      state.userInfo.isSubbed = 0
      return Object.assign({}, state, {
        ...dataSuccess(action)
      })
    }
    case ActionTypes.LOGIN_SUCCESS: {
      return Object.assign({}, state, {
        ...dataSuccess(action),
        userInfo:action.userInfo,
      })
    }
    case ActionTypes.GET_SHOWS_SUCCESS: {
      return Object.assign({}, state, {
        ...dataSuccess(action),
        categories:action.categories,
        originals:action.originals
      })
    }
    case ActionTypes.GET_SERIES_SHOW_SUCCESS: {
      return Object.assign({}, state, {
        ...dataSuccess(action),
        selectedShow:action.series
      })
    }
    case ActionTypes.GET_PLANS_SUCCESS: {
      return Object.assign({}, state, {
        ...dataSuccess(action),
        plans:action.plans
      })
    }
    case ActionTypes.SELECTED_EPISODE: {
      return Object.assign({}, state, {
        selectedEpisode:action.selectedEpisode,
        episodes:action.episodes
      })
    }
    case ActionTypes.SELECTED_EPISODE_INDEX: {
      return Object.assign({}, state, {
        selectedEpisodeIndex:action.index,
      })
    }
    case ActionTypes.GET_ASSET_SUCCESS: {
      return Object.assign({}, state, {
        ...dataSuccess(action),
        video:action.video,
        screenName:action.screenName
      })
    }
    case ActionTypes.GET_CUSTOMER_SERVICE_SUCCESS: {
      return Object.assign({}, state, {
        ...dataSuccess(action),
        customerService:action.page
      })
    }
    case ActionTypes.GET_TERM_SERVICE_SUCCESS: {
      return Object.assign({}, state, {
        ...dataSuccess(action),
        termOfService:action.page
      })
    }
    case ActionTypes.GET_FAQ_SUCCESS: {
      return Object.assign({}, state, {
        ...dataSuccess(action),
        faq:action.page
      })
    }
    case ActionTypes.GET_TAG_SUCCESS: {
      return Object.assign({}, state, {
        ...dataSuccess(action),
        tags:action.tags
      })
    }
    default:
      return state;
  }
}
