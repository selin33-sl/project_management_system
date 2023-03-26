import React, {useState} from 'react';
import {View, SafeAreaView, TextInput} from 'react-native';
import NavBar from '../../../components/NavBar/NavBar';
import {done} from '../../../assets';
import FloatingButton from '../../../components/FloatingButton/FloatingButton';
import {DateDesc} from '../../../components/PersonelAddTaskComponents/DateModal/DateDescription/DateDesc';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../../theme/colors/colors';
// import {
//   DateModal,
//   DateTextInput,
//   DateIcon,
// } from '../../../components/PersonelAddTaskComponents/DateModal/Modal/Modal';
import {AddTaskDesc} from '../../../components/PersonelAddTaskComponents/AddTaskDesc/AddTaskDesc';
import styles from './PersonalAddTask.style';
import {AddTaskHeader} from '../../../components/PersonelAddTaskComponents/AddTaskHeader/AddTaskHeader';
import {Text} from 'react-native-elements';

export const PersonalAddTask = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const DateModal = () => {
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

  const DateTextInput = () => {
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

  const DateIcon = () => {
    return (
      <Icon.Button
        style={styles.dateIcon}
        backgroundColor="transparent"
        color={colors.dark}
        name="calendar"
        onPress={() => setOpen(true)}></Icon.Button>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavBar header={'Görev Ata'}></NavBar>
      <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <AddTaskHeader></AddTaskHeader>

          <AddTaskDesc></AddTaskDesc>
          <DateModal></DateModal>

          <View
            style={{
              margin: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <DateDesc></DateDesc>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <DateTextInput></DateTextInput>
              <DateIcon></DateIcon>
            </View>
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                margin: 5,
                fontSize: 15,
                fontWeight: '500',
                color: colors.dark,
              }}>
              Görev sonunda tanımlanacak puan
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>-</Text>
              <View
                style={{
                  borderRadius: 50,
                  width: 50,
                  height: 50,
                  backgroundColor: 'yellow',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: colors.dark,
                  borderWidth: 1,
                  margin: 10,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: '600',
                  }}>
                  5
                </Text>
              </View>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>+</Text>
            </View>
          </View>
        </View>

        <FloatingButton source={done} onPress={() => {}}></FloatingButton>
      </View>
    </SafeAreaView>
  );
};
