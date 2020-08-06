import React from 'react';

import {Provider} from 'react-redux'

import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {HomeNavigator, SearchNavigation} from './navigators';

import { store } from './redux/store';


const {Navigator, Screen} = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Navigator tabBarOptions={{
              activeTintColor: 'black',
            }}
          >
            <Screen name="HomeNavigator" component={HomeNavigator} options={{
              tabBarLabel: 'Главная',
              tabBarIcon: () => <Ionicons name="ios-home" size={24} color="black" />
            }}/>
            <Screen name="SearchNavigator" component={SearchNavigation} options={{
              tabBarLabel: 'Поиск трека',
              tabBarIcon: () => <Ionicons name="ios-search" size={24} color="black" />
            }}/>
          </Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App