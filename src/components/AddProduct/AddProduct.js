import React from 'react-native';
import {Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './AddProduct.style';

const AddProduct = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.navBarContainer}>
        <View style={styles.navBarIconContainer}>
          <Text></Text>
          <Text style={styles.headerText}>Ürünler</Text>
          <TouchableOpacity>
            <Icon.Button
              onPress={() => navigation.navigate('YeniUrun')}
              name="plus"
              backgroundColor="transparent"></Icon.Button>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddProduct;
