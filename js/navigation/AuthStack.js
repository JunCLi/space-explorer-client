import { createStackNavigator } from 'react-navigation-stack'

import Temp from '../components/Temp'
import Welcome from '../components/authentication/Welcome'

const AuthStack = createStackNavigator({
	Welcome: {
		screen: Welcome
	},

	Signup: {
		screen: Temp
	},

	Login: {
		screen: Temp
	},
},{
	initialRouteName: 'Welcome',
})

export default AuthStack