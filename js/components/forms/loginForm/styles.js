import { StyleSheet } from 'react-native'

import { baseFont, screenHeight } from '../../../stylesheets/screenSizeSettings'
import { fontColours } from '../../../stylesheets/colours'

import { formStyles } from '../sharedStyles'

export const styles = StyleSheet.create({
	...formStyles,

	mainContainer: {
		...formStyles.mainContainer,
		marginTop: screenHeight / 8,
	},

	forgotPassword: {
		marginTop: 8,
		color: fontColours.lightGrey,
		fontSize: baseFont / 1.1
	}
})