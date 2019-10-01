import React from 'react'

import { Platform, KeyboardAvoidingView, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, StatusBar } from 'react-native'

import SignupForm from './SignupForm'
import LogoWithText from '../../util/Logo/LogoWithText'

import { backgroundStyles } from '../../../stylesheets/generalStyles'
import { signupStyles } from '../../../stylesheets/authentication/signupLoginStyles'

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
					
					<LogoWithText size={100} containerStyle={signupStyles.imageContainer} />

					<SignupForm {...props} /> 

					<View style={signupStyles.bottomTextContainer}>
						<TouchableOpacity onPress={handleGoLogin}>
							<Text style={signupStyles.swapFormText}>Already have an account? Log in</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
				
			</SafeAreaView>
		</KeyboardAvoidingView>
	)
}

export default Signup