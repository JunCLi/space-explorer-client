import React from 'react'

import { Platform, KeyboardAvoidingView, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, StatusBar } from 'react-native'

import LoginForm from './LoginForm'
import SaturnImage from '../../../assets/images/saturn-transparent.png'

import { backgroundStyles } from '../../../stylesheets/generalStyles'
import { welcomeStyles, loginStyles, loginFormStyles } from '../../../stylesheets/authentication/authenticationStyles'

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
						<Image
							source={SaturnImage}
							style={loginStyles.image}
						/>
					</View>

					<Text style={welcomeStyles.welcomeText}>Space explorer</Text>

					<View style={loginFormStyles.mainContainer}>
						<LoginForm /> 
						<TouchableOpacity>
							<Text style={loginFormStyles.forgotPassword}>Forgot your password?</Text>
						</TouchableOpacity>
					</View>

					<View style={welcomeStyles.bottomTextContainer}>
						<TouchableOpacity onPress={handleGoSignup}>
							<Text style={welcomeStyles.swapFormText}>Don't have an account? Create one</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
				
			</SafeAreaView>
		</KeyboardAvoidingView>
	)
}

export default Login