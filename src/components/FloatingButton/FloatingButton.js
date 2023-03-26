import React from 'react-native';
import {TouchableOpacity, Image, View} from 'react-native';
import styles from './FloatingButton.style';

const FloatingButton = ({source, onPress}) => {
  return (
    <View
      style={{
        marginBottom: 45,
        position: 'absolute',
        bottom: '-0.5%',
        right: '-0.5%',
      }}>
      <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
        <Image source={source}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default FloatingButton;
