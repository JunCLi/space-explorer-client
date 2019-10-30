import React, { useState } from 'react'

import { Text, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'

import { useQuery } from 'react-apollo-hooks'
import { GET_ALL_LAUNCHES } from '../../../gql/tripQueries'

import DarkPurpleButton from '../../util/Buttons/DarkPurpleButton'

import { styles } from './styles'

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

	const viewMission = launch => {
		props.navigation.navigate('Launch', {launch: launch})
	}

	return (
		<>
			<View style={{flex: 1}}>
				{data.getAllLaunches.launches.map(launch => {
					const detailsPreviewCharacterCount = 100

					const detailsPreview = launch.details.length > detailsPreviewCharacterCount
						? `${launch.details.substring(0, detailsPreviewCharacterCount)}...`
						: `${launch.details}.`

					return (
						<ListItem
							key={launch.flight_number}
							// leftAvatar={{size: 'large', source: {uri: launch.mission_patch}}}
							leftAvatar={
								<Avatar
									source={{uri: launch.mission_patch}}
									title={launch.mission_name.substring(0, 3)}
									overlayContainerStyle={styles.avatarBackground}
									rounded={false}
									size='large'
								/>
							}
							title={launch.mission_name}
							titleStyle={styles.missionPreviewTitle}
							subtitle={detailsPreview}
							subtitleStyle={styles.missionPreviewSubtitle}
							containerStyle={styles.missionPreviewContainer}
							onPress={() => viewMission(launch)}
						/>
					)}
				)}
			</View>

			{ data.getAllLaunches.hasMore && 
				<DarkPurpleButton
					text='Load More'
					buttonFunction={getMore}
					disableLoadMore={disableLoadMore}
				/>
			}
		</>
	)
}

export default AllLaunches