import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, FlatList, ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {background} from '../../../assets/index';
import Card4 from '../../../components/Card4/Card4';
import NavBar from '../../../components/NavBar/NavBar';
import {useFetch} from '../../../hooks/useFetch/useFetch';
import colors from '../../../theme/colors/colors';
import Config from 'react-native-config';
import {Loading} from '../../../components/Loading/Loading';
import {Error} from '../../../components/Error/Error';
import styles from './YeniUrun.style';

const YeniUrun = ({navigation}) => {
  // const {loading, data, error} = useFetch('http://10.0.2.2:3000/categories1');

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://10.0.2.2:3000/categories1')
      .then(response => response.json())
      .then(data => {
        setCategories(data);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleProductSelect = id => {
    navigation.navigate('YeniUrunDetay', {id});
  };

  const renderItem = ({item}) => {
    return (
      <Card4 categories={item} onSelect={() => handleProductSelect(item.id)}>
        {console.log(item.name)}
      </Card4>
    );
  };

  // if (loading) {
  //   return <Loading />;
  // }

  // if (error) {
  //   return <Error />;
  // }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={background}
        style={{width: '100%', height: '100%'}}>
        <NavBar header={'Yeni Ürün Ekle'}></NavBar>
        <View style={{marginLeft: 20, marginTop: 10}}>
          <Text
            style={{color: colors.background, fontSize: 15, fontWeight: '600'}}>
            Lütfen ürünü eklemek istediğiniz kategoriyi seçin ;
          </Text>
        </View>

        <View style={styles.listContainer}>
          <FlatList
            data={categories}
            renderItem={renderItem}
            keyExtractor={item => item.id}></FlatList>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default YeniUrun;
