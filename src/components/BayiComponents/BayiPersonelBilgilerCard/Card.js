import React from 'react-native';
import {bubbles, star, setting} from '../../../assets/index';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import {AnaCard} from './Anacard';
import {useNavigation} from '@react-navigation/native';

export function Card({item}) {
  const navigation = useNavigation();

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <AnaCard islev="Puan Durumu" degisken={item.puan} icon={star}></AnaCard>
        <AnaCard
          onPress={() => {
            navigation.navigate('MaterialTopTabsBayi');
          }}
          islev="Siparişler"
          degisken={item.siparisler}
          icon={bubbles}></AnaCard>
      </View>

      <View style={{flexDirection: 'row'}}>
        <AnaCard
          islev="Satış Raporları"
          degisken={item.satisRaporlari}
          icon={star}></AnaCard>
        <AnaCard
          onPress={() => {
            Alert.alert('Adres');
          }}
          islev="Adres"
          degisken={item.adres}
          icon={star}></AnaCard>
      </View>
      <View style={{flexDirection: 'row'}}>
        <AnaCard islev="Vergi No" degisken={item.vergiNo} icon={star}></AnaCard>
        <AnaCard
          islev="İletişim Bilgisi"
          degisken={item.iletisimBilgisi}
          icon={star}></AnaCard>
      </View>
    </View>
  );
}
