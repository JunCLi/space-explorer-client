import React from 'react'

import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

import LoginForm from './LoginForm'

import { loginFormStyles } from '../../../stylesheets/authentication/authenticationStyles'

const Login = () => {
	return (
		<View style={loginFormStyles.mainContainer}>
			<LoginForm />
			<Text style={loginFormStyles.forgotPassword}>Forgot your password?</Text>
		</View>
	)
}

export default Login