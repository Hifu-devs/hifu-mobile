import React from 'react';
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


  const LandingPage = ({ navigation }) => {

    const handleEnterSite = () => {
      navigation.navigate('Form'); 
    }; 

    return (
      <View style={styles.container}>
         <ImageBackground
          source={require('../../assets/Background.png')}
          style={styles.backgroundImg}
        >
          <LinearGradient
            colors={['rgba(196, 196, 196, 0.66)', 'rgba(196, 196, 196, 0)']}
            style={styles.linearGradient}
          >
            <Text style={styles.logoHeader}>
              {'Hifu'.toUpperCase()}
            </Text>
            <Text style={styles.logoText}>
              {'When you want to get lost but still found'.toUpperCase()}
            </Text>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => handleEnterSite()}
            >
              <Text style={styles.buttonText}>Start Trip</Text>
            </TouchableOpacity>
          </LinearGradient>
        </ImageBackground>  
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundImg: {
      flex: 1,
      padding: 25,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    linearGradient: {
      flex: 1,
      paddingLeft: 35,
      paddingRight: 35,
      marginTop: 160,
      justifyContent: 'center',
    },
    logoHeader: {
      fontSize: 50,
      marginBottom: 5,
      textAlign: 'center',
      color: '#000',
    },
    logoText: {
      fontSize: 21,
      color: '#000',
      textAlign: 'center',
    },
    button: {
      borderRadius: 40,
      backgroundColor: '#3A6360',
      marginBottom: 20,
    },
    buttonText: {
      color: '#fff',
      padding: 15,
      textAlign: 'center',
      fontSize: 24,
    },  
  });

  const mapStateToProps = (state) => {
    return state;
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);