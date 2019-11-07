import React, { useState } from 'react'

import { Alert } from 'react-native'

import { useMutation } from 'react-apollo-hooks'
import { BOOK_TRIP } from '../../../../gql/tripQueries'

import DarkPurpleButton from '../../../Buttons/DarkPurpleButton'

const BookFlightButton = props => {
	const { flight_number, refetch } = props
	const [ disableButton, setDisableButton ] = useState(false)
	const [ bookTrip ] = useMutation(BOOK_TRIP)

	const handleBookTrip = async () => {
		setDisableButton(true)
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
			setDisableButton(false)
		}
	}

	return (
		<DarkPurpleButton
			text='Book Flight'
			buttonFunction={handleBookTrip}
			disabled={disableButton}
		/>
	)
}

export default BookFlightButton