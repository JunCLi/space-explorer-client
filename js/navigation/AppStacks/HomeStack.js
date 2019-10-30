import { createStackNavigator } from 'react-navigation-stack'

import { backgroundColours, fontColours } from '../../stylesheets/colours'

import Home from '../../screens/home/Home'
// import Launch from '../../components/home/launch/Launch'

const HomeStack = createStackNavigator(
	{
		Home: {
			screen: Home,
			navigationOptions: () => ({
				title: 'SpaceX Launches'
			})
		},

		// Launch: {
		// 	screen: Launch,
		// 	navigationOptions: ({ navigation }) => ({
		// 		title: navigation.state.params.launch.mission_name
		// 	})
		// }
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