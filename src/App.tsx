import React from 'react';

import {Provider} from 'react-redux'

import { NavigationContainer } from '@react-navigation/native';
import {HomeNavigator} from './navigators/HomeNavigator';
import { store } from './redux/store';



const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <HomeNavigator/>
      </NavigationContainer>
    </Provider>
  );
}

export default App