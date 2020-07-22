import React, { Component }  from 'react';
import { reduxForm, Field } from 'redux-form';
import {
    StyleSheet,
    ScrollView,
  } from 'react-native';

// App Imports
import { textInput } from './InputFields';

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
    let errors = {};
    const emailRegex = /\S+@\S+\.\S+/;
    errors.email = !values.email
      ? 'Email field is required'
      : !emailRegex.test(values.email)
      ? 'Email format is invalid'
      : errors = {};
    
    return errors;
  }
})(ContactForm);

// export default reduxForm({ form: 'contact' })(ContactForm);