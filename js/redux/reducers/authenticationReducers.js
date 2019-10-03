import { STORE_AUTHENTICATION } from '../actions/actionTypes'

const initialState = {
	id: '',
	email: '',
	firstName: '',
	lastName: '',
}

export default (state = initialState, action) => {
	switch(action.type) {
		case STORE_AUTHENTICATION:
			return {
				...action.payload
			}
		default:
			return state
	}
}