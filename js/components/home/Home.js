import React from 'react'

import { SafeAreaView, StatusBar, Text, View, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'

import { connect } from 'react-redux'

import AllLaunches from './AllLaunches'

import { backgroundStyles } from '../../stylesheets/generalStyles'
import { homeStyles } from '../../stylesheets/home/homeStyles'

const mapStateToProps = state => {
	return state
}

const Home = props => {
	return (
		<SafeAreaView style={backgroundStyles.background}>
			<StatusBar barStyle='light-content' />
			<ScrollView style={backgroundStyles.container} contentContainerStyle={{flexGrow: 1}}>
				<AllLaunches {...props} />
			</ScrollView>
		</SafeAreaView>
	)
}

export default connect(mapStateToProps)(Home)