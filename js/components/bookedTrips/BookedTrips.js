import React from 'react'

import { SafeAreaView, StatusBar, Text, View, ScrollView } from 'react-native'

import { connect } from 'react-redux'

import AllBookedTrips from './AllBookedTrips'

import { backgroundStyles } from '../../stylesheets/generalStyles'

const mapStateToProps = state => {
	return state
}

const BookedTrips = props => {

	return (
		<SafeAreaView style={backgroundStyles.background}>
			<StatusBar barStyle='light-content' />
			<ScrollView style={backgroundStyles.container} contentContainerStyle={{flexGrow: 1}}>
				<AllBookedTrips {...props} />
			</ScrollView>
		</SafeAreaView>
	)
}

export default connect(mapStateToProps)(BookedTrips)	