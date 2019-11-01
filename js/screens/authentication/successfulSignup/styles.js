import { StyleSheet } from 'react-native'

import { baseFont, screenHeight, screenWidth } from '../../../stylesheets/screenSizeSettings'
import { fontColours, backgroundColours } from '../../../stylesheets/colours'

import { sharedStyles } from '../sharedStyles'

export const styles = StyleSheet.create({
	...sharedStyles,

	mainContainer: {
		...sharedStyles.mainContainer,
		marginHorizontal: screenWidth / 10,
	},

	messageContainer: {
		marginVertical: screenHeight / 12,
	},

	text: {
		marginVertical: baseFont,
		color: fontColours.white,
		fontSize: baseFont * 1.25,
		textAlign: 'center',
	},

	button: {
		backgroundColor: backgroundColours.teal,
	},
	
	buttonContainer: {
		marginBottom: screenHeight / 6,
	},

	buttonText: {
		fontWeight: 'bold',
	},
})