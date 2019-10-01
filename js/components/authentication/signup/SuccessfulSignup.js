import React from 'react'

import { Platform, KeyboardAvoidingView, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, StatusBar } from 'react-native'
import { Button } from 'react-native-elements'

import Logo from '../../util/Logo/Logo'
import LogoWithText from '../../util/Logo/LogoWithText'


import { backgroundStyles } from '../../../stylesheets/generalStyles'
import { successfulSignupStyles } from '../../../stylesheets/authentication/signupLoginStyles'

const SuccessfulSignup = props => {
	const handleGoLogin = () => {
		props.navigation.navigate('Login')
	}

	return (
		<SafeAreaView style={backgroundStyles.background}>
			<StatusBar barStyle='light-content' />

			<ScrollView style={{...backgroundStyles.container, ...successfulSignupStyles.mainContainer}} contentContainerStyle={{flexGrow: 1}}>

				<LogoWithText size={100} containerStyle={successfulSignupStyles.imageContainer} />

				<View style={successfulSignupStyles.messageContainer}>
					<Text style={successfulSignupStyles.text}>Your account has been created!</Text>
					<Text style={successfulSignupStyles.text}>Log in and get started on booking you space adventures!</Text>
				</View>



				<Button
					title='Go to Login'
					buttonStyle={successfulSignupStyles.button}
					onPress={handleGoLogin}
				/>

			</ScrollView>



		</SafeAreaView>
	)
}

export default SuccessfulSignup