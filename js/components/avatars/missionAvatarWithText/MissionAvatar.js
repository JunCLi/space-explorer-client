import React from 'react'

import { Text } from 'react-native'
import { Avatar } from 'react-native-elements'

import { styles } from './styles'

const MissionAvatar = props => {
	const { uri, title } = props

	return (
		<>
			<Avatar
				overlayContainerStyle={styles.overlayContainer}
				source={{ uri: uri}}
				size={200}
			/>
			<Text style={styles.missionName}>{title}</Text>
		</>
	)
}

export default MissionAvatar