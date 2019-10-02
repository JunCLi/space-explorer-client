import { combineReducers } from 'redux' 

import authenticationReducer from './authenticationReducers'

export default combineReducers({
	authentication: authenticationReducer,
}) 