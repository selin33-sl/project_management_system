import React from 'react-native';

import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {background} from '../../assets/index';
import styles from './Card1.style';

const Card1 = ({logo, name}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('UrunAltBaslik', {logo, name});
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <ImageBackground
        source={background}
        style={styles.itemContainer}
        imageStyle={{borderRadius: 15}}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">
          {name}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Card1;
