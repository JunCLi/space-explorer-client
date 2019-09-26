import { StyleSheet } from 'react-native'

import { screenHeight, baseFont } from '../screenSizeSettings'
import { whiteFont, lightGreyFont } from '../colours'

export const sharedStyles = StyleSheet.create({
	welcomeText: {
		marginTop: baseFont / 2,
		color: whiteFont,
		fontSize: baseFont * 1.5,
		textAlign: 'center',
	},

	text: {
		color: whiteFont,
		fontSize: baseFont,
	},

	imageContainer: {
		marginTop: screenHeight / 12,
		padding: 0,
	},

	bottomTextContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		marginBottom: 8,
	},

	swapFormText: {
		color: lightGreyFont,
		fontSize: baseFont,
		textAlign: 'center',
	}
})

export const loginStyles = StyleSheet.create({
	...sharedStyles,

	imageContainer: {
		marginTop: screenHeight / 8,
	},
})

export const signupStyles = StyleSheet.create({
	...sharedStyles,
})