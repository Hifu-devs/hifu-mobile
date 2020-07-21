// Imports
import React, { Component }  from 'react';
import { reduxForm, Field } from 'redux-form';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Picker,
    TextInput,
    FormLabel,
    FormValidationMessage,
  } from 'react-native';

// App Imports
import {textInput, genderDropDown} from './inputFields';

class Form extends Component {
  render() {
    const formStates = ['asyncValidating', 'dirty', 'pristine', 'valid', 'invalid', 'submitting',
    'submitSucceeded', 'submitFailed'];

    return (
      <ScrollView style={styles.container}>
        <Field
          placeholder={'First Name'}
          name={'firstName'}
          component={textInput}
          validate={(val) => val ? undefined : 'Password field is required'}
        />
        <Field
          placeholder={'Last Name'}
          name={'lastName'}
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
        <Field
          placeholder={'Address'}
          name={'address'}
          component={textInput}
        />
        <Field
          placeholder={'Age'}
          name={'age'}
          component={textInput}
          // validate={(val) => val ? undefined : 'Password field is required'}
        />
        <Field
          placeholder={'Gender'}
          name={'gender'}
          component={genderDropDown}
          // validate={(val) => val ? undefined : 'Password field is required'}
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
  form: 'user',
  fields: ['firstName', 'lastName', 'email', 'phone', 'address', 'age', 'gender'],
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
})(Form);