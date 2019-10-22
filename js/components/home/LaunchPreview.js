import React from 'react'

import { View, Text } from 'react-native'
import { Image } from 'react-native-elements'

const LaunchPreview = props => {
	const { launch } = props

	console.log(launch)

	return (
		<View>
			<Image
				source={{uri: `${launch.mission_patch}`}}
				style={{width: 100, height: 100}}
			/>
			<Text>
				{launch.mission_name}
			</Text>
		</View>
	)
}

export default LaunchPreview