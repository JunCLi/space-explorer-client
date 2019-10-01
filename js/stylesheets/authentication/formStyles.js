import { Dimensions, StyleSheet } from 'react-native'

import { baseFont } from '../screenSizeSettings'
import { darkerBackgroundPurple, whiteFont, lightGreyFont, greyFont } from '../colours'

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

export const formStyles = StyleSheet.create({
	mainContainer: {
		marginTop: screenHeight / 12,
		marginHorizontal: screenWidth / 10,
	},

	inputViewContainer: {
		marginBottom: 20,
	},

	inputContainer: {
		paddingHorizontal: 0,
		flex: 1,
	},

	inputWithIcon: {
		marginLeft: -24,
		color: whiteFont,
		fontSize: baseFont,
		textAlign: 'center',
	},

	icon: {
		color: whiteFont,
	},

	leftIconContainer: {
		marginLeft: 0,
	},

	button: {
		backgroundColor: 'teal',
	},

	disabledButton: {
		backgroundColor: darkerBackgroundPurple,
	},

	disabledButtonTitle: {
		color: whiteFont,
	},
})

export const loginFormStyles = StyleSheet.create({
	...formStyles,

	mainContainer: {
		marginTop: screenHeight / 8,
		marginHorizontal: screenWidth / 10,
	},

	forgotPassword: {
		marginTop: 8,
		color: lightGreyFont,
		fontSize: baseFont / 1.1
	}
})

export const signupFormStyles = StyleSheet.create({
	...formStyles,

	inputViewContainer: {
		marginBottom: 24,
	},
	
	inputViewDoubleContainer: {
		flexDirection: 'row',
		marginHorizontal: -10,
		marginBottom: 30,
	},

	doubleInput: {
		color: whiteFont,
		fontSize: baseFont,
		textAlign: 'center',
	},

	doubleInputContainer: {
		paddingHorizontal: 10,
		flex: 1,
	},
})