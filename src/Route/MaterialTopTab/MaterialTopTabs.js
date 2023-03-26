import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {DBayiSiparisler} from '../../pages/Bayi/DBayiSiparisler';
import {TBayiSiparisler} from '../../pages/Bayi/TBayiSiparisler';
import {DPersonelGorevler} from '../../pages/Personal/DPersonelGorevler/DPersonelGorevler';
import {TPersonelGorevler} from '../../pages/Personal/TPersonelGorevler/TPersonelGorevler';

const MaterialTopTab = createMaterialTopTabNavigator();

export const MaterialTopTabsBayi = () => {
  return (
    <MaterialTopTab.Navigator>
      <MaterialTopTab.Screen
        name="DBayiSiparisler"
        component={DBayiSiparisler}
      />
      <MaterialTopTab.Screen
        name="TBayiSiparisler"
        component={TBayiSiparisler}
      />
    </MaterialTopTab.Navigator>
  );
};

export const MaterialTopTabsPersonel = () => {
  return (
    <MaterialTopTab.Navigator>
      <MaterialTopTab.Screen
        name="DPersonelGorevler"
        component={DPersonelGorevler}
      />
      <MaterialTopTab.Screen
        name="TPersonelGorevler"
        component={TPersonelGorevler}
      />
    </MaterialTopTab.Navigator>
  );
};
