import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Marker } from "react-native-maps";
import * as Location from "expo-location";

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
      console.log('location', location);
      
      // setLocation(location);
    }

    render() {
      return (
        <View>
          <MapView
            style={{ height: "68%" }} 
            showsUserLocation={true}
          >

          </MapView>
        </View>
      )
    }

  };


const mapStateToProps = (state) => {
  return {
    user: state.form.user,
    contact: state.form.contact,
    route: state.form.route,
    form: state.userInfo,
  }
}

const mapDispatchToProps = (dispatch) => {  
  return {
    setUserInfo: (userData, contactData, routeData) => dispatch(setUserInfo(userData, contactData, routeData)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);