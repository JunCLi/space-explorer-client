import React from 'react'

import { SafeAreaView, ScrollView, Text, View, StatusBar } from 'react-native'
import { Button } from 'react-native-elements'

import LogoWithText from '../../../components/Logo/LogoWithText'
import { styles } from './styles'

const SuccessfulSignup = props => {
	const handleGoLogin = () => {
		props.navigation.navigate('Login')
	}

	return (
		<SafeAreaView style={styles.background}>
			<StatusBar barStyle='light-content' />

			<ScrollView style={{...styles.mainContainer}} contentContainerStyle={{flexGrow: 1}}>

				<View style={styles.topContainer}>
					<LogoWithText size={100} containerStyle={styles.imageContainer} />

					<View style={styles.messageContainer}>
						<Text style={styles.text}>Your account has been created!</Text>
						<Text style={styles.text}>Log in and get started on booking your space adventures!</Text>
					</View>
				</View>

				<Button
					title='Go to Login'
					containerStyle={styles.buttonContainer}
					buttonStyle={styles.button}
					titleStyle={styles.buttonText}
					onPress={handleGoLogin}
				/>

			</ScrollView>
		</SafeAreaView>
	)
}

export default SuccessfulSignup