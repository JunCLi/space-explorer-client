import React from 'react'

import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

import { baseFont } from '../../stylesheets/screenSizeSettings'
import { fontColours, backgroundColours } from '../../stylesheets/colours'

const DarkPurpleButton = props => {
	const { text = 'button text here', buttonFunction, disabled = false, fontWeight = '500' } = props

	const darkPurpleButton = StyleSheet.create({
		container: {
			marginVertical: baseFont,
		},

		button: {
			backgroundColor: backgroundColours.darkerPurple,
		},

		text: {
			color: fontColours.white,
			fontWeight: fontWeight
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