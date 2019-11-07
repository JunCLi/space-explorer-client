import { combineReducers } from 'redux' 

import authenticationReducer from './authenticationReducers'
import launchesReducers from './launchesReducers'

export default combineReducers({
	authentication: authenticationReducer,
	refresh: launchesReducers,
}) 