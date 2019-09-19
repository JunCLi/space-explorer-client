import React from 'react'

import { SafeAreaView, Text, TouchableOpacity } from 'react-native'

const AuthLoading = props => {
	const handleNavigateAuthentication = () => {
		props.navigation.navigate('Auth')
	}

	const handleNavigateApp = () => {
		props.navigation.navigate('App')
	}

	return (
		<SafeAreaView>
			<Text>This will be the first screen in the App before we direct them to either stack</Text>
			<TouchableOpacity onPress={handleNavigateAuthentication}>
				<Text>Go to Authentication Stack</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={handleNavigateApp}>
				<Text>Go to App Stack</Text>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

export default AuthLoading