import { StyleSheet } from 'react-native'

import { baseFont, screenHeight, screenWidth } from '../../../stylesheets/screenSizeSettings'
import { fontColours, backgroundColours } from '../../../stylesheets/colours'

export const styles = StyleSheet.create({
	missionPreviewContainer: {
		backgroundColor: backgroundColours.darkerPurple,
		marginVertical: baseFont / 2,
	},	
	
	missionPreviewTitle: {
		color: fontColours.white,
		fontSize: baseFont * 1.5,
	},

	missionPreviewSubtitle: {
		color: fontColours.lightGrey,
		fontSize: baseFont * .75,
	},

	avatarBackground: {
		backgroundColor: backgroundColours.darkerPurple,
	},
})