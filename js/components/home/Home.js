import React from 'react'

import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

import { useQuery, useMutation } from 'react-apollo-hooks'
import { TEST_2 } from '../../gql/tripQueries'
import { TEST_AUTHENTICATION } from '../../gql/authQueries'

import { backgroundStyles } from '../../stylesheets/generalStyles'

const Home = props => {
	const { data, loading, error } = useQuery(TEST_AUTHENTICATION)
	const logout = useMutation(TEST_2)

	const handleLogout = async () => {
		await logout[0]()
	}

	if (loading) return (
		<View>
			<Text>Loading</Text>
		</View>
	)

	if (error) return (
		<View>
			<Text>Error</Text>
		</View>
	)

	console.log('data', data)

	return (
		<SafeAreaView style={backgroundStyles.background}>
				<StatusBar barStyle='light-content' />
			<Text>Home</Text>

			<Button 
				title='logout'
				onPress={handleLogout}
			/>
		</SafeAreaView>
	)
}

export default Home