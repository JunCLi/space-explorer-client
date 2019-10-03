import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { Icon } from 'react-native-elements'

import { backgroundPurple, whiteFont, lightGreyFont, greyFont } from '../stylesheets/colours'

import Home from '../components/home/Home'
import Profile from '../components/profile/Profile'

const AppStack = createBottomTabNavigator({
	Home: {
		screen: Home,
		navigationOptions: () => ({
			title: 'Home',
			tabBarIcon: ({ tintColor }) => (
        <Icon name='home' type='font-awesome' size={30} color={tintColor} />
      ),
		}),
	},

	BookedTrips: {
		screen: Home,
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
	initialRouteName: 'Profile',
	tabBarOptions: {
    activeTintColor: whiteFont,
    inactiveTintColor: greyFont,
		style: {
			backgroundColor: backgroundPurple,
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