import React from 'react'

import { View } from 'react-native'
import { Button } from 'react-native-elements'

import { loadMoreButtonStyles } from '../../stylesheets/utils/loadMoreStyles'

const LoadMoreButton = props => {
	const { getMore, disableLoadMore } = props

	return (
		<View style={loadMoreButtonStyles.loadMoreContainer}>
			<Button
				title='Load More'
				buttonStyle={loadMoreButtonStyles.loadMoreButton}
				titleStyle={loadMoreButtonStyles.loadMoreText}
				disabledStyle={loadMoreButtonStyles.disabledLoadMoreButton}
				disabledTitleStyle={loadMoreButtonStyles.disabledLoadMoreText}
				disabled={disableLoadMore}
				onPress={getMore}
			/>
		</View>
	)
}

export default LoadMoreButton