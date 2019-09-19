import { createBottomTabNavigator } from 'react-navigation-tabs'

import Temp from '../components/Temp'

const AppStack = createBottomTabNavigator({
	Home: {
		screen: Temp,
	},

	Test1: {
		screen: Temp,
	},

	Test2: {
		screen: Temp,
	},

},{
	initialRouteName: 'Home',
})

export default AppStack