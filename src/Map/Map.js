import React, { Component }  from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
  } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

// App Imports
import mapToken from './accessToken'

MapboxGL.setAccessToken(mapToken);

class User extends Component {


    render() {
        return (
          <View>
              <Text>Hey</Text>
          </View>
      )
    }
  }