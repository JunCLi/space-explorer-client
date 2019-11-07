import React, { useState } from 'react'

import { Alert } from 'react-native'

import { connect } from 'react-redux'
import { storeBookingRefresh } from '../../../../redux/actions/launchesActions'
import { useMutation } from 'react-apollo-hooks'
import { CANCEL_TRIP } from '../../../../gql/tripQueries'

import DarkPurpleButton from '../../../Buttons/DarkPurpleButton'

const CancelFlightButton = props => {
	const { flight_number, mission_name, refetch } = props
	const [ disableButton, setDisableButton ] = useState(false)
	const [ cancelTrip ] = useMutation(CANCEL_TRIP)
	
	const handleButtonPress = () => {
		setDisableButton(true)

		Alert.alert(
			`Cancel flight: ${mission_name}?`,
			'Are you sure you want to cancel?',
			[
				{text: 'Yes', onPress: handleCancelTrip},
				{text: 'No'}
			]
		)
	}

	const handleCancelTrip = async () => {
		try {
			const result = await cancelTrip({
				variables: {
					flight_number: flight_number,
				}
			})

			if (result.data.cancelTrip.message === 'success') {
				Alert.alert(
					'Flight Cancelled',
					'You have successfully cancelled this flight.',
					[
						{text: 'OK'}
					]
				)
			} else throw 'error'
		} catch(err) {
			if (err.message === 'error') {
				Alert.alert(
					'Flight Cancelling Unsuccessful',
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
			text='Cancel Flight'
			buttonFunction={handleButtonPress}
			disabled={disableButton}
		/>
	)
}

export default connect(null, { storeBookingRefresh })(CancelFlightButton)