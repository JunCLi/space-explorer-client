import React, { useEffect } from 'react'

import { SafeAreaView, StatusBar, Text } from 'react-native'
import { useQuery } from 'react-apollo-hooks'
import { TEST_AUTHENTICATION } from '../../gql/authQueries'

import { backgroundStyles } from '../../stylesheets/generalStyles'

import LogoWithText from '../util/Logo/LogoWithText'

const AuthLoading = props => {
	const { data, loading, error } = useQuery(TEST_AUTHENTICATION)

	const handleGoAuthentication = () => {
		props.navigation.navigate('Auth')
	}

	const handleGoApp = () => {
		props.navigation.navigate('App')
	}

	useEffect(() => {
		if (!loading) {
			error ? handleGoAuthentication() : handleGoApp()
		}
	}, [data, loading, error])
	
	// console.log('authloading data?', data)
	return (
		<SafeAreaView style={backgroundStyles.background}>
			<StatusBar barStyle='light-content' />
			<LogoWithText containerStyle={{marginTop: 300}} />
		</SafeAreaView>
	)
}

export default AuthLoading