import { StyleSheet } from 'react-native'

import { screenHeight } from '../../stylesheets/screenSizeSettings'

import { backgroundStyles } from '../../stylesheets/generalStyles'
import { sharedStyles } from '../../stylesheets/authentication/signupLoginStyles'

export const styles = StyleSheet.create({
	...backgroundStyles,
	...sharedStyles,
	
	imageContainer: {
		marginTop: screenHeight / 8,
	},
})