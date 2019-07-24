import React from 'react';
import {View} from './core-ui';
import {Articles} from './pages';

function App() {
  return (
    <View style={styles.app}>
      <View style={styles.wrapper}>
        <Articles />
      </View>
    </View>
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
