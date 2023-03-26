import React from 'react-native';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import colors from '../../../theme/colors/colors';
import {personelBilgileri} from '../../../data/Data';
import {bubbles, star} from '../../../assets';
import {PersonGorev} from '../../../components/PersonelComponents/PersonelBilgiler/PersonelBilgiler';
import {PersonImage} from '../../../components/PersonelComponents/PersonelBilgiler/PersonelBilgiler';
import {PersonName} from '../../../components/PersonelComponents/PersonelBilgiler/PersonelBilgiler';
import {Card} from '../../../components/PersonelComponents/PersonelBilgilerCard/PersonelBilgilerCard';
import styles from './PersonelBilgiler.style';

export const PersonelBilgiler = () => {
  const route = useRoute();
  const {image, name, gorev} = route.params;

  const renderItem = ({item}) => {
    return item.name == name ? <Card item={item}></Card> : null;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.navBarContainer}></View>
        <PersonImage image={image}></PersonImage>
        <PersonName name={name}></PersonName>
        <PersonGorev gorev={gorev}></PersonGorev>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={personelBilgileri}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
