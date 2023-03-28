import React, {useState} from 'react';
import {
  FlatList,
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {InputContainer} from '../../../components/InputContainer/InputContainer';
import styles from '../../../components/InputContainer/InputContainer.style';
import {phone, user, done, location} from '../../../assets';
import colors from '../../../theme/colors/colors';
import NavBar from '../../../components/NavBar/NavBar';
import FloatingButton from '../../../components/FloatingButton/FloatingButton';

export const YeniProje = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavBar header={'Yeni Proje'} />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            height: '85%',
            width: '85%',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 10,
            borderRadius: 5,
          }}>
          <View style={{paddingBottom: 40}}>
            <Text
              style={{
                fontStyle: 'italic',
                fontWeight: '300',
                color: colors.dark,
                fontSize: 30,
              }}>
              Müşteri Bilgileri
            </Text>
          </View>
          <View style={styles.inputContainer1}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#BEBCBC"
              placeholder="Ad Soyad"
              autoCapitalize="none"
            />
            <View style={styles.iconContainer}>
              <Image source={user} style={styles.imageStyle} />
            </View>
          </View>
          <View style={styles.inputContainer2}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#BEBCBC"
              placeholder="Telefon"
              autoCapitalize="none"
            />
            <View style={styles.iconContainer}>
              <Image source={phone} style={styles.imageStyle} />
            </View>
          </View>
          <View style={styles.inputContainer3}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#BEBCBC"
              placeholder="Adres"
              autoCapitalize="none"
            />
            <View style={styles.iconContainer}>
              <Image source={location} style={styles.imageStyle} />
            </View>
          </View>
        </View>
      </View>
      <FloatingButton source={done}></FloatingButton>
    </SafeAreaView>
  );
};
