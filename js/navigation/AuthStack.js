import { createStackNavigator } from 'react-navigation-stack'


import Welcome from '../components/authentication/Welcome'
import Signup from '../components/authentication/signup/Signup'
import Login from '../components/authentication/login/Login'

const AuthStack = createStackNavigator({
	Welcome: {
		screen: Welcome,
		navigationOptions: () => ({
			title: `Welcome`,
			header: null,
    }),
	},

	Signup: {
		screen: Signup,
		navigationOptions: () => ({
			title: `Signup`,
    }),
	},

	Login: {
		screen: Login,
		navigationOptions: () => ({
			title: `Login`,
    }),
	},
},{
	initialRouteName: 'Welcome',
})

export default AuthStack