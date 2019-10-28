import { StyleSheet } from 'react-native'

import { baseFont, screenHeight, screenWidth } from '../screenSizeSettings'
import { whiteFont, lightGreyFont, teal, darkerBackgroundPurple, backgroundLavender } from '../colours'

export const logoutButtonStyles = {
	logoutContainer: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		paddingHorizontal: screenWidth / 10,
	},

	logoutButton: {
		backgroundColor: darkerBackgroundPurple,
	},

	logoutButtonText: {
		color: whiteFont,
		textTransform: 'uppercase',
		fontWeight: 'bold',
	},
}

export const profileStyles = StyleSheet.create({
	...logoutButtonStyles,

	mainContainer: {
		position: 'relative',
	},

	listBackground: {
		paddingHorizontal: screenWidth / 10,
	},

	listItemContainer: {
		backgroundColor: backgroundLavender,
		marginVertical: 4
	},

	listItemTitle: {
		color: whiteFont,
	},

	avatarContainer: {
		alignItems: 'center',
		marginTop: screenHeight / 16,
		marginBottom: screenHeight / 20,
	},
})