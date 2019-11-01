import { StyleSheet } from 'react-native'

import { baseFont, screenHeight, screenWidth } from '../../../stylesheets/screenSizeSettings'
import { fontColours } from '../../../stylesheets/colours'

import { backgroundStyles } from '../../../stylesheets/generalStyles'

export const missionInfo = {
	rocketInfo: {
		color: fontColours.white,
		fontSize: baseFont * 1.5,
		marginBottom: 8,
	},

	rocketName: {
		color: fontColours.white,
		fontSize: baseFont * 1.5,
	},

	missionInfoLabel: {
		fontWeight: 'bold',
	},

	rocketType: {
		color: fontColours.white,
	},

	launchDetails: {
		color: fontColours.white,
	},
}

export const styles = StyleSheet.create({
	...backgroundStyles,
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
		color: fontColours.white,
		marginVertical: baseFont * 0.5,
	},
})