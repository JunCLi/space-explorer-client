import { StyleSheet } from 'react-native'

import { baseSideMargins } from './screenSizeSettings'
import { backgroundColours } from './colours'

export const backgroundStyles = StyleSheet.create({
	avoidKeyboard: {
		flex: 1,
	},

	background: {
		backgroundColor: backgroundColours.purple,
		flex: 1,
	},
	
	mainContainer: {
		flex: 1,
		paddingHorizontal: baseSideMargins,
		paddingBottom: 8,	
	},

	topContainer: {
		flex:1,
	}
})