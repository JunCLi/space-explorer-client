import { Dimensions, StyleSheet } from 'react-native'
import { baseFont } from '../screenSizeSettings'


const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

console.log(screenHeight)

export const welcomeStyles = StyleSheet.create({
	welcomeText: {
		color: 'white',
		fontSize: baseFont * 2,
		textAlign: 'center',
		lineHeight: baseFont * 2,
	},

	text: {
		color: 'white',
		fontSize: baseFont,
	},

	imageContainer: {
		marginTop: screenHeight / 12,
		padding: 0,
	},

	image: {
		width: screenWidth - 100,
		height: screenWidth - 100,
		alignSelf: 'center',
	}
})