import React from 'react-native';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './Card4.style';

const Card4 = ({categories, onSelect}) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '400',
            color: 'black',
            marginLeft: 5,
          }}>
          {categories.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card4;
