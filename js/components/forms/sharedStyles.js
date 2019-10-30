import { StyleSheet } from 'react-native'

import { baseFont, screenHeight, screenWidth } from '../../stylesheets/screenSizeSettings'
import { backgroundColours, fontColours } from '../../stylesheets/colours'

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
		color: fontColours.white,
		fontSize: baseFont,
		textAlign: 'center',
	},

	icon: {
		color: fontColours.white,
	},

	leftIconContainer: {
		marginLeft: 0,
	},

	button: {
		backgroundColor: backgroundColours.teal,
	},

	disabledButton: {
		backgroundColor: backgroundColours.darkerPurple,
	},

	disabledButtonTitle: {
		color: fontColours.white,
	},
})