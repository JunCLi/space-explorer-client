import React from 'react'

import { Text, View } from 'react-native'
// import { Avatar } from 'react-native-elements'

import BookFlightButton from './bookFlightButton/BookFlightButton'
import BookingDetails from './bookingDetails/BookingDetails'
import MissionAvatar from '../../avatars/missionAvatarWithText/MissionAvatar'
import { styles } from './styles'

const LaunchInfo = props => {
	const { bookingDetails, flightDetails } = props.launch

	return (
		<>
			<View style={styles.infoContainer}>
				<View style={styles.avatarContainer}>
					<MissionAvatar uri={flightDetails.mission_patch} title={flightDetails.mission_name} />
				</View>

				<View style={styles.container}>
					{ bookingDetails.status === 'BOOKED' && <BookingDetails {...bookingDetails}	/>}

					<Text style={styles.rocketInfo}>
						<Text style={styles.label}>Rocket Name: </Text>
						{flightDetails.rocket_name}
					</Text>

					<Text style={styles.rocketInfo}>
						<Text style={styles.label}>Rocket Type: </Text>
						{flightDetails.rocket_type}
					</Text>
					<Text style={styles.launchDetails}>{flightDetails.details}</Text>
				</View>
			</View>

			<View style={styles.container}>
				<BookFlightButton />
			</View>
		</>
	)
}

export default LaunchInfo