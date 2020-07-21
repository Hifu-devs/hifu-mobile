// Imports
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './src/LandingPage/landingPage';
// import NavBar from './src/NavBar/navBar';
// import Form from './src/Form/form';
import User from './src/User/user';
// import Map from './src/Map/map';
// import ActiveTrip from './src/ActiveTrip/activeTrip';
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
              name='User'
              component={User}
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