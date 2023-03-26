import React from 'react-native';
import {useRoute} from '@react-navigation/native';
import {
  SafeAreaView,
  Image,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {bayiBilgileri} from '../../../data/Data';
import {useNavigation} from '@react-navigation/native';
import {setting} from '../../../assets';
import {PersonImage} from '../../../components/BayiComponents/BayiPersonelBilgiler/BayiPersonelBilgiler';
import {PersonName} from '../../../components/BayiComponents/BayiPersonelBilgiler/BayiPersonelBilgiler';
import {Card} from '../../../components/BayiComponents/BayiPersonelBilgilerCard/Card';
import styles from './BayiBilgiler.style';

export const BayiBilgiler = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const {image, name, gorev} = route.params;

  const handlePress = () => {
    navigation.navigate('BayiAyarlar', {name});
  };

  const SettingIcon = () => {
    return (
      <TouchableOpacity
        onPress={handlePress}
        style={styles.settingIconContainer}>
        <View>
          <Image source={setting}></Image>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem = ({item}) => {
    return item.name == name ? <Card item={item}></Card> : null;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.navBarContainer}></View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <PersonImage image={image}></PersonImage>
          <SettingIcon></SettingIcon>
        </View>

        <PersonName name={name}></PersonName>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={bayiBilgileri}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
