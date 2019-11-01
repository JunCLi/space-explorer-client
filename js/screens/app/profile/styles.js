import { StyleSheet } from 'react-native'

import { screenHeight, screenWidth } from '../../../stylesheets/screenSizeSettings'
import { fontColours, backgroundColours } from '../../../stylesheets/colours'

import { backgroundStyles } from '../../../stylesheets/generalStyles'

export const styles = StyleSheet.create({
	...backgroundStyles,
	
	mainContainer: {
		...backgroundStyles.mainContainer,
		marginHorizontal: screenWidth / 10,
		paddingBottom: 0,
	},

	listItemContainer: {
		backgroundColor: backgroundColours.lavender,
		marginVertical: 4
	},

	listItemTitle: {
		color: fontColours.white,
	},

	avatarContainer: {
		alignItems: 'center',
		marginTop: screenHeight / 16,
		marginBottom: screenHeight / 20,
	},
})