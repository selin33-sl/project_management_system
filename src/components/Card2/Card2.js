import React from 'react-native';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './Card2.style';

export const Card2 = ({logo, name, routePage}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(routePage, {logo, name});
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Image source={logo} style={{marginLeft: 7}}></Image>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '400',
            color: 'black',
            marginLeft: 5,
          }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
