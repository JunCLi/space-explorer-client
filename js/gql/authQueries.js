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
		}
	}
`