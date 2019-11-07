import React, { useState, useEffect } from 'react'

import { Text, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'

import { connect } from 'react-redux'
import { storeBookingRefresh } from '../../../redux/actions/launchesActions'
import { useQuery } from 'react-apollo-hooks'
import { GET_BOOKED_TRIPS } from '../../../gql/tripQueries'

import DarkPurpleButton from '../../Buttons/DarkPurpleButton'
import { styles } from './styles'

// const mapStateToProps = state => {
// 	// console.log('state: ', state)
// 	return {}
// }

const AllBookedTrips = props => {
	const { data, error, loading, fetchMore, refetch } = useQuery(GET_BOOKED_TRIPS, {
		variables: {input: {
			first: 10,
		}}
	})
	const [ disableLoadMore, setDisableLoadMore ] = useState(false)

	useEffect(() => {
		if (props.refresh.refreshList) {
			console.log('update')
			refetch()
			props.storeBookingRefresh(false)
		}
	},[props.refresh.refreshList])

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
						bookedTrips: [...fetchMoreResult.getCursorBookedTrips.bookedTrips, ...previousResult.getCursorBookedTrips.bookedTrips],
					}
				}
			}
		})
	}

	const viewMission = flightDetails => {
		props.navigation.navigate('LaunchInfo', {flightDetails: flightDetails})
	}

	return (
		<>
			<View style={styles.topContainer}>
				{data.getCursorBookedTrips.bookedTrips.map(trip => (
					<ListItem
						key={trip.flightDetails.flight_number}
						leftAvatar={
							<Avatar
								source={{uri: trip.flightDetails.mission_patch}}
								title={trip.flightDetails.mission_name.substring(0, 3)}
								overlayContainerStyle={styles.avatarBackground}
								rounded={false}
								size='large'
							/>
						}
						title={trip.flightDetails.mission_name}
						titleStyle={styles.missionPreviewTitle}
						subtitle={`Trip Status: ${trip.bookingDetails.status}`}
						subtitleStyle={styles.missionPreviewSubtitle}
						containerStyle={styles.missionPreviewContainer}
						onPress={() => viewMission(trip.flightDetails)}
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

export default connect(null, { storeBookingRefresh })(AllBookedTrips)