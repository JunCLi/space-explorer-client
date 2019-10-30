import { StyleSheet } from 'react-native'

import { baseFont } from '../../../stylesheets/screenSizeSettings'
import { fontColours } from '../../../stylesheets/colours'

import { formStyles } from '../sharedStyles'

export const styles = StyleSheet.create({
	...formStyles,

	inputViewContainer: {
		marginBottom: 24,
	},
	
	inputViewDoubleContainer: {
		flexDirection: 'row',
		marginHorizontal: -10,
		marginBottom: 30,
	},

	doubleInput: {
		color: fontColours.white,
		fontSize: baseFont,
		textAlign: 'center',
	},

	doubleInputContainer: {
		paddingHorizontal: 10,
		flex: 1,
	},
})