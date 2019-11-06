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

export const sharedStyles = StyleSheet.create({
	...missionInfo,

	container: {
		marginHorizontal: screenWidth / 20,
	},

	avatarContainer: {
		alignItems: 'center',
		marginTop: screenHeight / 16,
		marginBottom: screenHeight / 40,
	},

	infoContainer: {
		...this.container,
		flex: 1,
	},
})