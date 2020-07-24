import React, { Component }  from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import { SearchBar } from 'react-native-elements';

class SearchBar extends Component {
  constructor(props) {
    super(props)
 
  }

  render() {
    return (
      <SearchBar 
        placeholder='Search...'
        value={null}
        round
        platform='ios'
        containerStyle={styles.searchContainer}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);