import React from 'react'

import { SafeAreaView, StatusBar, ScrollView, Text, View } from 'react-native'

import { useQuery } from 'react-apollo-hooks'
import { GET_SINGLE_BOOKED_TRIP } from '../../../gql/tripQueries'
import { connect } from 'react-redux'

import LaunchInfo from '../../../components/launches/launchInfo/LaunchInfo'
import { styles } from './styles'

const mapStateToProps = state => {
	return state
}

const Launch = props => {
	const { flightDetails } = props.navigation.state.params
	const { data, loading, error, refetch } = useQuery(GET_SINGLE_BOOKED_TRIP, {
		variables: {
			flight_number: flightDetails.flight_number
		}
	})

	if (loading) return (
		<SafeAreaView style={styles.background}>
			<StatusBar barStyle='light-content' />
			<ScrollView style={styles.mainContainer} contentContainerStyle={{flexGrow: 1}}>
				<View><Text>Loading...</Text></View>
			</ScrollView>
		</SafeAreaView>
	)

	if (error) return (
		<SafeAreaView style={styles.background}>
			<StatusBar barStyle='light-content' />
			<ScrollView style={styles.mainContainer} contentContainerStyle={{flexGrow: 1}}>
				<View><Text>Error...</Text></View>
			</ScrollView>
		</SafeAreaView>
	)

	return (
		<SafeAreaView style={styles.background}>
			<StatusBar barStyle='light-content' />
			<ScrollView style={styles.mainContainer} contentContainerStyle={{flexGrow: 1}}>
				<LaunchInfo launch={data.getBookedTrip} refetch={refetch} />
			</ScrollView>
		</SafeAreaView>
	)
}

export default connect(mapStateToProps)(Launch)