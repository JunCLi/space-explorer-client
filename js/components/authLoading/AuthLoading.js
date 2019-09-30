import React from 'react'

import { SafeAreaView, Text } from 'react-native'
import { useQuery } from 'react-apollo-hooks'
import { TEST_AUTHENTICATION } from '../../gql/authQueries'

const AuthLoading = props => {
	const { data, loading, error } = useQuery(TEST_AUTHENTICATION)

	const handleGoAuthentication = () => {
		props.navigation.navigate('Auth')
	}

	const handleGoApp = () => {
		props.navigation.navigate('App')
	}

	if (loading) return (
		<SafeAreaView>
			<Text>Loading...</Text>
		</SafeAreaView>
	)

	error ? handleGoAuthentication() : handleGoApp()
	console.log('authloading data?', data)
	return (
		<SafeAreaView>
		</SafeAreaView>
	)
}

export default AuthLoading