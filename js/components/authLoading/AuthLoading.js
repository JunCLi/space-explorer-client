import React from 'react'

import { SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { useQuery } from 'react-apollo-hooks'
import { TEST_2 } from '../../gql/authQueries'

const AuthLoading = props => {
	const { data, loading, error } = useQuery(TEST_2)

	const handleNavigateAuthentication = () => {
		props.navigation.navigate('Auth')
	}

	const handleNavigateApp = () => {
		props.navigation.navigate('App')
	}

	if (loading) return <SafeAreaView><Text>loading</Text></SafeAreaView>
	
	if (error) return <SafeAreaView><Text>error</Text></SafeAreaView>

	console.log(data)

	return (
		<SafeAreaView>
			<Text>This will be the first screen in the App before we direct them to either stack</Text>
			<TouchableOpacity onPress={handleNavigateAuthentication}>
				<Text>Go to Authentication Stack</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={handleNavigateApp}>
				<Text>Go to App Stack</Text>
			</TouchableOpacity>

			<TouchableOpacity>
				<Text>Test button</Text>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

export default AuthLoading