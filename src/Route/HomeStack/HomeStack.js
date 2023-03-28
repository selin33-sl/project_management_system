import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {YeniProje} from '../../pages/Home/YeniProje/YeniProje';
import Home from '../../pages/Home/Home';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}></Stack.Screen>
      <Stack.Screen
        options={{headerShown: false}}
        name="YeniProje"
        component={YeniProje}></Stack.Screen>
    </Stack.Navigator>
  );
};
