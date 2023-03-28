import React from 'react';
import {View, TextInput, Image} from 'react-native';
import styles from './InputContainer.style';

export function InputContainer({placeholder, secureTextEntry, image}) {
  return (
    <View>
      <View style={styles.inputContainer1}>
        <View style={styles.iconContainer}>
          <Image source={image} style={styles.imageStyle} />
        </View>

        <TextInput
          secureTextEntry={secureTextEntry}
          style={styles.input}
          placeholderTextColor="black"
          placeholder={placeholder}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
}
