import React from 'react'

import { ApolloProvider } from 'react-apollo-hooks'
import apolloclient from './apolloclient'
import { Provider as ReduxProvider } from 'react-redux'
import store from './redux/store/configureStore'

import AppNavigator from './navigation/AppNavigator'

const App = () => {
  return (
		<ApolloProvider client={apolloclient}>
			<ReduxProvider store={store}>
				<AppNavigator />
			</ReduxProvider>
		</ApolloProvider>
  );
};

export default App