// Imports
import React, { Component } from "react";
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Marker } from "react-native-maps";
import * as Location from "expo-location";

// App Imports 
import { setInitialLocation } from './Api/actions';
import { render } from "react-dom";


class Map extends Component {

  constructor(props) {
    super(props)

  
  }

  componentDidMount = async () => {

    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
    }
    let location = await Location.getCurrentPositionAsync({});
    const startLat = location.coords.latitude;
    const startLon = location.coords.longitude;
    console.log('location', location);
    this.setState({
      initialRegion: {}
    })
    this.props.setInitialLocation(startLat, startLon)
  }

  render() {
    return (
      <View>
        <MapView
          provider={ PROVIDER_GOOGLE }
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          style={{ height: "100%" }} 
          showsUserLocation={true}
        >

        </MapView>
      </View>
    )
  }
 
  };


const mapStateToProps = (state) => {
  return {
    initialLocation: state.userRoute,
  }
}

const mapDispatchToProps = (dispatch) => {  
  return {
    setInitialLocation: (startLat, startLon) => dispatch(setInitialLocation(startLat, startLon)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);