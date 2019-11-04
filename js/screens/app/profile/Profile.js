import React from 'react'

import { SafeAreaView, ScrollView, StatusBar, View, Text } from 'react-native'
import { Avatar, Button, Icon, ListItem } from 'react-native-elements'

import { useMutation } from 'react-apollo-hooks'
import { LOGOUT } from '../../../gql/authQueries'
import { connect } from 'react-redux'

import DarkPurpleButton from '../../../components/Buttons/DarkPurpleButton'
import { styles } from './styles'

const mapStateToProps = state => {
	return state
}

const Profile = props => {
	const [logout] = useMutation(LOGOUT)

	const handleLogout = async () => {
		await logout()
		props.navigation.navigate('AuthLoading', {
			loggedOut: true,
		})
	}

	const profileList = [
		{
			title: 'Payment',
			leftIcon: 'ios-american-football',
		},
		{
			title: 'Stuff',
			leftIcon: 'ios-american-football',
		},
		{
			title: 'Not Sure what else',
			leftIcon: 'ios-american-football',
		},
		{
			title: 'To put here',
			leftIcon: 'ios-american-football',
		},
	]

	return (
		<SafeAreaView style={styles.background}>
			<StatusBar barStyle='light-content' />
			<ScrollView style={styles.mainContainer} contentContainerStyle={{flexGrow: 1}}>

				<View style={styles.topContainer}>

					<View style={styles.avatarContainer}>
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

					<View style={styles.listContainer}>
						{profileList.map(item => (
							<ListItem
								key={item.title}
								title={item.title}
								containerStyle={styles.listItemContainer}
								titleStyle={styles.listItemTitle}
								leftIcon={<Icon
										name={item.leftIcon}
										type='ionicon'
										color='white'
									/>}
								chevron={{size: 25}}
							/>
						))}
					</View>

				</View>
				

				<View>
					<DarkPurpleButton
						text='LOGOUT'
						buttonFunction={handleLogout}
						fontWeight='bold'
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default connect(mapStateToProps)(Profile)