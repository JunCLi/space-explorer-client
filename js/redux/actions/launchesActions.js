import { STORE_BOOKING_REFRESH } from './actionTypes'

export const storeBookingRefresh = refreshList => dispatch => {
	dispatch({
		type: STORE_BOOKING_REFRESH,
		payload: refreshList,
	})
}