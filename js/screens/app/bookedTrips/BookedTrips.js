import React from 'react'

import { SafeAreaView, StatusBar, Text, View, ScrollView } from 'react-native'

import { connect } from 'react-redux'

import AllBookedTrips from '../../../components/lists/allBookedTrips/AllBookedTrips'

import { styles } from './styles'

const mapStateToProps = state => {
	return state
}

const BookedTrips = props => {

	return (
		<SafeAreaView style={styles.background}>
			<StatusBar barStyle='light-content' />
			<ScrollView style={styles.mainContainer} contentContainerStyle={{flexGrow: 1}}>
				<AllBookedTrips {...props} />
			</ScrollView>
		</SafeAreaView>
	)
}

export default connect(mapStateToProps)(BookedTrips)	