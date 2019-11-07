import { createStackNavigator } from 'react-navigation-stack'

import { backgroundColours, fontColours } from '../../stylesheets/colours'

import Home from '../../screens/app/home/Home'
import LaunchInfo from '../../screens/app/launchInfo/Launch'

const HomeStack = createStackNavigator(
	{
		Home: {
			screen: Home,
			navigationOptions: () => ({
				title: 'SpaceX Launches'
			})
		},

		LaunchInfo: {
			screen: LaunchInfo,
			navigationOptions: ({ navigation }) => ({
				title: navigation.state.params.flightDetails.mission_name
			})
		}
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				color: fontColours.white,
				backgroundColor: backgroundColours.darkerPurple,
			},
			headerTintColor: fontColours.white,
			headerTitleStyle: {
				fontSize: 25,
				fontWeight: 'bold',
				marginBottom: 10,
			},
		}
	}
)

export default HomeStack