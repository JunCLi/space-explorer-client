import React from 'react'

import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

import { baseFont, screenHeight, screenWidth } from '../../../stylesheets/screenSizeSettings'
import { whiteFont, lightGreyFont, teal, darkerBackgroundPurple, backgroundLavender } from '../../../stylesheets/colours'

const DarkPurpleButton = props => {
	const { text = 'button text here', buttonFunction, disabled = false } = props

	const darkPurpleButton = StyleSheet.create({
		container: {
			marginVertical: baseFont * 1.5,
		},

		button: {
			backgroundColor: darkerBackgroundPurple,
		},

		text: {
			color: whiteFont,
		},

		disabledButton: {
			backgroundColor: backgroundLavender,
		},

		disabledText: {
			color: lightGreyFont,
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