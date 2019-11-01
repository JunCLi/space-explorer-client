import React, { useState } from 'react'

import { Text, View } from 'react-native'
import { Avatar, Button, ListItem } from 'react-native-elements'

import { useQuery } from 'react-apollo-hooks'
import { GET_BOOKED_TRIPS } from '../../gql/tripQueries'

import DarkPurpleButton from '../Buttons/DarkPurpleButton'

import { BookedTripStyles } from './BookedTripsStyles'
import { homeStyles } from '../../stylesheets/home/homeStyles'

const AllBookedTrips = props => {
	const { data, error, loading, fetchMore } = useQuery(GET_BOOKED_TRIPS, {
		variables: {input: {
			first: 4,
		}}
	})
	const [ disableLoadMore, setDisableLoadMore ] = useState(false)

	if (loading) return <View><Text>Loading...</Text></View>
	
	if (error) return <View><Text>Error...</Text></View>
	
	const getMore = () => {
		setDisableLoadMore(true)
		fetchMore({
			query: GET_BOOKED_TRIPS,
			variables: {input: {
				cursor: data.getCursorBookedTrips.nextCursor,
			}},
			updateQuery: (previousResult, { fetchMoreResult }) => {
				setDisableLoadMore(false)
				return {
					getCursorBookedTrips: {
						...fetchMoreResult.getCursorBookedTrips,
						bookedTrips: [...previousResult.getCursorBookedTrips.bookedTrips, ...fetchMoreResult.getCursorBookedTrips.bookedTrips],
					}
				}
			}
		})
	}

	console.log('Booked trips data: ', data)

	return (
		<>
			<View style={BookedTripStyles.topContainer}>
				{data.getCursorBookedTrips.bookedTrips.map(trip => (
					<ListItem
						key={trip.flightDetails.flight_number}
						leftAvatar={
							<Avatar
								source={{uri: trip.flightDetails.mission_patch}}
								title={trip.flightDetails.mission_name.substring(0, 3)}
								overlayContainerStyle={homeStyles.avatarBackground}
								rounded={false}
								size='large'
							/>
						}
						title={trip.flightDetails.mission_name}
						titleStyle={homeStyles.missionPreviewTitle}
						subtitle={`Trip Status: ${trip.bookingDetails.status}`}
						subtitleStyle={homeStyles.missionPreviewSubtitle}
						containerStyle={homeStyles.missionPreviewContainer}
					/>
				))}

			</View>

			{	data.getCursorBookedTrips.hasMore &&
				<DarkPurpleButton
					text='Load More'
					buttonFunction={getMore}
					disableLoadMore={disableLoadMore}
				/>
			}
		</>
	)
}

export default AllBookedTrips