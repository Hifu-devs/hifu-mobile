// import { GOOGLE_API_KEY } from 'inline-dotenv'
import React, { Component }  from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
  } from 'react-native';
  // import { SearchBar } from 'react-native-elements';
  import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

class Search extends Component {
  constructor(props) {
    super(props)
 
  }

  render() {
    return (
    //   <GooglePlacesAutocomplete
    //   placeholder='Search'
    //   onPress={(data, details = null) => {
    //     // 'details' is provided when fetchDetails = true
    //     console.log(data, details);
    //   }}
    //   query={{
    //     key: 'GOOGLE_API_KEY',
    //     language: 'en',
    //   }}
    // />
    <View>
      <Text>Hey</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    borderBottomColor: "#ECECEC",
    borderBottomWidth: 2
  }
})

const mapStateToProps = (state) => {
  return {
   state
  }
}

const mapDispatchToProps = (dispatch) => {  
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);