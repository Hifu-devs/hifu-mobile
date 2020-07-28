import React, { Component }  from 'react';
import { reduxForm, Field } from 'redux-form';
import {
    StyleSheet,
    View,
    Text
  } from 'react-native';

// App Imports
import { textInput } from './InputFields';

class ContactForm extends Component {
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.sectionHeader}>
          <Text style={styles.headerText}>Emergency Contact:</Text>
        </View>
        <Field
          placeholder={'Name'}
          name={'name'}
          component={textInput}
        />
        <Field
          placeholder={'email'}
          name={'email'}
          component={textInput}
        />
        <Field
          placeholder={'Phone #'}
          name={'phone'}
          component={textInput}
          keyboardType={'numeric'}
          validate={(val) => val ? undefined : 'Contact phone number is required'}
        />
      </View>         
    )
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 18
  },
  sectionHeader: {
    borderBottomWidth: 8,
    borderBottomColor: '#3A6360',
    width: '100%',
    marginBottom: 20,
  },
  headerText: {
    fontFamily: 'OpenSansCondensed_300Light',
    fontSize: 32,
  }
});

export default reduxForm({
  form: 'contact',
  validate: (values) => {
    let errors = {};
    const emailRegex = /\S+@\S+\.\S+/;
    errors.email = !values.email
      ? 'Contact email field is required'
      : !emailRegex.test(values.email)
      ? 'Email format is invalid'
      : errors = {};
    
    return errors;
  }
})(ContactForm);
