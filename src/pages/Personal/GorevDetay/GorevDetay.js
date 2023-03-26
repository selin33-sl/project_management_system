import React from 'react';
import {View, SafeAreaView, TextInput, Text} from 'react-native';
import colors from '../../../theme/colors/colors';
import styles from './GorevDetay.style';

export const GorevDetay = () => {
  const GorevBasligi = () => {
    return (
      <View style={styles.gorevBasligiCont}>
        <View style={styles.gorevPuanCont}>
          <Text style={styles.gorevPuanText}>5</Text>
        </View>
        <View style={styles.gorevBasligiTextCont}>
          <Text style={styles.gorevBasligiText}>Görev Başlığı</Text>
        </View>
      </View>
    );
  };

  const GorevlendirilenPersoneller = () => {
    return (
      <View style={{height: '20%'}}>
        <View style={styles.gorevlendirilenPHeaderTextCont}>
          <Text style={styles.gorevlendirilenPHeaderText}>
            Görevlendirilen personeller;
          </Text>
        </View>
        <View style={styles.gorevlendirilenPTextCont}>
          <Text style={styles.gorevlendirilenPText}>
            Selin ÇALIŞKAN, Ayşenur KÖYCÜ
          </Text>
        </View>
      </View>
    );
  };

  const GorevTanimi = () => {
    return (
      <View style={styles.gorevTanimiCont}>
        <View style={styles.gorevTanimiHeaderTextCont}>
          <Text style={styles.gorevTanimiHeaderText}>Görev Tanımı</Text>
        </View>

        <View style={styles.gorevTanimiTextCont}>
          <Text style={styles.gorevTanimiText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            feugiat imperdiet lacus, a pulvinar ante sodales nec. Maecenas nec
            accumsan sapien. Sed pellentesque nisi ut velit facilisis fermentum.
            Donec efficitur, diam nec venenatis tempor, libero orci maximus
            augue, eget feugiat magna leo quis arcu. Nulla pellentesque nibh et
            mauris aliquet bibendum. In vulputate risus mi, id aliquet nunc
            faucibus nec.
          </Text>
        </View>
      </View>
    );
  };

  const GorevBitisTarihi = () => {
    return (
      <View style={styles.gorevBitisContainer}>
        <View style={styles.gorevBitisHeaderCont}>
          <Text style={styles.gorevBitisHeaderText}>Görev Bitiş Tarihi</Text>
        </View>
        <View style={styles.gorevBitisTarihCont}>
          <Text style={styles.gorevBitisTarihText}></Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <GorevBasligi />
      <GorevlendirilenPersoneller />
      <GorevTanimi />
      <GorevBitisTarihi />
    </View>
  );
};
