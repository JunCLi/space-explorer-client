import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

const intitialState = {}

const middleware = [thunk]

export default store = createStore(
	rootReducer,
	intitialState,
	applyMiddleware(...middleware)
)