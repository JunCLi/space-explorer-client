import { Dimensions } from 'react-native'

export const screenHeight = Dimensions.get('window').height
export const screenWidth = Dimensions.get('window').width

const determineFontSize = screenWidth => {
	let baseFontSize = 12

	if (screenWidth >= 360) { baseFontSize = 16 }
	
	return baseFontSize
}

const determineSideMargins = screenWidth => {
	let baseMargin = 8

	if (screenWidth >= 400) { baseMargin = 12 }
	else if (screenWidth >= 360) { baseMargin = 10 }
	
	return baseMargin
}

export const baseFont = determineFontSize(screenWidth)
export const baseSideMargins = determineSideMargins(screenWidth)