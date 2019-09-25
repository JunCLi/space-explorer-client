import React from 'react'

import { Platform, KeyboardAvoidingView, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, StatusBar } from 'react-native'

import SignupForm from './SignupForm'
import SaturnImage from '../../../assets/images/saturn-transparent.png'

import { backgroundStyles } from '../../../stylesheets/generalStyles'
import { welcomeStyles, signupStyles, loginFormStyles } from '../../../stylesheets/authentication/authenticationStyles'

const Signup = props => {
	const handleGoLogin = () => {
		props.navigation.navigate('Login')
	}

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : null}
			style={backgroundStyles.avoidKeyboard}
		>
			<SafeAreaView style={backgroundStyles.background}>
				<StatusBar barStyle='light-content' />
				
				<ScrollView style={backgroundStyles.container} contentContainerStyle={{flexGrow: 1}}>
					<View style={signupStyles.imageContainer}>
						<Image
							source={SaturnImage}
							style={signupStyles.image}
						/>
					</View>

					<View style={loginFormStyles.mainContainer}>
						<SignupForm {...props} /> 
					</View>

					<View style={welcomeStyles.bottomTextContainer}>
						<TouchableOpacity onPress={handleGoLogin}>
							<Text style={welcomeStyles.swapFormText}>Already have an account? Log in</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
				
			</SafeAreaView>
		</KeyboardAvoidingView>
	)
}

export default Signup