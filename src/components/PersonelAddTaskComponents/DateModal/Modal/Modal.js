import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native';
import styles from './Modal.style';
import colors from '../../../../theme/colors/colors';

const [selectedDate, setSelectedDate] = useState(new Date());
const [open, setOpen] = useState(false);

export const DateTextInput = () => {
  return (
    <TextInput
      placeholder="Seçilen Tarih"
      editable
      numberOfLines={1}
      maxLength={40}
      value={selectedDate.toDateString()}
      style={styles.dateTextInput}></TextInput>
  );
};

export const DateIcon = () => {
  return (
    <Icon.Button
      style={styles.dateIcon}
      backgroundColor="transparent"
      color={colors.dark}
      name="calendar"
      onPress={() => setOpen(true)}></Icon.Button>
  );
};

export const DateModal = () => {
  return (
    <DatePicker
      modal
      open={open}
      date={selectedDate}
      onConfirm={date => {
        setOpen(false);
        setSelectedDate(date);

        console.log(date);
      }}
      onDateChange={date => {
        setSelectedDate(date);
      }}
      onCancel={() => {
        setOpen(false);
      }}></DatePicker>
  );
};
