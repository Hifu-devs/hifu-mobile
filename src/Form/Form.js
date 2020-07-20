import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
  } from 'react-native';

  class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          isLoading: false,
          isOverviewRead: false
        }
      }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Hey 
                </Text>
            </View>
        )
    }
  }


const styles = StyleSheet.create({
    flex: 1,
});

const mapStateToProps = state => ({
    
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Form);