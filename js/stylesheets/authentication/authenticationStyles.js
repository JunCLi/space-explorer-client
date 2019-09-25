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

export const loginStyles = StyleSheet.create({
	imageContainer: {
		marginTop: screenHeight / 16,
		padding: 0,
	},

	image: {
		width: screenWidth - 100,
		height: screenWidth - 100,
		alignSelf: 'center',
	},
})

export const signupStyles = StyleSheet.create({
	imageContainer: {
		padding: 0,
	},

	image: {
		width: screenWidth - 150,
		height: screenWidth - 150,
		alignSelf: 'center',
	},
})

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