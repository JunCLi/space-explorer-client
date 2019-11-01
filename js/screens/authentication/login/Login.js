import React from 'react'

import { Platform, KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'

import LoginForm from '../../../components/forms/loginForm/LoginForm'
import LogoWithText from '../../../components/Logo/LogoWithText'
import { styles } from './styles'

const Login = props => {
	const handleGoSignup = () => {
		props.navigation.navigate('Signup')
	}

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : null}
			style={styles.avoidKeyboard}
		>
			<SafeAreaView style={styles.background}>
				<StatusBar barStyle='light-content' />

				<ScrollView style={styles.mainContainer} contentContainerStyle={{flexGrow: 1}}>

					<LogoWithText size={100} containerStyle={styles.imageContainer} />

					<LoginForm {...props} /> 

					<View style={styles.bottomTextContainer}>
						<TouchableOpacity onPress={handleGoSignup}>
							<Text style={styles.swapFormText}>Don't have an account? Create one</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
				
			</SafeAreaView>
		</KeyboardAvoidingView>
	)
}

export default Login