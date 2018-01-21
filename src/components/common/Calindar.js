import React, { Component } from 'react';
import { View , Text, StyleSheet } from 'react-native';
import Calendar from 'react-native-calendar-select';
import {Button,} from './Button';



const Calindar = ({ }) => {


    return (
      <View>
        <Button title="Open Calendar"  onPress={this.openCalendar}/>
          <Calendar
            i18n="en"
            ref={(calendar) => {this.calendar = calendar;}}
            customI18n={customI18n}
            color={color}
            format='YYYYMMDD'
            minDate='20170510'
            maxDate='20180312'
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onConfirm={this.confirmDate}/>

      </View>

    );
  }

export { Calindar };
