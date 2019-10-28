import { StyleSheet } from 'react-native'

import { baseFont, screenHeight, screenWidth } from '../../../stylesheets/screenSizeSettings'
import { font, teal, darkerBackgroundPurple, backgroundLavender } from '../../../stylesheets/colours'

export const missionInfo = {
	rocketInfo: {
		color: font.white,
		fontSize: baseFont * 1.5,
		marginBottom: 8,
	},

	rocketName: {
		color: font.white,
		fontSize: baseFont * 1.5,
	},

	missionInfoLabel: {
		fontWeight: 'bold',
	},

	rocketType: {
		color: font.white,
	},

	launchDetails: {
		color: font.white,
	},
}

export const launchStyles = StyleSheet.create({
	...missionInfo,

	container: {
		marginHorizontal: screenWidth / 20,
	},

	infoContainer: {
		...this.container,
		flex: 1,
	},

	avatarContainer: {
		alignItems: 'center',
		marginTop: screenHeight / 16,
		marginBottom: screenHeight / 24,
	},

	avatarOverlayContainer: {
		backgroundColor: 'transparent',
	},

	missionName: {
		textAlign: 'center',
		fontSize: baseFont * 3,
		color: font.white,
		marginVertical: baseFont * 0.5,
	},
})