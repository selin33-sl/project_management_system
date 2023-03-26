import React from 'react-native';
import colors from '../../theme/colors/colors';
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {background} from '../../assets/index';
import styles from './Card3.style';

const Card3 = ({image, name, gorev}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('PersonelBilgiler', {image, name, gorev});
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <ImageBackground
        source={background}
        style={styles.itemContainer}
        imageStyle={{borderRadius: 15}}>
        <View
          style={{
            borderRadius: 70,
            backgroundColor: 'transparent',
            width: 70,
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: colors.blue,
            borderWidth: 2,
          }}>
          <Image source={image} style={styles.image} />
        </View>

        <Text style={styles.name}>{name}</Text>
        <Text style={{color: colors.blue, fontWeight: '600'}}>{gorev}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Card3;
