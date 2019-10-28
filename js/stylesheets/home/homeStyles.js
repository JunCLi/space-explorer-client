import { StyleSheet } from 'react-native'

import { baseFont, screenHeight, screenWidth } from '../screenSizeSettings'
import { whiteFont, lightGreyFont, teal, darkerBackgroundPurple, backgroundLavender } from '../colours'

export const homeStyles = StyleSheet.create({
	missionPreviewContainer: {
		backgroundColor: darkerBackgroundPurple,
		marginVertical: baseFont / 2,
	},	
	
	missionPreviewTitle: {
		color: whiteFont,
		fontSize: baseFont * 1.5,
	},

	missionPreviewSubtitle: {
		color: lightGreyFont,
		fontSize: baseFont * .75,
	},

	avatarBackground: {
		backgroundColor: darkerBackgroundPurple,
	},
})