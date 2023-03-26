import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from '../../pages/Products/Products';
import UrunAltBaslik from '../../pages/Products/UrunAltBaslik';
import YeniUrunDetay from '../../pages/Products/YeniUrunDetay';
import YeniUrun from '../../pages/Products/YeniUrun';

const Stack = createNativeStackNavigator();

export const ProductStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Products"
        component={Products}></Stack.Screen>
      <Stack.Screen
        options={{headerShown: false}}
        name="UrunAltBaslik"
        component={UrunAltBaslik}></Stack.Screen>
      <Stack.Screen
        options={{headerShown: false}}
        name="YeniUrun"
        component={YeniUrun}></Stack.Screen>
      <Stack.Screen
        options={{headerShown: false}}
        name="YeniUrunDetay"
        component={YeniUrunDetay}></Stack.Screen>
    </Stack.Navigator>
  );
};
