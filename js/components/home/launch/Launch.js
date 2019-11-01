import React, { useState } from 'react'

import { Alert, SafeAreaView, StatusBar, ScrollView, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'

import { connect } from 'react-redux'
import { useMutation } from 'react-apollo-hooks'
import { BOOK_TRIP } from '../../../gql/tripQueries'

import DarkPurpleButton from '../../Buttons/DarkPurpleButton'

import { backgroundStyles } from '../../../stylesheets/generalStyles'
import { launchStyles } from './launchStyles'

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
		<SafeAreaView style={backgroundStyles.background}>
			<StatusBar barStyle='light-content' />
			<ScrollView style={backgroundStyles.container} contentContainerStyle={{flexGrow: 1}}>
				<View style={launchStyles.infoContainer}>
					<View style={launchStyles.avatarContainer}>
						<Avatar
							overlayContainerStyle={launchStyles.avatarOverlayContainer}
							source={{ uri: launch.mission_patch }}
							size={200}
						/>
						<Text style={launchStyles.missionName}>{launch.mission_name}</Text>
					</View>

					<View style={launchStyles.container}>
						<Text style={launchStyles.rocketInfo}>
							<Text style={launchStyles.missionInfoLabel}>Rocket Name: </Text>
							{launch.rocket_name}
						</Text>

						<Text style={launchStyles.rocketInfo}>
							<Text style={launchStyles.missionInfoLabel}>Rocket Type: </Text>
							{launch.rocket_type}
						</Text>
						<Text style={launchStyles.launchDetails}>{launch.details}</Text>
					</View>
				</View>

				<View style={launchStyles.container}>
					<DarkPurpleButton
						text='book flight'
						buttonFunction={handleBookTrip}
						disabled={disableButton}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default connect(mapStateToProps)(Launch)