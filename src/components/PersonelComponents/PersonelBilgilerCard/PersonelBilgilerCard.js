import React from 'react-native';
import {bubbles, star, setting} from '../../../assets/index';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './PersonelBilgilerCard.style';

export function Card({item}) {
  const navigation = useNavigation();

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MaterialTopTabsPersonel');
        }}>
        <View style={styles.cardStyle}>
          <Image source={bubbles} />
          <View>
            <Text style={styles.gorevlerText}>Görevler</Text>
          </View>
          <View>
            <Text style={styles.cardText}>{item.tamamlananG}</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View>
          <View style={styles.cardStyle}>
            <Image source={star} />
            <View>
              <Text style={styles.puanText}>Puan Durumu</Text>
            </View>
            <View>
              <Text style={styles.cardText}>{item.puan}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
