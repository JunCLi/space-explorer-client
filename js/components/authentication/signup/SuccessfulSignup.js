import React from 'react'

import { Platform, KeyboardAvoidingView, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, StatusBar } from 'react-native'

import SaturnImage from '../../../assets/images/saturn-transparent.png'

import { backgroundStyles } from '../../../stylesheets/generalStyles'
import { loginStyles } from '../../../stylesheets/authentication/authenticationStyles'

const SuccessfulSignup = props => {
	return (
		<SafeAreaView style={backgroundStyles.background}>
			<StatusBar barStyle='light-content' />

			<ScrollView style={backgroundStyles.container} contentContainerStyle={{flexGrow: 1}}>
				<View style={loginStyles.imageContainer}>
					<Image
						source={SaturnImage}
						style={loginStyles.image}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default SuccessfulSignup