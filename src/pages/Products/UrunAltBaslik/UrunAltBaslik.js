import React from 'react-native';
import {Text, StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import {kameraGS1} from '../../../data/Data';
import {useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './UrunAltBaslik.style';
const UrunAltBaslik = () => {
  const route = useRoute();
  const {logo, name} = route.params;

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '400',
              color: 'black',
              marginLeft: 5,
            }}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.navBarContainer}>
        <View style={styles.navBarIconContainer}>
          <Text></Text>
          <Text style={styles.headerText}>Ürünler</Text>
          <View
            style={{
              borderBottomRightRadius: 15,
            }}>
            <Icon.Button
              name="plus"
              backgroundColor="transparent"></Icon.Button>
          </View>
        </View>
      </View>
      <View>
        <Text style={{marginTop: 20, fontSize: 20, marginHorizontal: 20}}>
          {name}
        </Text>

        <View style={styles.listContainer}>
          <FlatList
            data={kameraGS1}
            renderItem={renderItem}
            keyExtractor={item => item.id}></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UrunAltBaslik;
