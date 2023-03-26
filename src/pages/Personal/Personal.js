import React from 'react-native';
import {SafeAreaView, View} from 'react-native';
import {Card2List} from '../../components/Card2List/Card2List';
import {departments} from '../../data/Data';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import {user_add} from '../../assets';

export const Personal = ({navigation}) => {
  return (
    <SafeAreaView>
      <Card2List
        routePage={'PersonelList'}
        text="Departmanlar"
        header="Personellerim"
        data={departments}
        onPress={() => {
          console.log('hellooo may firendss');
        }}></Card2List>

      <FloatingButton
        source={user_add}
        onPress={() => navigation.navigate('UserAdd')}></FloatingButton>
    </SafeAreaView>
  );
};
