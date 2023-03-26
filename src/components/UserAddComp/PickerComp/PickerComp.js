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
        <Picker.Item color="white" label="Saha Ekibi" value="1" />
        <Picker.Item label="Muhasebe" value="2" />
        <Picker.Item label="Dış Ticaret" value="3" />
        <Picker.Item label="Departman 4" value="4" />
        <Picker.Item
          label="departman 5"
          value="5"
          style={{backgroundColor: 'transparent'}}
        />
      </Picker>
    </View>
  );
}
