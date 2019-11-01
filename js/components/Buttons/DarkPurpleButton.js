import React from 'react'

import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

import { baseFont, screenHeight, screenWidth } from '../../stylesheets/screenSizeSettings'
import { fontColours, backgroundColours } from '../../stylesheets/colours'

const DarkPurpleButton = props => {
	const { text = 'button text here', buttonFunction, disabled = false } = props

	const darkPurpleButton = StyleSheet.create({
		container: {
			marginVertical: baseFont * 1.5,
		},

		button: {
			backgroundColor: backgroundColours.darkerPurple,
		},

		text: {
			color: fontColours.white,
		},

		disabledButton: {
			backgroundColor: backgroundColours.lavender,
		},

		disabledText: {
			color: fontColours.lightgrey,
		},
	})

	return (
		<View style={darkPurpleButton.container}>
			<Button
				title={text}
				buttonStyle={darkPurpleButton.button}
				titleStyle={darkPurpleButton.text}
				disabledStyle={darkPurpleButton.disabledButton}
				disabledTitleStyle={darkPurpleButton.disabledText}
				disabled={disabled}
				onPress={buttonFunction}
			/>
		</View>
	)
}

export default DarkPurpleButton