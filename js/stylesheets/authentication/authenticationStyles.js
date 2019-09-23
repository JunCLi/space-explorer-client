import { Dimensions, StyleSheet } from 'react-native'

import { baseFont } from '../screenSizeSettings'
import { white, lightGrey } from '../fontColours'


const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

export const welcomeStyles = StyleSheet.create({
	welcomeText: {
		marginTop: -30,
		color: white,
		fontSize: baseFont * 2,
		lineHeight: baseFont * 2,
		textAlign: 'center',
	},

	text: {
		color: white,
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
		color: lightGrey,
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
		color: white,
		fontSize: baseFont,
		textAlign: 'center',
	},

	icon: {
		color: white,
	},

	forgotPassword: {
		marginTop: -10,
		color: lightGrey,
		fontSize: baseFont / 1.1
	}
})