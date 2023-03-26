import React from 'react-native';
import {Text, Image, View} from 'react-native';
import styles from './BayiPersonelBilgiler.style';

export function PersonImage({image}) {
  return (
    <View style={styles.imageContainer}>
      <Image source={image} />
    </View>
  );
}
export function PersonName({name}) {
  return (
    <View style={styles.personNameContainer}>
      <Text style={styles.personName}>{name}</Text>
    </View>
  );
}
