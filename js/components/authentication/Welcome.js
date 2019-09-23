import React from 'react'

import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, StatusBar } from 'react-native'

import Login from './login/Login'

import { backgroundStyles } from '../../stylesheets/generalStyles'
import { welcomeStyles } from '../../stylesheets/authentication/authenticationStyles'

const Welcome = props => {

	return (
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

				<Login />

				<View style={welcomeStyles.bottomTextContainer}>
					<Text style={welcomeStyles.swapFormText}>Don't have an account? Create one</Text>
				</View>
			</ScrollView>
			
		</SafeAreaView>
	)
}

export default Welcome