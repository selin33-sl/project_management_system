import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ImageBackground,
  TextInput,
} from 'react-native';
import {background} from '../../assets';
import NavBar from '../../components/NavBar/NavBar';
import colors from '../../theme/colors/colors';
import {useRoute} from '@react-navigation/native';

const BayiAyarlar = () => {
  const route = useRoute();
  const {name} = route.params;
  const [text, onChangeText] = React.useState(name);
  const [sifre, onChangeSifre] = React.useState('123456');
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={background}
        style={{width: '100%', height: '100%'}}>
        <NavBar header={'Bayi Ayarları'}></NavBar>
        <View
          style={{
            width: '100%',
          }}>
          <View
            style={{
              width: 350,
              height: 50,
              borderRadius: 15,

              justifyContent: 'center',
              marginLeft: 20,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '400',
                color: 'white',
              }}>
              Kullanıcı Adı/Şifre Güncelleme
            </Text>
          </View>
          <View style={{marginHorizontal: 20, margin: 10}}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
          </View>
          <View style={{marginHorizontal: 20}}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeSifre}
              value={sifre}
            />
          </View>
          <TouchableOpacity
            style={{
              width: 100,
              height: 50,
              backgroundColor: colors.blue,
              borderRadius: 15,
              marginTop: 20,
              marginLeft: 270,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: '800',
                fontSize: 18,
                color: colors.dark,
                textAlign: 'center',
              }}>
              Güncelle
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.grey2,
    height: 50,
    width: '100%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
});

export default BayiAyarlar;
