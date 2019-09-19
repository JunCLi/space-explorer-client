import { createStackNavigator } from 'react-navigation-stack'

import Temp from '../components/Temp'

const AuthStack = createStackNavigator({
	Welcome: {
		screen: Temp
	},
})

export default AuthStack