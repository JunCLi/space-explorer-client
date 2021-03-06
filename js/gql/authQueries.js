import gql from 'graphql-tag'

export const SIGNUP = gql`
	mutation signup($input: SignupObject!){
		signup(input: $input){
			message
		}
	}
`

export const LOGIN = gql`
	mutation login($input: LoginObject!){
		login(input: $input){
			message
			token
			user {
				user_id
				email
				first_name
				last_name
			}
		}
	}
`

export const LOGOUT = gql`
	mutation logout {
		logout {
			message
		}
	}
`

export const TEST_AUTHENTICATION = gql`
	query getLoggedUser {
		getLoggedUser {
			user_id
			email
			first_name
			last_name
		}
	}
`