import React from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Card2List} from '../../../components/Card2List/Card2List';
import {personelDGorevler} from '../../../data/Data';
import {SafeAreaView, View, Text} from 'react-native';
import FloatingButton from '../../../components/FloatingButton/FloatingButton';
import {add} from '../../../assets';

export const DPersonelGorevler = ({navigation}) => {
  return (
    <SafeAreaView>
      <Card2List text="Devam Eden Görevler" data={personelDGorevler} />

      <FloatingButton
        source={add}
        onPress={() => navigation.navigate('PersonalAddTask')}>
        {' '}
      </FloatingButton>
    </SafeAreaView>
  );
};
