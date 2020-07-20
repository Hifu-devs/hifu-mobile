// Imports
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './src/LandingPage/LandingPage';
// import NavBar from './src/NavBar/NavBar';
import Form from './src/Form/Form';
// import { Map } from './src/Map/Map';
// import { ActiveTrip } from './src/ActiveTrip/ActiveTrip';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'


const Stack = createStackNavigator();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Landing'>
            <Stack.Screen 
              name='Home' 
              component={LandingPage} 
            />
            {/* <Stack.Screen
              name='Nav Bar'
              component={NavBar}
            /> */}
            <Stack.Screen
              name='Form'
              component={Form}
            />
            {/* <Stack.Screen
              name='Map'
              component={Map}
            />
              <Stack.Screen
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