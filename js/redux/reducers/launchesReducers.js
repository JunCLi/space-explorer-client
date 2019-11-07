import { STORE_BOOKING_REFRESH } from '../actions/actionTypes'

const initialState = {
	refreshList: false,
}

export default (state = initialState, action) => {
	switch(action.type) {
		case STORE_BOOKING_REFRESH:
			return {
				...state,
				refreshList: action.payload
			}
		default:
			return state
	}
}