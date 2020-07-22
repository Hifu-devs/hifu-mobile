import React, { Component }  from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
  } from 'react-native';

// App Imports
import UserForm from '../Forms/UserForm';
import ContactForm from '../Forms/ContactForm';
import TripForm from '../Forms/TripForm';


  class User extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          isOverviewRead: false
        }
      }
    
      
    closeInfoWindow = () => {
      this.setState({
        isOverviewRead: true
      })
    }

    render() {
        return (
          <View style={styles.container}>
            {this.state.isOverviewRead ? (
            <ScrollView>
                <ImageBackground
                    source={require('../../assets/Images/forest.png')}
                    style={styles.backgroundImg}
                >
                    <UserForm />
                    <ContactForm /> 
                    <TripForm />
                </ImageBackground>
            </ScrollView>
            ) : (
            <ImageBackground
            source={require('../../assets/Images/desert.png')}
            style={styles.backgroundImg}
            >
            <View style={styles.header}>
              <TouchableOpacity 
                style={styles.button}
                onPress={() => this.closeInfoWindow()}
              >
                <Text style={styles.buttonText}>X</Text>
              </TouchableOpacity>
              <Text style={styles.infoHeader}>
                {'Welcome to hifu'.toUpperCase()}
              </Text>
            </View>
            <View>
              <Text style={styles.infoText}>
                A search and rescue ‘dead man’s switch’ for all of your outdoor activities. After entering your personal information, and an emergency contact, you can define your route’s waypoints.  When all the information is complete, submit your activity and it will be stored securely. When you check-in before your route’s end time, ALL of your submitted information is deleted from our system. If you fail to checked-in by the stated end time of your route, we will automatically forward all of your location and trip info to your emergency contact.
              </Text>
            </View>
          </ImageBackground> 
          )}      
        </View>
      )
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImg: {
    flex: 1,
    padding: 25,
    // resizeMode: 'cover',
    justifyContent: 'center',
  },
  infoHeader: {
    fontFamily: 'OpenSansCondensed_300Light',
    fontSize: 50,
    textAlign: 'center',
    color: '#000',
    marginBottom: 10,
  },
  infoText: {
    fontFamily: 'OpenSansCondensed_300Light',
    fontSize: 25,
    textAlign: 'center',
    color: '#000',
  },
  button: {
    marginLeft: 100, 
    alignItems: 'flex-end',
  },
  buttonText: {
    fontSize: 40,
  },
});

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(User);