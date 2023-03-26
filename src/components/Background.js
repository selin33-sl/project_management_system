import React from 'react-native';
import {SafeAreaView, ImageBackground, StyleSheet} from 'react-native';
import colors from '../theme/colors/colors';
import {background} from '../assets/index';
import NavBar from './NavBar/NavBar';

const Background = ({header}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground source={background} style={styles.backgroundImage}>
        <NavBar header={header}></NavBar>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  navBarText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  navBarContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: '100%',
    height: 40,
    backgroundColor: colors.dark,
  },
});
export default Background;
