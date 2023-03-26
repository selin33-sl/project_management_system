import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Bayi} from '../../pages/Bayi/Bayi';
import {BayiBilgiler} from '../../pages/Bayi/BayiBilgiler/BayiBilgiler';
import BayiAyarlar from '../../pages/Bayi/BayiAyarlar';
import {MaterialTopTabsBayi} from '../MaterialTopTab/MaterialTopTabs';
import {UserAddComp} from '../../components/UserAddComp/UserAddComp';

const Stack = createNativeStackNavigator();

export const BayiStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Bayi"
        component={Bayi}></Stack.Screen>
      <Stack.Screen
        options={{headerShown: false}}
        name="BayiBilgiler"
        component={BayiBilgiler}></Stack.Screen>
      <Stack.Screen
        options={{headerShown: false}}
        name="BayiAyarlar"
        component={BayiAyarlar}></Stack.Screen>

      <Stack.Screen
        options={{headerShown: false}}
        name="MaterialTopTabsBayi"
        component={MaterialTopTabsBayi}></Stack.Screen>
      <Stack.Screen
        options={{headerShown: false}}
        name="UserAddComp"
        component={UserAddComp}></Stack.Screen>
    </Stack.Navigator>
  );
};
