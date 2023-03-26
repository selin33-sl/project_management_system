import React from 'react-native';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import styles from './styles';

export function AnaCard({degisken, icon, islev, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardStyle}>
        <Image source={icon}></Image>
        <Text style={{fontWeight: '600', fontSize: 15, color: 'black'}}>
          {islev}
        </Text>
        <View>
          <Text style={styles.cardText}>{degisken}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
