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

export const TEST_1 = gql`
	query testAuthenticate {
		testAuthenticate {
			message
		}
	}
`