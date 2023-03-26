import React from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Card2List} from '../../components/Card2List/Card2List';
import {bayiTSiparisler} from '../../data/Data';

export const TBayiSiparisler = () => {
  const navigation = useNavigation();

  return <Card2List text="Tamamlanan Siparişler" data={bayiTSiparisler} />;
};
