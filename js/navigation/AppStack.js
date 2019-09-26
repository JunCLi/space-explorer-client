import { createBottomTabNavigator } from 'react-navigation-tabs'

import Temp from '../components/Temp'
import Home from '../components/home/Home'

const AppStack = createBottomTabNavigator({
	Home: {
		screen: Home,
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