import { StyleSheet } from 'react-native'

import { baseSideMargins } from './screenSizeSettings'
import { backgroundPurple } from './colours'

export const backgroundStyles = StyleSheet.create({
	avoidKeyboard: {
		flex: 1,
	},

	background: {
		backgroundColor: backgroundPurple,
		flex: 1,
	},
	
	container: {
		flex: 1,
		paddingHorizontal: baseSideMargins,
		paddingBottom: 8,
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