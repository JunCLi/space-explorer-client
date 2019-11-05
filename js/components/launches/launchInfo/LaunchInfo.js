import React, { useState } from 'react'

import { Alert, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'

import { connect } from 'react-redux'
import { useMutation } from 'react-apollo-hooks'
import { BOOK_TRIP } from '../../../gql/tripQueries'

import DarkPurpleButton from '../../Buttons/DarkPurpleButton'
import { styles } from './styles'

const mapStateToProps = state => {
	return state
}

const LaunchInfo = props => {
	const { bookingDetails, flightDetails } = props.launch
	const [bookTrip] = useMutation(BOOK_TRIP)

	const [disableButton, setDisableButton] = useState(false)

	const handleBookTrip = async () => {
		setDisableButton(true)
		try {
			const result = await bookTrip({
				variables: {
					flight_number: flightDetails.flight_number
				}
			})
	
			if (result.data.bookTrip.message === 'success') {
				Alert.alert(
					'Flight Booked',
					'You have successfully booked this flight.',
					[
						{text: 'OK'},
					]
				)
			} else throw 'error'
		} catch(err) {
			if (err.message === 'GraphQL error: Unexpected error value: "duplicate flight"') {
				console.log('this ran')
				Alert.alert(
					'Duplicate Flight',
					'You have already booked this flight!',
					[
						{text: 'OK'}
					]
				)
			} else if (err.message === 'error') {
				Alert.alert(
					'Flight Booking Unsuccessful',
					'Unfortunately an error occured, please try again later.',
					[
						{text: 'OK'}
					]
				)
			} else {
				throw err
			}
		} finally {
			setDisableButton(false)
		}
	}

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
					text='Book Flight'
					buttonFunction={handleBookTrip}
					disabled={disableButton}
				/>
			</View>
		</>
	)
}

export default connect(mapStateToProps)(LaunchInfo)