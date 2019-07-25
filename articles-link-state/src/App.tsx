import React from 'react';
import { ApolloProvider, ApolloConsumer } from 'react-apollo';

import { client } from './lib/client';

import { Articles } from './pages';
import { View, Button } from './core-ui';

function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.app}>
        <View style={styles.wrapper}>
          <Articles />
          <Articles />
        </View>
      </View>
      <ApolloConsumer>
        {client => {
          return (
            <Button
              onPress={() => {
                client.writeData({
                  data: {
                    articles: {
                      id: 'cjyhelnis000195sbbx5t9kyx',
                      content: 'test',
                      title: 'test',
                      active: true,
                      __typename: 'Article'
                    }
                  }
                });
              }}
            >
              Update Local State
            </Button>
          );
        }}
      </ApolloConsumer>
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
