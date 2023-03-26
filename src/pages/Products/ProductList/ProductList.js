import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IPSistemler} from '../../../data/Data';
import styles from './ProductList.style';

const ProductList = () => {
  const data = IPSistemler;
  const [searchText, setSearchText] = useState('');
  const filteredData = data.filter(item => item.name.includes(searchText));

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity elevation={5} style={styles.container}>
        <Image source={item.logo} style={styles.imageContainer}></Image>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
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
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          onChangeText={text => setSearchText(text)}
          placeholder="Search apps.."
          value={searchText}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={filteredData}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductList;
