import React, { Component }  from 'react';
import { reduxForm, Field } from 'redux-form';
import {
    StyleSheet,
    ScrollView,
  } from 'react-native';

// App Imports
import { textInput } from './InputFields';

class TripForm extends Component {
  render() {

    return (
      <ScrollView style={styles.container}>
        <Field
          placeholder={'Start Time'}
          name={'startTime'}
          component={textInput}
        />
        <Field
          placeholder={'End Time'}
          name={'endTime'}
          component={textInput}
        //   validate={(val) => val ? undefined : 'An end time is required'}
        />
        <Field
          placeholder={'Activity'}
          name={'activity'}
          component={textInput}
        />
         <Field
          placeholder={'Party Size'}
          name={'partySize'}
          component={textInput}
          keyboardType={'numeric'}
        />
         <Field
          placeholder={'Notes'}
          name={'notes'}
          multiline={true}
          component={textInput}
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
    form: 'route',
    validate: (values) => {
      let errors = {};
      errors.startTime = !values.startTime
        ? 'A start time is required'
        : errors = {};
      
      return errors;
    }
  })(TripForm);