import React from 'react'

import { Platform, KeyboardAvoidingView, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, StatusBar } from 'react-native'

import Logo from '../../util/Logo'

import { backgroundStyles } from '../../../stylesheets/generalStyles'
import { loginStyles } from '../../../stylesheets/authentication/authenticationStyles'

const SuccessfulSignup = props => {
	return (
		<SafeAreaView style={backgroundStyles.background}>
			<StatusBar barStyle='light-content' />

			<ScrollView style={backgroundStyles.container} contentContainerStyle={{flexGrow: 1}}>
				<View style={loginStyles.imageContainer}>
					<Logo size={100} />
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default SuccessfulSignup