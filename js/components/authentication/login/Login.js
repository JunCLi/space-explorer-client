import React from 'react'

import { Platform, KeyboardAvoidingView, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, StatusBar } from 'react-native'

import LoginForm from './LoginForm'
import Logo from '../../util/Logo'
import SaturnImage from '../../../assets/images/saturn-transparent.png'

import { backgroundStyles } from '../../../stylesheets/generalStyles'
import { loginStyles } from '../../../stylesheets/authentication/signupLoginStyles'

const Login = props => {
	const handleGoSignup = () => {
		props.navigation.navigate('Signup')
	}

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : null}
			style={backgroundStyles.avoidKeyboard}
		>
			<SafeAreaView style={backgroundStyles.background}>
				<StatusBar barStyle='light-content' />

				<ScrollView style={backgroundStyles.container} contentContainerStyle={{flexGrow: 1}}>
					<View style={loginStyles.imageContainer}>
						<Logo size={100} />
					</View>

					<Text style={loginStyles.welcomeText}>Space explorer</Text>

					<LoginForm /> 

					<View style={loginStyles.bottomTextContainer}>
						<TouchableOpacity onPress={handleGoSignup}>
							<Text style={loginStyles.swapFormText}>Don't have an account? Create one</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
				
			</SafeAreaView>
		</KeyboardAvoidingView>
	)
}

export default Login