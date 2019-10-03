import React from 'react'

import { SafeAreaView, ScrollView, StatusBar, View, Text } from 'react-native'
import { Avatar, Button, Icon, ListItem } from 'react-native-elements'

import { useMutation } from 'react-apollo-hooks'
import { LOGOUT } from '../../gql/authQueries'
import { connect } from 'react-redux'

import { backgroundStyles } from '../../stylesheets/generalStyles'
import { profileStyles } from '../../stylesheets/profile/profileStyles'

const mapStateToProps = state => {
	return state
}

const Profile = props => {
	const logout = useMutation(LOGOUT)

	const handleLogout = async () => {
		await logout[0]()
		props.navigation.navigate('AuthLoading')
	}

	return (
		<SafeAreaView style={backgroundStyles.background}>
			<StatusBar barStyle='light-content' />
			<ScrollView style={backgroundStyles.container} contentContainerStyle={{flexGrow: 1}}>

				<View style={profileStyles.avatarContainer}>
					<Avatar
						title={props.authentication.first_name.substring(0, 3)}
						source={{
							uri:
								'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
						}}
						onEditPress={() => console.log('edit button pressed!!!')}
						rounded
						showEditButton
						size="xlarge"
					/>
				</View>

				<View style={profileStyles.listBackground}>
					<ListItem
						title='Payment'
						containerStyle={profileStyles.listItemContainer}
						titleStyle={profileStyles.listItemTitle}
						leftIcon={<Icon
								name='ios-american-football'
								type='ionicon'
								color='white'
							/>}
						chevron={{size: 25}}
					/>
					<ListItem
						title='Stuff'
						containerStyle={profileStyles.listItemContainer}
						titleStyle={profileStyles.listItemTitle}
						leftIcon={<Icon
								name='ios-american-football'
								type='ionicon'
								color='white'
							/>}
						chevron={{size: 25}}
					/>
					<ListItem
						title='Not sure what else'
						containerStyle={profileStyles.listItemContainer}
						titleStyle={profileStyles.listItemTitle}
						leftIcon={<Icon
								name='ios-american-football'
								type='ionicon'
								color='white'
							/>}
						chevron={{size: 25}}
					/>
					<ListItem
						title='To put here'
						containerStyle={profileStyles.listItemContainer}
						titleStyle={profileStyles.listItemTitle}
						leftIcon={<Icon
								name='ios-american-football'
								type='ionicon'
								color='white'
							/>}
						chevron={{size: 25}}
					/>

				</View>

				<View style={profileStyles.logoutContainer}>
					<Button
						title='logout'
						buttonStyle={profileStyles.logoutButton}
						titleStyle={profileStyles.logoutButtonText}
						onPress={handleLogout}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default connect(mapStateToProps)(Profile)