import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { Icon } from 'react-native-elements'

import { backgroundColours, fontColours } from '../stylesheets/colours'

import HomeStack from './AppStacks/HomeStack'
// import BookedTripsStack from './AppStacks/BookedTripsStack'
import Profile from '../components/profile/Profile'

const AppStack = createBottomTabNavigator({
	Home: {
		screen: HomeStack,
		navigationOptions: () => ({
			title: 'Home',
			tabBarIcon: ({ tintColor }) => (
        <Icon name='home' type='font-awesome' size={30} color={tintColor} />
      ),
		}),
	},

	BookedTrips: {
		screen: HomeStack,
		navigationOptions: () => ({
			title: 'Booked Trips',
			tabBarIcon: ({ tintColor }) => (
        <Icon name='suitcase' type='font-awesome' size={24} color={tintColor} />
      ),
		}),
	},

	Profile: {
		screen: Profile,
		navigationOptions: () => ({
			title: 'Profile',
			tabBarIcon: ({ tintColor }) => (
        <Icon name='user' type='font-awesome' size={26} color={tintColor} />
      ),
		}),
	},
},{
	initialRouteName: 'Home',
	tabBarOptions: {
    activeTintColor: fontColours.white,
    inactiveTintColor: fontColours.grey,
		style: {
			backgroundColor: backgroundColours.purple,
			borderTopWidth: 0,
		},
		labelStyle: {
      fontSize: 12,
      fontWeight: 'bold',
      marginBottom: 4,
    },
	}
})

export default AppStack