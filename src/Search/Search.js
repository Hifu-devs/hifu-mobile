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
import { setLocation } from '../Map/Api/actions'
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
          onSelect={place => {
            // console.log('first', this.props.wayPoints);
              this.props.setLocation(place.result.geometry.location.lat, place.result.geometry.location.lng)
          //     console.log('second ', this.props.wayPoints);
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
    setLocation: (lat, lon) => dispatch(setLocation(lat, lon))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);