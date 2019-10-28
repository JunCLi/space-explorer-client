import { createStackNavigator } from 'react-navigation-stack'

import { background, font } from '../../stylesheets/colours'

import Home from '../../components/home/Home'
import Launch from '../../components/home/launch/Launch'

const HomeStack = createStackNavigator(
	{
		Home: {
			screen: Home,
			navigationOptions: () => ({
				title: 'SpaceX Launches'
			})
		},

		Launch: {
			screen: Launch,
			navigationOptions: ({ navigation }) => ({
				title: navigation.state.params.launch.mission_name
			})
		}
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				color: font.white,
				backgroundColor: background.darkerPurple,
			},
			headerTintColor: font.white,
			headerTitleStyle: {
				fontSize: 25,
				fontWeight: 'bold',
				marginBottom: 10,
			},
		}
	}
)

export default HomeStack