import React, {useState} from 'react';
import {TextInput} from 'react-native';
import colors from '../../../theme/colors/colors';

export function AddTaskHeader() {
  const [value, onChangeText] = useState();
  return (
    <TextInput
      placeholder="Birkaç kelimelik başlık yazınız."
      placeholderTextColor="#A4A4A4"
      editable
      multiline
      numberOfLines={8}
      onChangeText={text => onChangeText(text)}
      value={value}
      style={{
        color: colors.dark,
        width: '80%',
        fontSize: 18,
        fontWeight: '600',
        padding: 10,
        backgroundColor: colors.grey2,
        marginHorizontal: 45,
        marginVertical: 15,
        borderRadius: 15,
        height: '20%',
      }}></TextInput>
  );
}
