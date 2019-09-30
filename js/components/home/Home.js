import React from 'react'

import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'

import { useQuery, useMutation } from 'react-apollo-hooks'
import { TEST_2 } from '../../gql/tripQueries'
import { TEST_AUTHENTICATION } from '../../gql/authQueries'

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
		<View>
			<Text>Home</Text>

			<Button 
				title='logout'
				onPress={handleLogout}
			/>
		</View>
	)
}

export default Home