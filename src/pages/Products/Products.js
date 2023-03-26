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

import colors from '../../theme/colors/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card1 from '../../components/Card1/Card1';
import {categories2} from '../../data/Data';
import {useNavigation} from '@react-navigation/native';

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

const styles = StyleSheet.create({
  navBarIconContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  listContainer: {
    marginBottom: 70,
    flex: 1,
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  navBarContainer: {
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: '100%',
    height: 50,
    backgroundColor: colors.dark,
  },

  background: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    flex: 1,
  },

  searchContainer: {
    width: '100%',
    padding: 16,
  },
  searchInput: {
    height: 50,
    marginTop: 10,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    padding: 8,

    shadowColor: '#cccccc',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
});

export default Products;
