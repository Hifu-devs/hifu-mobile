import React, { Component }  from 'react';
import { reduxForm, Field } from 'redux-form';
import {
    StyleSheet,
    ScrollView,
  } from 'react-native';

// App Imports
import {textInput, genderDropDown, ethnicityDropDown} from './InputFields';

class ContactForm extends Component {
  render() {
    const formStates = ['asyncValidating', 'dirty', 'pristine', 'valid', 'invalid', 'submitting',
    'submitSucceeded', 'submitFailed'];

    return (
      <ScrollView style={styles.container}>
        <Field
          placeholder={'Name'}
          name={'name'}
          component={textInput}
          validate={(val) => val ? undefined : 'Password field is required'}
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
          validate={(val) => val ? undefined : 'Password field is required'}
        />
      </ScrollView>         
    )
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default reduxForm({
  form: 'contact',
  validate: (values) => {
    const errors = {};
    const emailRegex = /\S+@\S+\.\S+/;
    errors.email = !values.email
      ? 'Email field is required'
      : !emailRegex.test(values.email)
      ? 'Email format is invalid'
      : undefined;
    
    return errors;
  }
})(ContactForm);