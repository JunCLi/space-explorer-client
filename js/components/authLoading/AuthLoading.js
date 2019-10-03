import React, { useEffect } from 'react'

import { SafeAreaView, StatusBar, Text } from 'react-native'

import { useQuery } from 'react-apollo-hooks'
import { TEST_AUTHENTICATION } from '../../gql/authQueries'
import { connect } from 'react-redux'
import { storeAuthentication } from '../../redux/actions/authenticationActions'

import { backgroundStyles } from '../../stylesheets/generalStyles'

import LogoWithText from '../util/Logo/LogoWithText'

const mapStateToProps = state => {
	return {
		state
	}
}

const AuthLoading = props => {
	const { data , loading, error } = useQuery(TEST_AUTHENTICATION, { fetchPolicy: "network-only" })

	const handleGoAuthentication = () => {
		props.navigation.navigate('Auth')
	}

	const handleGoApp = () => {
		props.navigation.navigate('App')
	}

	const storeAuthentication = userData => {
		props.storeAuthentication(
			userData
		)
	}

	useEffect(() => {
		if (!loading) {
			if (!error) {
				storeAuthentication(data.getLoggedUser)
			} else if (props.navigation.state.params) {
				storeAuthentication(props.navigation.state.params.user)
			}
			!error || props.navigation.state.params ? handleGoApp() : handleGoAuthentication()
		}
	}, [data, loading, error])
	
	return (
		<SafeAreaView style={backgroundStyles.background}>
			<StatusBar barStyle='light-content' />
			<LogoWithText containerStyle={{marginTop: 300}} />

			{/* <Text onPress={() => props.storeAuthentication(data.getLoggedUser)}>press</Text>
			<Text onPress={() => console.log('show props', props)}>show props</Text>

			<Text onPress={handleGoAuthentication}>go auth</Text>
			<Text onPress={handleGoApp}>go App</Text> */}
		</SafeAreaView>
	)
}

export default connect(mapStateToProps, { storeAuthentication })(AuthLoading)