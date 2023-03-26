import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import styles from './BottomTab.style';
import {personal, urun, home, bayi, mobile} from '../../assets/index';
import Home from '../../pages/Home/Home';
import {Mobile} from '../../pages/Mobile/Mobile';
import {PersonelStack} from '../PersonelStack/PersonelStack';
import {ProductStack} from '../ProductStack/ProductStack';
import {BayiStack} from '../BayiStack/BayiStack';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  const CustomButton = props => {
    return (
      <TouchableOpacity
        onPress={() => props.onPress()}
        style={styles.customButton}>
        <Image source={home}></Image>
      </TouchableOpacity>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions} initialRouteName="Home">
        <Tab.Screen
          name="PersonelStack"
          component={PersonelStack}
          styles={styles.icon}
          options={{
            tabBarIcon: () => <Image source={personal}></Image>,
          }}></Tab.Screen>

        <Tab.Screen
          name="ProductStack"
          component={ProductStack}
          styles={styles.icon}
          options={{
            tabBarIcon: () => <Image source={urun}></Image>,
          }}></Tab.Screen>

        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarButton: props => <CustomButton {...props}></CustomButton>,
          }}></Tab.Screen>
        <Tab.Screen
          name="BayiStack"
          component={BayiStack}
          styles={styles.icon}
          options={{
            tabBarIcon: () => <Image source={bayi}></Image>,
          }}></Tab.Screen>
        <Tab.Screen
          name="Mobile"
          component={Mobile}
          styles={styles.icon}
          options={{
            tabBarIcon: () => <Image source={mobile}></Image>,
          }}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const screenOptions = {
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: styles.tabBarStyle,
};
