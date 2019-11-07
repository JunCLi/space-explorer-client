import React, { useState } from 'react'

import { Alert } from 'react-native'

import { connect } from 'react-redux'
import { storeBookingRefresh } from '../../../../redux/actions/launchesActions'
import { useMutation } from 'react-apollo-hooks'
import { BOOK_TRIP } from '../../../../gql/tripQueries'

import DarkPurpleButton from '../../../Buttons/DarkPurpleButton'

const BookFlightButton = props => {
	const { flight_number, mission_name, refetch } = props
	const [ disableButton, setDisableButton ] = useState(false)
	const [ bookTrip ] = useMutation(BOOK_TRIP)

	const handleButtonPress = () => {
		setDisableButton(true)

		Alert.alert(
			`Book Flight: ${mission_name}?`,
			'Are you sure you want to book',
			[ 
				{text: 'Yes', onPress: handleBookTrip},
				{text: 'No'}
			]
		)
	}

	const handleBookTrip = async () => {
		try {
			const result = await bookTrip({
				variables: {
					flight_number: flight_number
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
			refetch()
			props.storeBookingRefresh(true)
			setDisableButton(false)
		}
	}

	return (
		<DarkPurpleButton
			text='Book Flight'
			buttonFunction={handleButtonPress}
			disabled={disableButton}
		/>
	)
}

export default connect(null, { storeBookingRefresh })(BookFlightButton)