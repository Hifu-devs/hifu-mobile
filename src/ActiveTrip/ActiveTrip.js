import React, { Component }  from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Reinput from 'reinput';


  class ActiveTrip extends Component {

    constructor(props) {
        super(props)
        
      }

    render() {

        // const emailIcon = <Icon name='envelope' size={30} color="#900" />;
        return (
            <View style={styles.container}>
                <Image
                style={styles.icon}
                source={require('../../assets/Images/LightLogo.png')}
                />
                <Reinput 
                    style={styles.input}
                    color='#fff'
                    fontSize={18}
                    placeholder='Email'
                    label='Enter Email Address To Check In'
                    labelColor='#fff'
                    labelActiveTop={-30}
                    labelActiveScale={1}
                    activeColor='#fff'
                    underlineColor='#000'
                />
                {/* <Reinput error='Handles error' />
                <Reinput label='name' value='control value from outside' />
                <Reinput label='name' defaultValue='initial value' /> */}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Check in</Text>
                </TouchableOpacity>
            </View>
        )
    };
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3A6360',
    },
    button: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        borderRadius: 40,
        backgroundColor: '#fff',
        marginBottom: 20,
        width: '65%',
        position: 'absolute',
        bottom: 40,
        left: 65,
      },
      buttonText: {
        // fontFamily: 'OpenSansCondensed_300Light',
        color: '#000',
        padding: 10,
        textAlign: 'center',
        fontSize: 30,
        textTransform: 'capitalize'
      },  
      input: {
        paddingTop: 10,
        paddingBottom: 15,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
      },
      icon: {
        width: 250,
        height: 150,
        marginBottom: 20,
        marginTop: 220,
        marginLeft: 130
      },
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ActiveTrip);