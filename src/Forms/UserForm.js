// Imports
import React, { Component }  from 'react';
import { reduxForm, Field } from 'redux-form';
import {
    StyleSheet,
    View,
    Text
  } from 'react-native';

// App Imports
import {textInput, genderDropDown, ethnicityDropDown} from './InputFields';

class UserForm extends Component {
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.formHeader}>Please Fill Out All Required Fields</Text>
        <View style={styles.sectionHeader}>
          <Text style={styles.headerText}>User Information:</Text>
        </View>
        <Field
          name={'name'}
          component={textInput}
          validate={(val) => val ? undefined : 'Name field is required'}
        />
        <Field
          name={'email'}
          component={textInput}
        />
        <Field
          name={'phone'}
          component={textInput}
        />
        <Field
          name={'address'}
          component={textInput}
        />
        <Field
          name={'age'}
          component={textInput}
        />
        <Field
          name={'satTrackerAddress'}
          component={textInput}
        />
        <Field
          name={'bloodType'}
          component={textInput}
        />
        <Field
          multiline={true}
          name={'allergies'}
          component={textInput}
        />
        <Field
          multiline={true}
          name={'medicalConditions'}
          component={textInput}
        />
         <Field
          keyboardType={'numeric'}
          name={'heightCM'}
          component={textInput}
        />
         <Field
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
    borderRadius: 18
  },
  formHeader: {
    fontFamily: 'OpenSansCondensed_300Light',
    fontSize: 26,
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30
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
  form: 'user',
  validate: (values) => {
    let errors = {};
    const emailRegex = /\S+@\S+\.\S+/;
    errors.email = !values.email
      ? 'User email field is required'
      : !emailRegex.test(values.email)
      ? 'Email format is invalid'
      : errors = {};
    
    return errors;
  }
})(UserForm);

// export default reduxForm({ form: 'user' })(UserForm);