import React, { Component }  from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import PlacesInput from 'react-native-places-input';


// App Imports
import { setLocation, setRegion } from '../Map/Api/actions'
import * as GOOGLE_API_KEY from '../../ENV';
const apiKey = GOOGLE_API_KEY.default;

class Search extends Component {
  constructor(props) {
    super(props)
 
  }

  render() {
    return (
        <PlacesInput 
          key={Math.random()}
          googleApiKey={apiKey}
          placeHolder={'Search'}
          language={'en-US'}
          onSelect={async (place) => {
            await this.props.setLocation(place.result.geometry.location.lat, place.result.geometry.location.lng);
            let region = await {
              latitude:  this.props.wayPoints[0][0].latitude,
              longitude: this.props.wayPoints[0][0].longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }
            this.props.setRegion(region)
          }}
        />
    );
  }
}

const style = StyleSheet.create({
  searchContainer: {
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 2,
  }
})

const mapStateToProps = (state) => {
  return {
    wayPoints: [state.userRoute.wayPoint]
  }
}

const mapDispatchToProps = (dispatch) => {  
  return {
    setLocation: (lat, lon) => dispatch(setLocation(lat, lon)),
    setRegion: (region) => dispatch(setRegion(region))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);