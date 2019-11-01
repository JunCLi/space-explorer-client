import React from 'react'
import { SafeAreaView, StatusBar, ScrollView } from 'react-native'

import { connect } from 'react-redux'

import AllLaunches from '../../../components/lists/allLaunches/AllLaunches'

import { backgroundStyles } from '../../../stylesheets/generalStyles'

const mapStateToProps = state => {
	return state
}

const Home = props => {
	return (
		<SafeAreaView style={backgroundStyles.background}>
			<StatusBar barStyle='light-content' />
			<ScrollView style={backgroundStyles.mainContainer} contentContainerStyle={{flexGrow: 1}}>
				<AllLaunches {...props} />
			</ScrollView>
		</SafeAreaView>
	)
}

export default connect(mapStateToProps)(Home)