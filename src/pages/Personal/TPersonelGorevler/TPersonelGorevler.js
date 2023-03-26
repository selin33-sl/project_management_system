import React from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Card2List} from '../../../components/Card2List/Card2List';
import {personelTGorevler} from '../../../data/Data';
import {SafeAreaView, View} from 'react-native';
import FloatingButton from '../../../components/FloatingButton/FloatingButton';
import {add} from '../../../assets';

export const TPersonelGorevler = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Card2List text="Tamamlanan Görevler" data={personelTGorevler} />

      <FloatingButton source={add}></FloatingButton>
    </SafeAreaView>
  );
};
