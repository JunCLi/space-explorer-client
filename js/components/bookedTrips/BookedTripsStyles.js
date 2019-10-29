import { StyleSheet } from 'react-native'

import { backgroundColours } from '../../stylesheets/colours'
import { baseFont } from '../../stylesheets/screenSizeSettings'

const pageButtonStyles = {
	buttonContainer: {
		width: '15%',
		marginHorizontal: '2.5%',
		marginVertical: baseFont / 5,
	},

	button: {
		backgroundColor: backgroundColours.darkerPurple,
		width: '100%',
	},

	buttonText: {
		textAlign: 'center'
	}
}

export const BookedTripStyles = StyleSheet.create({
	...pageButtonStyles,

	topContainer: {
		flex: 1,
	},

	bottomContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
})

export default BookedTripStyles