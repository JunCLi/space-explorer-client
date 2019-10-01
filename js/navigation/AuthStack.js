import { createStackNavigator } from 'react-navigation-stack'


import Login from '../components/authentication/login/Login'
import Signup from '../components/authentication/signup/Signup'
import SuccessfulSignup from '../components/authentication/signup/SuccessfulSignup'

const AuthStack = createStackNavigator({
	Login: {
		screen: Login,
		navigationOptions: () => ({
			title: `Login`,
			header: null,
    }),
	},

	Signup: {
		screen: Signup,
		navigationOptions: () => ({
			title: `Signup`,
			header: null,
    }),
	},

	SuccessfulSignup: {
		screen: SuccessfulSignup,
		navigationOptions: () => ({
			title: 'Signup',
			header: null,
		})
	},
},{
	initialRouteName: 'Login',
})

export default AuthStack