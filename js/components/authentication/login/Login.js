import React from 'react'

import { Platform, KeyboardAvoidingView, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, StatusBar } from 'react-native'

import LoginForm from './LoginForm'
import LogoWithText from '../../util/Logo/LogoWithText'

import { backgroundStyles } from '../../../stylesheets/generalStyles'
import { sharedStyles, loginStyles } from '../../../stylesheets/authentication/signupLoginStyles'

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
					{/* <View style={loginStyles.imageContainer}> */}
						<LogoWithText size={100} containerStyle={loginStyles.imageContainer} />
					{/* </View> */}

					<LoginForm {...props} /> 

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