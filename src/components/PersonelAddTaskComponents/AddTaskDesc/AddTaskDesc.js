import React, {useState} from 'react';
import {TextInput} from 'react-native';
import colors from '../../../theme/colors/colors';

export function AddTaskDesc() {
  const [value, onChangeText] = useState();
  return (
    <TextInput
      placeholder="Lütfen görevlendirmek istediğiniz iş tanımını açıklayınız."
      placeholderTextColor="#A4A4A4"
      editable
      multiline
      numberOfLines={8}
      onChangeText={text => onChangeText(text)}
      value={value}
      style={{
        width: '80%',
        color: colors.dark,
        padding: 10,
        backgroundColor: colors.grey2,
        marginHorizontal: 45,
        borderRadius: 15,
        height: '40%',
      }}></TextInput>
  );
}
