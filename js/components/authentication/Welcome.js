import React, { useState } from 'react'

import { Platform, KeyboardAvoidingView, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, StatusBar } from 'react-native'

import Login from './login/Login'

import { backgroundStyles } from '../../stylesheets/generalStyles'
import { welcomeStyles } from '../../stylesheets/authentication/authenticationStyles'

const Welcome = props => {
	const [ swapForm, setSwapForm ] = useState('login')

	const handleSwapForm = () => {
		setSwapForm(prevState => prevState === 'login' ? 'signup' : 'login')
	}

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : null}
			style={backgroundStyles.avoidKeyboard}
		>
			<SafeAreaView style={backgroundStyles.background}>
				<StatusBar barStyle='light-content' />
				<ScrollView style={backgroundStyles.container} contentContainerStyle={{flexGrow: 1}}>
					<View style={welcomeStyles.imageContainer}>
						<Image
							source={require('../../assets/images/saturn-transparent.png')}
							style={welcomeStyles.image}
						/>
					</View>

					<Text style={welcomeStyles.welcomeText}>Space explorer</Text>

					<Login 
						handleSwapForm={handleSwapForm}
						swapForm={swapForm}
					/>

					{/* <View style={welcomeStyles.bottomTextContainer}>
						<TouchableOpacity onPress={handleSwapForm}>
							{swapForm === 'login'
								? <Text style={welcomeStyles.swapFormText}>Don't have an account? Create one</Text>
								: <Text style={welcomeStyles.swapFormText}>Already have an account? Log in</Text>
							}
							
						</TouchableOpacity>
					</View> */}
				</ScrollView>
				
			</SafeAreaView>
		</KeyboardAvoidingView>
	)
}

export default Welcome