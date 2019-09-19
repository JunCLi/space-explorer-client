import React from 'react'

import { SafeAreaView, Text, TouchableOpacity } from 'react-native'

const AuthLoading = props => {
	const handleNavigateAuthentication = () => {
		props.navigation.navigate('Signup')
	}

	const handleNavigateApp = () => {
		props.navigation.navigate('Login')
	}

	return (
		<SafeAreaView>
			<Text>This is the first screen in the authentication stack.</Text>

			<Text>Welcome to space explorer!</Text>
			<Text>Sign up</Text>
			<Text>Log In</Text>

			<TouchableOpacity onPress={handleNavigateAuthentication}>
				<Text>Go to Sign Up Stack</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={handleNavigateApp}>
				<Text>Go to Log In Stack</Text>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

export default AuthLoading