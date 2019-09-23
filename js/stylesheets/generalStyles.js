import { StyleSheet } from 'react-native'

import { baseSideMargins } from './screenSizeSettings'

const backgroundPurple = 'rgb(7, 51, 73)'

export const backgroundStyles = StyleSheet.create({
	background: {
		backgroundColor: backgroundPurple,
		flex: 1,
	},
	
	container: {
		paddingHorizontal: baseSideMargins,
		flex: 1,
	}
})