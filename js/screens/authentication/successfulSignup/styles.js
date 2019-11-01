import { StyleSheet } from 'react-native'

import { baseFont, screenHeight, screenWidth } from '../../../stylesheets/screenSizeSettings'
import { fontColours, backgroundColours } from '../../../stylesheets/colours'

import { backgroundStyles } from '../../../stylesheets/generalStyles'
import { sharedStyles } from '../sharedStyles'

export const styles = StyleSheet.create({
	...backgroundStyles,
	...sharedStyles,

	mainContainer: {
		...backgroundStyles.mainContainer,
		marginHorizontal: screenWidth / 10,
	},

	messageContainer: {
		marginVertical: screenHeight / 12,
	},

	text: {
		marginVertical: baseFont,
		color: fontColours.white,
		fontSize: baseFont * 1.5,
		textAlign: 'center',
	},

	button: {
		backgroundColor: backgroundColours.teal
	}
})