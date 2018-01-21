import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {showDateTimePicker, hideDateTimePicker} from '../../actions';
import DateTimePicker from 'react-native-modal-datetime-picker';




onshowDateTimePicker = () => {
  this.props.showDateTimePicker();
};

onhideDateTimePicker = () => {
  this.props.hideDateTimePicker();
};

handleDatePicked = (date) => {
  console.log('A date has been picked: ', date);
  this.onhideDateTimePicker();
};

const Date = (isDateTimePickerVisible) => {

    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={this.onshowDateTimePicker.bind(this)}>
          <Text>Show DatePicker</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.props.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked.bind(this)}
          onCancel={this.onhideDateTimePicker.bind(this)}


        />
      </View>
    );
}


export {Date};
