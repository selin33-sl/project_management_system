import React from 'react-native';
import {Text, Image, View} from 'react-native';
import styles from './PersonelBilgiler.style';

export function PersonImage({image}) {
  return (
    <View style={styles.imageContainer}>
      <Image source={image} style={styles.image} />
    </View>
  );
}

export function PersonName({name}) {
  return (
    <View style={{margin: 10}}>
      <Text style={styles.nameText}>{name}</Text>
    </View>
  );
}

export function PersonGorev({gorev}) {
  return (
    <View>
      <Text style={styles.gorevText}>{gorev}</Text>
    </View>
  );
}
