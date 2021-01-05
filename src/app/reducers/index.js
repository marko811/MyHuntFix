import { combineReducers } from 'redux'
import baseReducers from './base'
import appReducers from './App'

const reducers = combineReducers({
  baseReducers,
  appReducers,
});

export default reducers
