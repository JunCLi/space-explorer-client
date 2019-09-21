import { Dimensions } from 'react-native'

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

const determineFontSize = screenWidth => {
	let baseFontSize = 12

	if (screenWidth >= 400) { baseFontSize = 24 }
	else if (screenWidth >= 360) { baseFontSize = 16 }
	
	return baseFontSize
}

export const baseFont = determineFontSize(screenWidth)

const determineSideMargins = screenWidth => {
	let baseMargin = 8

	if (screenWidth >= 400) { baseMargin = 12 }
	else if (screenWidth >= 360) { baseMargin = 10 }
	
	return baseMargin
}

export const baseSideMargins = determineSideMargins(screenWidth)