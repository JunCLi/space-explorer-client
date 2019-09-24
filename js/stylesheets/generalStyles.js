import { StyleSheet } from 'react-native'

import { baseSideMargins } from './screenSizeSettings'
import { backgroundPurple } from './colours'

// const backgroundPurple = 'rgb(7, 51, 73)'

export const backgroundStyles = StyleSheet.create({
	avoidKeyboard: {
		flex: 1,
	},

	background: {
		backgroundColor: backgroundPurple,
		flex: 1,
	},
	
	container: {
		paddingHorizontal: baseSideMargins,
		flex: 1,
	}
})