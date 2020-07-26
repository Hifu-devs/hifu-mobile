// Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import { AppLoading } from 'expo';
// import MapViewDirections from 'react-native-maps-directions';
import * as GOOGLE_API_KEY from '../../ENV';
const apiKey = GOOGLE_API_KEY.default;

// App Imports 
import { setInitialLocation, setWayPoint } from './Api/actions';

console.disableYellowBox = true;

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
    let lat = location.coords.latitude;
    let lon = location.coords.longitude;
    await this.props.setInitialLocation(lat, lon);
    await this.makeMarkers();
    this.setState({
      isLoading: false
    })
  }

  onMapPress = async (e) => {
    let lat = e.nativeEvent.coordinate.latitude;
    let lon = e.nativeEvent.coordinate.longitude;
    await this.props.setWayPoint(lat, lon);
    await this.makeMarkers();
  }

  onRegionChange = (region) => {
    this.setState({
      region: region
    })
  }

  makeMarkers = () => {
    return this.props.wayPoints[0].map(point => {
      return (
          <Marker
            key={Math.random()}
            coordinate={{ latitude: point.latitude, longitude: point.longitude }}
          />
      )
    })
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
            style={{ height: '100%' }} 
            showsUserLocation={true}
            onPress={(e) => this.onMapPress(e)}
            onRegionChange={this.onRegionChange.bind(this)}
          >
            {this.props.wayPoints[0].length >= 2 ?
            <>
              {console.log('origin', this.props.wayPoints[0])}
              {console.log('destination', this.props.wayPoints[0][1])}
             <MapView.Polyline
              coordinates={this.props.wayPoints[0]}
              strokeWidth={5}
              strokeColor={'#0CA5E7'}
           />
           </>
            : null  
            }
            {markers}
          </MapView>
        </View>
      )
    }
 
  };
}


const mapStateToProps = (state) => {
  return {
    wayPoints: [state.userRoute.wayPoint]
  }
}

const mapDispatchToProps = (dispatch) => {  
  return {
    setInitialLocation: (lat, lon) => dispatch(setInitialLocation(lat, lon)),
    setWayPoint: (lat, lon) => dispatch(setWayPoint(lat, lon))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);