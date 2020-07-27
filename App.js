// Imports
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

// App Imports
import LandingPage from './src/LandingPage/LandingPage';
import User from './src/User/User';
import Map from './src/Map/Map';
// import ActiveTrip from './src/ActiveTrip/activeTrip';

console.disableYellowBox = true;

const Stack = createStackNavigator();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='LandingPage'>
            <Stack.Screen 
              name='Home' 
              component={LandingPage} 
            />
            <Stack.Screen
              name='User'
              component={User}
            />
            <Stack.Screen
              name='Map'
              component={Map}
            />
              {/* <Stack.Screen
              name='Active Trip'
              component={ActiveTrip}
            /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App