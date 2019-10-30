import React from 'react'

import { Platform, KeyboardAvoidingView, SafeAreaView, ScrollView, Text, TouchableOpacity, View, StatusBar } from 'react-native'

import SignupForm from '../../components/forms/signupForm/SignupForm'
import LogoWithText from '../../components/util/Logo/LogoWithText'
import { styles } from './styles'

const Signup = props => {
	const handleGoLogin = () => {
		props.navigation.navigate('Login')
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

					<SignupForm {...props} /> 

					<View style={styles.bottomTextContainer}>
						<TouchableOpacity onPress={handleGoLogin}>
							<Text style={styles.swapFormText}>Already have an account? Log in</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
				
			</SafeAreaView>
		</KeyboardAvoidingView>
	)
}

export default Signup