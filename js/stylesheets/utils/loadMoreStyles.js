import { StyleSheet } from 'react-native'

import { baseFont, screenHeight, screenWidth } from '../screenSizeSettings'
import { whiteFont, lightGreyFont, teal, darkerBackgroundPurple, backgroundLavender } from '../colours'

export const loadMoreButtonStyles = StyleSheet.create({
	loadMoreContainer: {
		marginVertical: baseFont * 1.5,
	},

	loadMoreButton: {
		backgroundColor: darkerBackgroundPurple,
	},

	loadMoreText: {
		color: whiteFont,
	},

	disabledLoadMoreButton: {
		backgroundColor: backgroundLavender,
	},

	disabledLoadMoreText: {
		color: lightGreyFont,
	},
})
