import React from 'react-native';
import {Text, StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import {kameraGS1} from '../../data/Data';
import {useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../theme/colors/colors';

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

const styles = StyleSheet.create({
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  navBarIconContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginLeft: 8,
  },
  navBarContainer: {
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: '100%',
    height: 50,
    backgroundColor: colors.dark,
  },
  container: {
    flexDirection: 'row',

    alignItems: 'center',
    borderRadius: 15,
    //justifyContent: 'space-around',
    marginTop: 10,

    width: '100%',
    height: 60,
    backgroundColor: 'white',
  },
  listContainer: {
    marginHorizontal: 20,
    marginBottom: 130,
    marginTop: 10,
  },
  logo: {
    marginTop: 10,
    borderRadius: 50,
    height: 50,
    width: 50,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
