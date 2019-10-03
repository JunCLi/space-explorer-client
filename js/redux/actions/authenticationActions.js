import { STORE_AUTHENTICATION } from './actionTypes'

export const storeAuthentication = authenticatedUser => dispatch => {
	dispatch({
		type: STORE_AUTHENTICATION,
		payload: authenticatedUser
	})
}