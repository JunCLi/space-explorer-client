import React, { useState } from 'react'

import { Text, View } from 'react-native'

import { useQuery } from 'react-apollo-hooks'
import { GET_ALL_LAUNCHES } from '../../gql/tripQueries'

import LoadMoreButton from './LoadMoreButton'
import LaunchPreview from './LaunchPreview'

const AllLaunches = props => {
	const { loading, error, data, fetchMore } = useQuery(GET_ALL_LAUNCHES)
	const [ disableLoadMore, setDisableLoadMore ] = useState(false)

	if ( loading ) return <View><Text>Loading</Text></View>

	if ( error ) return <View><Text>Error</Text></View>

	const getMore = () => {
		setDisableLoadMore(true)
		fetchMore({
			query: GET_ALL_LAUNCHES,
			variables: {input: {
				cursor: data.getAllLaunches.nextCursor,
			}},
			updateQuery: (previousResult, { fetchMoreResult }) => {
				setDisableLoadMore(false)
				return {
					getAllLaunches: {
						...fetchMoreResult.getAllLaunches,
						launches: [...previousResult.getAllLaunches.launches, ...fetchMoreResult.getAllLaunches.launches],
					}
				}
			}
		})
	}

	return (
		<>
			<View style={{flex: 1}}>
				{data.getAllLaunches.launches.map(launch => (
					<LaunchPreview key={launch.flight_number} launch={launch} />
				))}
			</View>

			{ data.getAllLaunches.hasMore && 
				<LoadMoreButton getMore={getMore} disableLoadMore={disableLoadMore} />
			}
		</>
	)
}

export default AllLaunches