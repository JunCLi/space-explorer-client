import React, { useState } from 'react'

import { Alert, SafeAreaView, StatusBar, ScrollView, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'

import { connect } from 'react-redux'
import { useMutation } from 'react-apollo-hooks'
import { BOOK_TRIP } from '../../../gql/tripQueries'

import DarkPurpleButton from '../../../components/Buttons/DarkPurpleButton'

import { styles } from './styles'

const mapStateToProps = state => {
	return state
}

const Launch = props => {
	const { launch } = props.navigation.state.params
	const [bookTrip] = useMutation(BOOK_TRIP)

	const [disableButton, setDisableButton] = useState(false)

	const handleBookTrip = async () => {
		setDisableButton(true)
		try {
			const result = await bookTrip({
				variables: {
					flight_number: launch.flight_number
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
		<SafeAreaView style={styles.background}>
			<StatusBar barStyle='light-content' />
			<ScrollView style={styles.mainContainer} contentContainerStyle={{flexGrow: 1}}>
				<View style={styles.infoContainer}>
					<View style={styles.avatarContainer}>
						<Avatar
							overlayContainerStyle={styles.avatarOverlayContainer}
							source={{ uri: launch.mission_patch }}
							size={200}
						/>
						<Text style={styles.missionName}>{launch.mission_name}</Text>
					</View>

					<View style={styles.container}>
						<Text style={styles.rocketInfo}>
							<Text style={styles.missionInfoLabel}>Rocket Name: </Text>
							{launch.rocket_name}
						</Text>

						<Text style={styles.rocketInfo}>
							<Text style={styles.missionInfoLabel}>Rocket Type: </Text>
							{launch.rocket_type}
						</Text>
						<Text style={styles.launchDetails}>{launch.details}</Text>
					</View>
				</View>

				<View style={styles.container}>
					<DarkPurpleButton
						text='Book Flight'
						buttonFunction={handleBookTrip}
						disabled={disableButton}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default connect(mapStateToProps)(Launch)