import React from 'react'

import { SafeAreaView, StatusBar, Text, View, ScrollView } from 'react-native'

import { connect } from 'react-redux'
import { useQuery } from 'react-apollo-hooks'
import { GET_BOOKED_TRIPS } from '../../gql/tripQueries'

import { backgroundStyles } from '../../stylesheets/generalStyles'

const mapStateToProps = state => {
	return state
}

const BookedTrips = props => {
	const { data, error, loading } = useQuery(GET_BOOKED_TRIPS, {
		variables: {input: {
			user_id: 4,
			page: 1,
			perPage: 10,
		}}
	})

	if (loading) return <View><Text>Loading...</Text></View>

	if (error) return <View><Text>Error...</Text></View>

	console.log('booked trips data: ', data)

	return (
		<SafeAreaView style={backgroundStyles.background}>
			<StatusBar barStyle='light-content' />
			<ScrollView style={backgroundStyles.container} contentContainerStyle={{flexGrow: 1}}>
				{

				}
			</ScrollView>
		</SafeAreaView>
	)
}

export default connect(mapStateToProps)(BookedTrips)	