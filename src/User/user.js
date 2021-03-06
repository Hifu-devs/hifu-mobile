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
  import Icon from 'react-native-vector-icons/AntDesign';

// App Imports
import UserForm from '../Forms/UserForm';
import ContactForm from '../Forms/ContactForm';
import TripForm from '../Forms/TripForm';
import { setUserInfo } from './Api/actions';


  class User extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
          isOverviewRead: false,
          errorMessage: null,
        }
      }
    
      
    closeInfoWindow = () => {
      this.setState({
        isOverviewRead: true
      })
    }

    handleSaveForm = async () => {
      const userErrors = this.props.user.syncErrors;
      const contactErrors = this.props.contact.syncErrors;
      const routeErrors = this.props.route.syncErrors;
      if(userErrors || contactErrors || routeErrors){     
        this.setState({
          errorMessage: 'Please fill out all required fields'
        });
        this.refs._scrollView.scrollTo(0)
      } else {
        const userData = await this.props.user.values
        const contactData = await this.props.contact.values 
        const routeData = await this.props.route.values  
        console.log('route', routeData);
        await this.props.setUserInfo(userData, contactData, routeData);
        this.props.navigation.navigate('Map'); 
      }
    }

    render() {
        return (
          <View style={styles.container}>
            {this.state.isOverviewRead ? (
            <ScrollView ref='_scrollView'>
                <ImageBackground
                    source={require('../../assets/Images/forest.png')}
                    style={styles.backgroundImg}
                >
                  <View>
                    <View>
                      {this.state.errorMessage ? (
                        <View style={styles.errorContainer}>
                          <Image
                            style={styles.icon}
                            source={require('../../assets/Images/DarkLogo.png')}
                            />
                          <Text 
                            key={Math.random()} 
                            style={styles.error}
                          >
                            {this.state.errorMessage}
                          </Text>
                        </View>
                      ): undefined }
                    </View>
                      <UserForm />
                      <ContactForm /> 
                      <TripForm />
                  </View>
                  <View>
                    <TouchableOpacity 
                    style={styles.saveButton}
                    onPress={() => this.handleSaveForm()}
                    >
                      <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
            </ScrollView>
            ) : (
            <ScrollView>
             <ImageBackground
              source={require('../../assets/Images/desert.png')}
              style={styles.backgroundImg}
              >
              <View style={styles.header}>
                <TouchableOpacity 
                  style={styles.closeButton}
                  onPress={() => this.closeInfoWindow()}
                >
                  <View>
                    <Icon name='closecircleo' size={35} color='#000' />
                  </View>
                </TouchableOpacity>
                <Text style={styles.infoHeader}>
                  {'Welcome to hifu'.toUpperCase()}
                </Text>
              </View>
              <View>
                <Text style={styles.infoText}>
                  A search and rescue ‘dead man’s switch’ for all of your outdoor activities. After entering your personal and emergency contact information, you will be redirected to your map, where you can search for, and define, your location and custom route waypoints. When all the information is complete, submit your activity and it will be stored securely. When you check-in before your routes end time, ALL of your submitted information is deleted from our system. If you fail to checked-in by the stated end time of your route, we will automatically forward all of your location and trip info to your emergency contact.
                </Text>
              </View>
            </ImageBackground> 
          </ScrollView>
          )}      
        </View>
      )
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: 120,
    height: 70,
    marginLeft: 70
  },
  backgroundImg: {
    flex: 1,
    padding: 25,
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
  closeButton: {
    marginLeft: 100, 
    alignItems: 'flex-end',
  },
  saveButton: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderRadius: 40,
    backgroundColor: '#fff',
    width: '75%',
    marginTop: 30,
    left: 40,
    padding: 10
  },
  buttonText: {
    fontSize: 40,
    textAlign: 'center'
  },
  error: {
    color: '#900',
    fontSize: 18,
  },
  errorContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 18
  }
});

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

export default connect(mapStateToProps, mapDispatchToProps)(User);