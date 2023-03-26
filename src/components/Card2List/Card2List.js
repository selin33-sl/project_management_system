import React from 'react-native';
import colors from '../../theme/colors/colors';
import {Text, View, FlatList, ImageBackground} from 'react-native';
import {background} from '../../assets/index';
import {Card2} from '../Card2/Card2';
import styles from './Card2List.style';
import NavBar from '../NavBar/NavBar';

export const Card2List = ({data, routePage, text, header}) => {
  const renderItem = ({item}) => {
    return (
      <Card2 logo={item.logo} name={item.name} routePage={routePage}></Card2>
    );
  };

  const Navbar = () => {
    return header != null ? <NavBar header={header}></NavBar> : null;
  };

  return (
    <ImageBackground
      source={background}
      style={{width: '100%', height: '100%'}}>
      <Navbar></Navbar>

      <View style={styles.headerText}>
        <Text style={{fontSize: 18, color: colors.grey1}}>{text}</Text>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          //data={departments}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}></FlatList>
      </View>
    </ImageBackground>
  );
};
