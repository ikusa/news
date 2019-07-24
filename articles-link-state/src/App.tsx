import React from 'react';
import { ApolloProvider } from 'react-apollo';

import { client } from './lib/client';

import { Articles } from './pages';
import { View } from './core-ui';

function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.app}>
        <View style={styles.wrapper}>
          <Articles />
          <Articles />
        </View>
      </View>
    </ApolloProvider>
  );
}

const styles = {
  app: {
    display: 'flex',
    flex: 1,
    padding: 10,
    height: '100vh',
    justifyContent: 'center'
  },
  wrapper: {
    minWidth: '50%'
  }
};
export default App;
