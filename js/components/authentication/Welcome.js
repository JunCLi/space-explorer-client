import React from 'react'

import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { backgroundStyles } from '../../stylesheets/generalStyles'
import { welcomeStyles } from '../../stylesheets/authentication/authenticationStyles'

const Welcome = props => {

	const handleNavigateAuthentication = () => {
		props.navigation.navigate('Signup')
	}

	const handleNavigateApp = () => {
		props.navigation.navigate('Login')
	}

	return (
		<SafeAreaView style={backgroundStyles.background}>
			<ScrollView style={backgroundStyles.container}>
				<View style={welcomeStyles.imageContainer}>
					<Image
						source={require('../../assets/images/saturn-transparent.png')}
						style={welcomeStyles.image}
					/>
				</View>
				<Text style={welcomeStyles.welcomeText}>Welcome to space explorer!</Text>

				<TouchableOpacity onPress={handleNavigateAuthentication}>
					<Text>Go to Sign Up Stack</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={handleNavigateApp}>
					<Text>Go to Log In Stack</Text>
				</TouchableOpacity>

			</ScrollView>
		</SafeAreaView>
	)
}

export default Welcome