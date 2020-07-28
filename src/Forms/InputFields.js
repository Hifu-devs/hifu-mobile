import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { 
    Text,
    View, 
    Picker, 
    Button,
    StyleSheet
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Reinput from 'reinput';

export class DateInputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false
    };
  }
 
  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };
 
  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };
 
  handleDatePicked = (date) => {
    this.props.input.onChange(date);
    this.hideDateTimePicker();
  };
 
  render() {
    return (
      <>
        <Button title={this.props.input.name} onPress={this.showDateTimePicker} />
        <DateTimePicker
          locale='en_GB'
          mode='datetime'
          value={new Date()}
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
      </>
    );
  }
}

export function textInput(props) {
  // console.log('props', props);
  const { meta, input, ...inputProps } = props;

  return (
    <View>
      <Reinput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        // value={input.value}
        label={input.name}
        error={meta.error}
        activeColor='#3A6360'
        />
    </View>
  );
}

export function genderDropDown({ input: { onChange, value, ...inputProps }, children, ...pickerProps }){
  return(
    <View>
      <Text style={styles.inputHeader}>Gender</Text>
      <Picker
        selectedValue={ value }
        onValueChange={ value => onChange(value) }
        { ...inputProps }
        { ...pickerProps }
      >
        <Picker.Item label='Male' value='Male' />
        <Picker.Item label='Female' value='Female' />
        <Picker.Item label='Non Binary' value='Non Binary' />
      </Picker>
    </View>
  );
}

export function ethnicityDropDown({ input: { onChange, value, ...inputProps }, children, ...pickerProps }){
  return(
    <View>
      <Text style={styles.inputHeader}>Ethnicity</Text>
      <Picker
        style={styles.picker}
        selectedValue={ value }
        onValueChange={ value => onChange(value) }
        { ...inputProps }
        { ...pickerProps }
      >
          <Picker.Item 
          label='Hispanic or Latino' 
          value='Hispanic or Latino' 
          />
          <Picker.Item 
          label='American Indian or Alaska Native ' 
          value='American Indian or Alaska Native ' 
          />
          <Picker.Item 
          label='Black or African American' 
          value='Black or African American' 
          />
          <Picker.Item 
          label='Native Hawaiian or Other Pacific Islander' 
          value='Native Hawaiian or Other Pacific Islander ' 
          />
          <Picker.Item label='White' value='White' />
          <Picker.Item label='Other' value='Other' />
      </Picker>
    </View>
  );
}


const styles = StyleSheet.create({
  inputHeader: {
    fontFamily: 'OpenSansCondensed_300Light',
    fontSize: 32,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
    position: 'absolute',
    backgroundColor: '#3A6360',
    width: '100%'
  },
  dateTime: {

  }
});