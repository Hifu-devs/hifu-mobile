import React from 'react';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';
import { LinearGradient } from 'expo-linear-gradient';
import {
  useFonts,
  OpenSansCondensed_300Light,
} from '@expo-google-fonts/open-sans-condensed';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
  } from 'react-native';


export default LandingPage = ({ navigation }) => {

  const handleEnterSite = () => {
    navigation.navigate('Info'); 
  }; 

  const [fontsLoaded] = useFonts({
    OpenSansCondensed_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/Images/mountains.png')}
          style={styles.backgroundImg}
        >
          <LinearGradient
            colors={['rgba(196, 196, 196, 0)', 'rgba(196, 196, 196, 0.87)', 'rgba(196, 196, 196, 0)']}
            style={styles.linearGradient}
          >
            <View style={styles.logoHeader}>
              <Image
                style={styles.icon}
                source={require('../../assets/Images/DarkLogo.png')}
              />
            </View>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImg: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 35,
    justifyContent: 'center',
  },
  logoHeader: {
    marginTop: 30,
  },
  logoText: {
    fontFamily: 'OpenSansCondensed_300Light',
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
  },
  button: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    borderRadius: 40,
    backgroundColor: '#3A6360',
    marginBottom: 20,
    width: '65%',
    position: 'absolute',
    bottom: 30,
    left: '30%',
  },
  buttonText: {
    fontFamily: 'OpenSansCondensed_300Light',
    color: '#fff',
    padding: 10,
    textAlign: 'center',
    fontSize: 30,
  },  
  icon: {
    width: 250,
    height: 150,
    // marginBottom: 20,
    marginLeft: 65
    },
});

