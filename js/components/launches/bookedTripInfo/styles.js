import { StyleSheet } from 'react-native'

import { baseFont } from '../../../stylesheets/screenSizeSettings'
import { fontColours } from '../../../stylesheets/colours'

import { sharedStyles } from '../sharedStyles'

export const styles = StyleSheet.create({
	...sharedStyles,

	bookingInfoContainer: {
		marginBottom: baseFont,
	},

	label: {
		...sharedStyles.rocketInfo,
		...sharedStyles.label,
	},

	subcontainer: {
		marginLeft: baseFont
	},

	status: {
		...sharedStyles.rocketInfo,
		fontSize: baseFont,
		textTransform: 'capitalize',
	},

	dateAdded: {
		...sharedStyles.rocketInfo,
		fontSize: baseFont,
	},	

	subLabel: {
		...sharedStyles.label,
	},

})