// Imports
import React, { Component }  from 'react';
import { reduxForm, Field } from 'redux-form';
import {
    StyleSheet,
    ScrollView,
    View,
  } from 'react-native';

// App Imports
import {textInput, genderDropDown, ethnicityDropDown} from './InputFields';

class UserForm extends Component {
  render() {
    const formStates = ['asyncValidating', 'dirty', 'pristine', 'valid', 'invalid', 'submitting',
    'submitSucceeded', 'submitFailed'];

    return (
      <View style={styles.container}>
        <Field
          placeholder={'Name'}
          name={'name'}
          component={textInput}
          validate={(val) => val ? undefined : 'Name field is required'}
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
        />
        <Field
          placeholder={'SatTracker Address'}
          name={'satTrackerAddress'}
          component={textInput}
        />
        <Field
          placeholder={'Blood Type'}
          name={'bloodType'}
          component={textInput}
        />
        <Field
          placeholder={'Allergies'}
          multiline={true}
          name={'allergies'}
          component={textInput}
        />
        <Field
          placeholder={'Medical Conditions'}
          multiline={true}
          name={'medicalConditions'}
          component={textInput}
        />
         <Field
          placeholder={'Height(CM):'}
          keyboardType={'numeric'}
          name={'heightCM'}
          component={textInput}
        />
         <Field
          placeholder={'Weight(KG):'}
          keyboardType={'numeric'}
          name={'weightKG'}
          component={textInput}
        />
        <Field
          name={'gender'}
          component={ genderDropDown }
          mode="dropdown"
        />
        <Field
          name={'ethnicity'}
          component={ethnicityDropDown}
          mode="dropdown"
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
  },
});

export default reduxForm({
  form: 'user',
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
})(UserForm);

// export default reduxForm({ form: 'user' })(UserForm);