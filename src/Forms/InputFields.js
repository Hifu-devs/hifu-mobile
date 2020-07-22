import React from 'react';
import { 
    TextInput, 
    View, 
    Text,
    Picker, 
} from 'react-native';

export function textInput(props) {
  const { input, ...inputProps } = props;

  return (
    <View>
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        />
    </View>
  );
}

export function genderDropDown({ input: { onChange, value, ...inputProps }, children, ...pickerProps }){
  return(
    <Picker
      selectedValue={ value }
      onValueChange={ value => onChange(value) }
      { ...inputProps }
      { ...pickerProps }
    >
      <Picker.Item label='Gender' value='' />
      <Picker.Item label='Male' value='Male' />
      <Picker.Item label='Female' value='Female' />
      <Picker.Item label='Non Binary' value='Non Binary' />
    </Picker>
  );
}

export function ethnicityDropDown({ input: { onChange, value, ...inputProps }, children, ...pickerProps }){
  return(
    <Picker
      selectedValue={ value }
      onValueChange={ value => onChange(value) }
      { ...inputProps }
      { ...pickerProps }
      style={{backgroundColor: '#fff'}}
      mode={Picker.MODE_DROPDOWN}
    >
        <Picker.Item label='Ethnicity' value='' />
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
  );
}