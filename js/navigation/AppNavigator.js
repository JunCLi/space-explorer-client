import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Temp from '../components/Temp'
import Test from '../components/Test'

export default createAppContainer(
	createSwitchNavigator({
		AuthLoading: Temp,
		App: Test,
		Auth: Temp,
	})
)