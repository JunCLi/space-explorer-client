import gql from 'graphql-tag'

export const GET_ALL_LAUNCHES = gql`
	query getAllLaunches($input: CursorPaginationObject) {
		getAllLaunches(input: $input) {
			nextCursor
			hasMore
			launches {
				flight_number
				rocket_id
				rocket_name
				rocket_type
				details
				mission_name
				mission_patch
				mission_patch_small
			}
		}
	}
`

export const BOOK_TRIP = gql`
	mutation bookTrip($flight_number: ID) {
		bookTrip(flight_number: $flight_number) {
			message
		}
	}
`


export const GET_BOOKED_TRIPS = gql`
	query getCursorBookedTrips($input: CursorPaginationObject) {
		getCursorBookedTrips(input: $input) {
			nextCursor
			hasMore
			bookedTrips {
				bookingDetails {
					status
					date_added
				}
				flightDetails {
					flight_number
					rocket_id
					rocket_name
					rocket_type
					details
					mission_name
					mission_patch
					mission_patch_small
				}  
			}
		}
	}
`

export const GET_SINGLE_BOOKED_TRIP = gql`
	query getSingleBookedTrip($flight_number: ID!) {
		getBookedTrip(flight_number: $flight_number) {
			bookingDetails {
				status
				date_added
			}
			flightDetails {
				flight_number
				rocket_id
				rocket_name
				rocket_type
				details
				mission_name
				mission_patch
				mission_patch_small
			}
		}
	}
`

// export const GET_BOOKED_TRIPS = gql`
// 	query getBookedTrips($input: BookedTripPaginationObject) {
// 		getBookedTrips(input: $input) {
// 			pageInfo {
// 				currentPage
// 				totalPages
// 			}
// 			bookedTrips {
// 				bookingDetails {
// 					status
// 					date_added
// 				}
// 				flightDetails {
// 					flight_number
// 					rocket_id
// 					rocket_name
// 					rocket_type
// 					details
// 					mission_name
// 					mission_patch
// 					mission_patch_small
//       	}
//     	}
// 		}
// 	}
// `