import React from 'react'

import { Text, TouchableOpacity, View } from 'react-native'

import LoginForm from './LoginForm'

import { welcomeStyles, loginFormStyles } from '../../../stylesheets/authentication/authenticationStyles'

const Login = props => {
	const { handleSwapForm, swapForm } = props

	return (
		<>
			<View style={loginFormStyles.mainContainer}>
				<LoginForm />
				<TouchableOpacity>
					<Text style={loginFormStyles.forgotPassword}>Forgot your password?</Text>
				</TouchableOpacity>
			</View>
			<View style={welcomeStyles.bottomTextContainer}>
				<TouchableOpacity onPress={handleSwapForm}>
					{swapForm === 'login'
						? <Text style={welcomeStyles.swapFormText}>Don't have an account? Create one</Text>
						: <Text style={welcomeStyles.swapFormText}>Already have an account? Log in</Text>
					}
				</TouchableOpacity>
			</View>
		</>
	)
}

export default Login