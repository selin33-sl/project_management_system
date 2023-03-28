import React from 'react-native';
import {SafeAreaView, View, Text} from 'react-native';
import Background from '../../components/Background';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import {add} from '../../assets';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Background header={'Anasayfa'}></Background>

      <FloatingButton
        source={add}
        onPress={() => navigation.navigate('YeniProje')}></FloatingButton>
    </SafeAreaView>
  );
};

export default Home;
