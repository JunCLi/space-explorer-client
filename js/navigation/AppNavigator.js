import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import AuthStack from './AuthStack'
import AppStack from './AppStack'
import AuthLoading from '../screens/authloading/AuthLoading'

export default createAppContainer(
	createSwitchNavigator({
		AuthLoading: AuthLoading,
		Auth: AuthStack,
		App: AppStack,
	}, {
		initialRouteName: 'AuthLoading'
	})
)