import React from 'react'
import moment from 'moment'

import { Alert, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'

import { connect } from 'react-redux'

import DarkPurpleButton from '../../Buttons/DarkPurpleButton'
import { styles } from './styles'

const mapStateToProps = state => {
	return state
}

const BookedTripInfo = props => {
	const { bookingDetails, flightDetails } = props.launch
	console.log('booked trip info props: ', props)

	console.log('postgres date: ', new Date(bookingDetails.date_added.replace(' ', 'T')))
	console.log('moment postgres date: ', moment(bookingDetails.date_added).format('YYYY MMMM Do'))

	return (
		<>
			<View style={styles.infoContainer}>
				<View style={styles.avatarContainer}>
					<Avatar
						overlayContainerStyle={styles.avatarOverlayContainer}
						source={{ uri: flightDetails.mission_patch }}
						size={200}
					/>
					<Text style={styles.missionName}>{flightDetails.mission_name}</Text>
				</View>

				<View style={styles.container}>
					<View style={styles.bookingInfoContainer}>
						<Text style={styles.label}>Booking Info:</Text>
						<View style={styles.subcontainer}>
							<Text style={styles.status}>
								<Text style={styles.subLabel}>Status: </Text>
								{bookingDetails.status}
							</Text>
							<Text style={styles.dateAdded}>
								<Text style={styles.subLabel}>Date Booked: </Text>
								{moment(bookingDetails.date_added).format('YYYY MMMM Do')}
							</Text>
						</View>
					</View>

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
				<DarkPurpleButton
					text='Cancel Flight'
					buttonFunction={() => console.log('cancel flight')}
					// disabled={disableButton}
				/>
			</View>
		</>
	)
}

export default connect(mapStateToProps)(BookedTripInfo)