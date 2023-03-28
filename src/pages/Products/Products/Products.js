import React, {useState} from 'react';
import {
  FlatList,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import colors from '../../../theme/colors/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card1 from '../../../components/Card1/Card1';
import {categories2} from '../../../data/Data';
import {useNavigation} from '@react-navigation/native';
import styles from './Products.style';

const Products = () => {
  const navigation = useNavigation();
  const data = categories2;
  const [searchText, setSearchText] = useState('');
  const filteredData = data.filter(item => item.name.includes(searchText));

  const renderItem = ({item}) => {
    return <Card1 logo={item.logo} name={item.name}></Card1>;
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
      <View style={styles.background}>
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
      </View>
    </SafeAreaView>
  );
};

export default Products;
