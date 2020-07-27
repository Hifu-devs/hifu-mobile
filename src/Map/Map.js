// Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE, AnimatedRegion } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import { AppLoading } from 'expo';

// App Imports 
import SearchBar from '../Search/Search';
import { setLocation, setWayPoint, setRegion } from './Api/actions';
import * as GOOGLE_API_KEY from '../../ENV';
const apiKey = GOOGLE_API_KEY.default;

console.disableYellowBox = true;

class Map extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,       
    }
  }

  componentDidMount = async () => {

    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
    }
    let location = await Location.getCurrentPositionAsync({});
    let lat = await location.coords.latitude;
    let lon = await location.coords.longitude;
    await this.props.setLocation(lat, lon);
    await this.makeMarkers();
    let region = await {
        latitude: this.props.wayPoints[0][0].latitude,
        longitude: this.props.wayPoints[0][0].longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }
    await this.props.setRegion(region);
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

  handleRegionChange = async () => {
    let region = await {
      latitude:  this.props.wayPoints[0][0].latitude,
      longitude: this.props.wayPoints[0][0].longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
    this.props.setRegion(region)
  }


  render() {
    if (this.state.isLoading) {
      return <AppLoading />
    } else {
      const markers = this.makeMarkers();
     
      return (
        <View keyboardShouldPersistTaps='handled'>
          <MapView
            provider={ PROVIDER_GOOGLE }
            region={this.props.region}
            style={{ height: '100%' }} 
            showsUserLocation={true}
            onPress={(e) => this.onMapPress(e)}
            zoomEnabled={true}
            zoomControlEnabled={true}    
          >
            {this.props.wayPoints[0].length >= 2 ?
             <MapView.Polyline
              coordinates={this.props.wayPoints[0]}
              strokeWidth={5}
              strokeColor={'#0CA5E7'}
           />
            : null  
            }
            <SearchBar />
            {markers}
          </MapView>
        </View>
      )
    }
 
  };
}


const mapStateToProps = (state) => {
  return {
    wayPoints: [state.userRoute.wayPoint],
    region: state.userRoute.region
  }
}

const mapDispatchToProps = (dispatch) => {  
  return {
    setLocation: (lat, lon) => dispatch(setLocation(lat, lon)),
    setWayPoint: (lat, lon) => dispatch(setWayPoint(lat, lon)),
    setRegion: (region) => dispatch(setRegion(region))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);