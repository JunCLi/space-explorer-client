import React from 'react'

import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

import { connect } from 'react-redux'

import { backgroundStyles } from '../../stylesheets/generalStyles'

const mapStateToProps = state => {
	return state
}

const Home = props => {

	return (
		<SafeAreaView style={backgroundStyles.background}>
			<StatusBar barStyle='light-content' />
			<Text>Home</Text>

			<Button
				title='check props'
				onPress={() => console.log(props)}
			/>
		</SafeAreaView>
	)
}

export default connect(mapStateToProps)(Home)