import React, { Component }  from 'react';
import { reduxForm, Field } from 'redux-form';
import {
    StyleSheet,
    View,
    Text
  } from 'react-native';


// App Imports
import { textInput, DateInputField } from './InputFields';

class TripForm extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sectionHeader}>
          <Text style={styles.headerText}>Trip Information:</Text>
        </View>
        <Field
          name={'startDate'}
          component={DateInputField}
        />
        <Field
          name={'endDate'}
          component={DateInputField}
        />
        <Field
          name={'activity'}
          component={textInput}
        />
         <Field
          name={'partySize'}
          component={textInput}
          keyboardType={'numeric'}
        />
         <Field
          name={'notes'}
          multiline={true}
          component={textInput}
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
    marginTop: 5
  },
  headerText: {
    fontFamily: 'OpenSansCondensed_300Light',
    fontSize: 32,
  }
});

export default reduxForm({
  form: 'route',
  validate: (values) => {
    console.log('values', values);
    let errors = {};
    errors.activity = !values.activity
      ? 'Activity field is required'
      : errors = {};
    
    return errors;
  }
})(TripForm);
