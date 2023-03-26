import React from 'react-native';
import {Text, View} from 'react-native';
import styles from './NavBar.style';

const NavBar = ({header}) => {
  return (
    <View style={styles.navBarContainer}>
      <Text style={styles.navBarText}>{header}</Text>
    </View>
  );
};

export default NavBar;
