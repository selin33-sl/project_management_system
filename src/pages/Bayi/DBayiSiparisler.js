import React from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Card2List} from '../../components/Card2List/Card2List';
import {bayiDSiparisler} from '../../data/Data';

export const DBayiSiparisler = () => {
  const navigation = useNavigation();
  return <Card2List text="Tamamlanan Siparişler" data={bayiDSiparisler} />;
};
