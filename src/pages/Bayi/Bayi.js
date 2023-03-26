import React from 'react-native';
import {Text, SafeAreaView, View} from 'react-native';
import {bayiler} from '../../data/Data';
import {Card2List} from '../../components/Card2List/Card2List';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import {user_add} from '../../assets';

export const Bayi = ({navigation}) => {
  return (
    <SafeAreaView>
      <Card2List
        header="Bayiler"
        text="Bayi bilgilerini görmek için lütfen seçiniz."
        routePage={'BayiBilgiler'}
        data={bayiler}></Card2List>

      <FloatingButton
        source={user_add}
        onPress={() => navigation.navigate('UserAddComp')}></FloatingButton>
    </SafeAreaView>
  );
};
