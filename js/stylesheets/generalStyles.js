import { StyleSheet } from 'react-native'

import { baseSideMargins } from './screenSizeSettings'

const backgroundPurple = '#a992b1'

export const backgroundStyles = StyleSheet.create({
	background: {
		backgroundColor: backgroundPurple,
		flex: 1,
	},

	container: {
		paddingHorizontal: baseSideMargins,
	}
})

// export const centeringStyles = StyleSheet.create({
// 	both: {
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 	},

// 	justify: {
// 		justifyContent: 'center',
// 	},

// 	align: {
// 		alignItems: 'center',
// 	}
// })