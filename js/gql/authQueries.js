import gql from 'graphql-tag'

export const TEST_2 = gql`
	query getAllLaunches {
		getAllLaunches(input: {
			page: 1
			perPage: 10
		}) {
			flight_number
			rocket_id
			rocket_name
			rocket_type
			mission_name
			mission_patch
			mission_patch_small
		}
	}
`