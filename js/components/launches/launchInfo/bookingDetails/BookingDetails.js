import React from 'react'
import moment from 'moment'

import { Text, View } from 'react-native'

import { styles } from './styles'

const BookingDetails = props => {
	const { status, date_added } = props

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Booking Info:</Text>
			<View style={styles.subcontainer}>
				<Text style={styles.status}>
					<Text style={styles.subLabel}>Status: </Text>
					{status}
				</Text>
				<Text style={styles.dateAdded}>
					<Text style={styles.subLabel}>Date Booked: </Text>
					{moment(date_added).format('YYYY MMMM Do')}
				</Text>
			</View>
		</View>
	)
}

export default BookingDetails