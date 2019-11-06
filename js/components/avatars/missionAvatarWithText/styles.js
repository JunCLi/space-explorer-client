import { StyleSheet } from 'react-native'

import { baseFont } from '../../../stylesheets/screenSizeSettings'
import { fontColours } from '../../../stylesheets/colours'

export const styles = StyleSheet.create({
	overlayContainer: {
		backgroundColor: 'transparent',
	},

	missionName: {
		textAlign: 'center',
		fontSize: baseFont * 3,
		color: fontColours.white,
		marginVertical: baseFont * 0.5,
	},
})