import { StyleSheet } from 'react-native'

import { baseFont, screenHeight } from '../../stylesheets/screenSizeSettings'
import { fontColours } from '../../stylesheets/colours'

import { backgroundStyles } from '../../stylesheets/generalStyles'

export const sharedStyles = StyleSheet.create({
	...backgroundStyles,
	
	welcomeText: {
		marginTop: baseFont / 2,
		color: fontColours.white,
		fontSize: baseFont * 1.5,
		textAlign: 'center',
	},

	text: {
		color: fontColours.white,
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
		color: fontColours.lightGrey,
		fontSize: baseFont,
		textAlign: 'center',
	}
})