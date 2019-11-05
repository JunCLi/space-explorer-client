import { StyleSheet } from 'react-native'

import { baseFont, screenHeight, screenWidth } from '../../stylesheets/screenSizeSettings'
import { fontColours } from '../../stylesheets/colours'

export const missionInfo = {
	rocketInfo: {
		color: fontColours.white,
		fontSize: baseFont * 1.5,
		marginBottom: baseFont / 2,
	},

	rocketName: {
		color: fontColours.white,
		fontSize: baseFont * 1.5,
	},

	label: {
		fontWeight: 'bold',
	},

	rocketType: {
		color: fontColours.white,
	},

	launchDetails: {
		color: fontColours.white,
	},
}

export const avatarStyles = {
	avatarContainer: {
		alignItems: 'center',
		marginTop: screenHeight / 16,
		marginBottom: screenHeight / 24,
	},

	avatarOverlayContainer: {
		backgroundColor: 'transparent',
	},
}

export const sharedStyles = StyleSheet.create({
	...avatarStyles,
	...missionInfo,

	container: {
		marginHorizontal: screenWidth / 20,
	},

	infoContainer: {
		...this.container,
		flex: 1,
	},

	missionName: {
		textAlign: 'center',
		fontSize: baseFont * 3,
		color: fontColours.white,
		marginVertical: baseFont * 0.5,
	},
})