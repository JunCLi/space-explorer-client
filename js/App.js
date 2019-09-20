import React from 'react'

import { ApolloProvider } from 'react-apollo-hooks'
import apolloclient from './apolloclient'

import AppNavigator from './navigation/AppNavigator'

const App = () => {
  return (
		<ApolloProvider client={apolloclient}>
			<AppNavigator />
		</ApolloProvider>
  );
};

export default App