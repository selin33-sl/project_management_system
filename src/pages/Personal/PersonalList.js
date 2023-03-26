import React from 'react-native';
import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';
import Card3 from '../../components/Card3/Card3';
import NavBar from '../../components/NavBar/NavBar';
import {personelList} from '../../data/Data';
import {useRoute} from '@react-navigation/native';
import colors from '../../theme/colors/colors';

const PersonelList = () => {
  const renderItem = ({item}) => {
    return (
      <Card3 image={item.image} gorev={item.gorev} name={item.name}></Card3>
    );
  };

  const route = useRoute();
  const {logo, name} = route.params;

  return (
    <SafeAreaView>
      <NavBar header={name + ' Departmanı'}></NavBar>
      <View style={styles.background}>
        <View style={styles.listContainer}>
          <FlatList
            data={personelList}
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
  listContainer: {
    marginBottom: 135,
  },
  background: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
});

export default PersonelList;
