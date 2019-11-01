import { StyleSheet } from 'react-native'

import { screenHeight } from '../../../stylesheets/screenSizeSettings'

import { sharedStyles } from '../sharedStyles'

export const styles = StyleSheet.create({
	...sharedStyles,
	
	imageContainer: {
		marginTop: screenHeight / 8,
	},
})