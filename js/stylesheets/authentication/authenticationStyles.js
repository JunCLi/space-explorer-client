import { Dimensions, StyleSheet } from 'react-native'

import { baseFont } from '../screenSizeSettings'
import { darkerBackgroundPurple, whiteFont, lightGreyFont, greyFont } from '../colours'


const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

export const welcomeStyles = StyleSheet.create({
	welcomeText: {
		marginTop: -30,
		color: whiteFont,
		fontSize: baseFont * 2,
		lineHeight: baseFont * 2,
		textAlign: 'center',
	},

	text: {
		color: whiteFont,
		fontSize: baseFont,
	},

	imageContainer: {
		marginTop: screenHeight / 16,
		padding: 0,
	},

	image: {
		width: screenWidth - 100,
		height: screenWidth - 100,
		alignSelf: 'center',
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

export const loginFormStyles = StyleSheet.create({
	mainContainer: {
		marginTop: screenHeight / 12,
		marginHorizontal: screenWidth / 10,
	},

	inputContainer: {
		marginBottom: 20,
		paddingHorizontal: 0,
	},

	input: {
		marginLeft: -24,
		color: whiteFont,
		fontSize: baseFont,
		textAlign: 'center',
	},

	icon: {
		color: whiteFont,
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

	forgotPassword: {
		marginTop: 8,
		color: lightGreyFont,
		fontSize: baseFont / 1.1
	}
})