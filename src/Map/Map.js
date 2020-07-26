// Imports
import React, { Component } from "react";
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Marker, Callout } from "react-native-maps";
import * as Location from "expo-location";
import { AppLoading } from 'expo';

// App Imports 
import { setInitialLocation, setWayPoint } from './Api/actions';


class Map extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      region: {},        
    }
  }

  componentDidMount = async () => {

    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
    }
    let location = await Location.getCurrentPositionAsync({});
    let wayPoint = [];
    wayPoint.push(location.coords.latitude);
    wayPoint.push(location.coords.longitude);
    await this.props.setInitialLocation(wayPoint);
    await this.makeMarkers();
    console.log('jjj', this.makeMarkers());
    this.setState({
      isLoading: false
    })
  }

  onMapPress = async (e) => {
    let wayPoint = [];
    wayPoint.push(e.nativeEvent.coordinate.latitude);
    wayPoint.push(e.nativeEvent.coordinate.longitude);
    await this.props.setWayPoint(wayPoint);
    await this.makeMarkers();
  }

  onRegionChange = (region) => {
    this.setState({
      region: region
    })
  }

  makeMarkers = () => {
     return this.props.wayPoints.map(point => {
      return (
        <Marker
          key={Math.random()}
          coordinate={{ latitude: point[0][0], longitude: point[0][1] }}
        />
      );
    });
  }

  render() {
    if (this.state.isLoading) {
      return <AppLoading />
    } else {
      const markers = this.makeMarkers();
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
            onPress={(e) => this.onMapPress(e)}
            onRegionChange={this.onRegionChange.bind(this)}
          >
            {markers}
          </MapView>
        </View>
      )
    }
 
  };
}


const mapStateToProps = (state) => {
  return {
    wayPoints: [state.userRoute.route]
  }
}

const mapDispatchToProps = (dispatch) => {  
  return {
    setInitialLocation: (wayPoint) => dispatch(setInitialLocation(wayPoint)),
    setWayPoint: (wayPoint) => dispatch(setWayPoint(wayPoint))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);