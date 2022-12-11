import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Navigation} from './src/navigation/Navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import { persistor, store } from './src/features/store';
import { ActivityIndicator } from 'react-native';

function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
    </PersistGate>
    </Provider>
  );
}

export default App;