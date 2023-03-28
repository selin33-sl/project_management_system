import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {View} from 'react-native';
import styles from './PickerComp.style';

export function PickerComp() {
  const [selectedValue, setSelectedValue] = useState('Saha Ekibi');
  return (
    <View style={styles.container}>
      <Picker
        dropdownIconColor={(color = 'black')}
        style={{
          color: 'black',
        }}
        mode="dropdown"
        itemStyle={{backgroundColor: 'black'}}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item color="white" label="Yetkili Personel-1" value="1" />
        <Picker.Item label="Yetkili Personel-2" value="2" />
        <Picker.Item label="Yetkili Personel-3" value="3" />
        <Picker.Item label="Personel" value="4" />
        <Picker.Item
          label="Bayi"
          value="5"
          style={{backgroundColor: 'transparent'}}
        />
      </Picker>
    </View>
  );
}
