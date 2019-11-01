import { StyleSheet } from 'react-native'

import { baseFont, screenHeight } from '../../stylesheets/screenSizeSettings'
import { whiteFont, lightGreyFont } from '../../stylesheets/colours'

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