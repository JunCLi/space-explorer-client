import React from 'react'

import { StyleSheet, Text, View } from 'react-native'
import Logo from './Logo'

import { fontColours } from '../../stylesheets/colours'

const LogoWithText = props => {
	const { size = 100, textSize = size / 4, containerStyle } = props

	const logoStyles = StyleSheet.create({
		containerStyle, 

		text: {
			marginTop: textSize / 3,
			color: fontColours.white,
			fontSize: textSize,
			textAlign: 'center',
		}
	})

	return (
		<View style={logoStyles.containerStyle}>
			<Logo size={size} />
			<Text style={logoStyles.text}>Space Explorer</Text>
		</View>
	)
}

export default LogoWithText