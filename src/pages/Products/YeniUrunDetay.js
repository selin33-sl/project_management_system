import React from 'react-native';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import colors from '../../theme/colors/colors';
import {background} from '../../assets';
import {save} from '../../assets';
import Config from 'react-native-config';
import {Loading} from '../../components/Loading/Loading';
import {Error} from '../../components/Error/Error';
import {useFetch} from '../../hooks/useFetch/useFetch';

const YeniUrunDetay = ({route}) => {
  const {loading, data, error} = useFetch(
    `http://10.0.2.2:3000/categories1/:${id}`,
  );

  // const {logo, name} = route.params;
  const {id} = route.params;
  console.log(id);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Text></Text>;
  }

  return (
    <ImageBackground
      source={background}
      style={{width: '100%', height: '100%', flex: 1}}>
      <View style={styles.navBarContainer}>
        <View style={styles.navBarIconContainer}>
          <Text></Text>
          <Text style={styles.headerText}>Yeni Ürün Detayları</Text>
          <TouchableOpacity>
            <Image
              source={save}
              style={{height: 30, width: 30, marginRight: 7}}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={{marginBottom: 60}}>
          <View style={styles.categoriesContainer}>
            <Image source={logo} style={{marginLeft: 7}}></Image>
            <Text style={styles.categoriesText}>{data.name}</Text>
          </View>
          <TouchableOpacity style={{alignItems: 'center', marginTop: 20}}>
            <View style={styles.selectButton}>
              <Text style={styles.selectButtonText}>Select File</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.pdfContainer}>
            <Text>Henüz bir PDF dosyası yüklemediniz.</Text>
          </View>

          <TouchableOpacity style={{alignItems: 'center', marginTop: 20}}>
            <View style={styles.selectButton}>
              <Text style={styles.selectButtonText}>Link Add</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.pdfContainer}>
            <Text>Henüz bir video linki eklemediniz.</Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  categoriesText: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.grey1,
    marginLeft: 5,
  },
  selectButtonText: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.dark,
    fontWeight: 'bold',
  },
  selectButton: {
    height: 50,
    width: 150,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    borderRadius: 15,
  },
  navBarContainer: {
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: '100%',
    height: 50,
    backgroundColor: colors.dark,
  },
  navBarIconContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  pdfContainer: {
    width: 300,
    height: 100,
    backgroundColor: colors.background,
    marginHorizontal: 60,
    marginVertical: 20,
    borderRadius: 15,
    padding: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 20,
    width: '100%',
    height: 60,
    backgroundColor: 'white',
  },
});
export default YeniUrunDetay;
