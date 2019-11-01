import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { backgroundColours } from '../../stylesheets/colours'

const Logo = props => {
	const { size = 100 } = props


	const logoStyles = StyleSheet.create({
		background: {
			position: 'relative',
			justifyContent: 'center',
			alignItems: 'center',
			alignSelf: 'center',

			width: size + size / 3,
			height: size + size / 3,
			borderWidth: size / 30,
			borderColor: 'white',
			borderRadius: 1000,
		},
		
		logo: {
			color: 'white',
			fontSize: size,
		},

		orb: {
			position: 'absolute',
			top: size / 3,
			right: - size / 35 ,

			width: size / 8,
			height: size / 8,
			borderRadius: 1000,
			backgroundColor: 'white',
		},

		circleCutout: {
			position: 'absolute',
			top: size / 3,
			right: - size / 5,

			width: size / 3,
			height: size / 2,
			borderRadius: 1000,
			backgroundColor: backgroundColours.purple,
			// backgroundColor: 'red',
		},

		circleCutout2: {
			position: 'absolute',
			bottom: 0,
			right: - size / 5,

			width: size / 2,
			height: size / 2,
			borderRadius: 1000,
			backgroundColor: backgroundColours.purple,
			// backgroundColor: 'green',
		},
	})

	return (
		<View style={logoStyles.background}>
			<View style={logoStyles.circleCutout}></View>
			<View style={logoStyles.circleCutout2}></View>
			<View style={logoStyles.orb}></View>
			<Text style={logoStyles.logo}>S</Text>
		</View>
	)
}

export default Logo