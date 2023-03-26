import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PersonelList from '../../pages/Personal/PersonalList';
import {Personal} from '../../pages/Personal/Personal';
import {PersonelBilgiler} from '../../pages/Personal/PersonelBilgiler/PersonelBilgiler';
import {MaterialTopTabsPersonel} from '../MaterialTopTab/MaterialTopTabs';
import {PersonalAddTask} from '../../pages/Personal/PersonalAddTask/PersonalAddTask';
import {UserAdd} from '../../pages/Personal/UserAdd/UserAdd';

const Stack = createNativeStackNavigator();

export const PersonelStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Personal"
        component={Personal}></Stack.Screen>
      <Stack.Screen
        options={{headerShown: false}}
        name="PersonelList"
        component={PersonelList}></Stack.Screen>
      <Stack.Screen
        options={{headerShown: false}}
        name="PersonelBilgiler"
        component={PersonelBilgiler}></Stack.Screen>
      <Stack.Screen
        options={{headerShown: false}}
        name="MaterialTopTabsPersonel"
        component={MaterialTopTabsPersonel}></Stack.Screen>
      <Stack.Screen
        options={{headerShown: false}}
        name="PersonalAddTask"
        component={PersonalAddTask}></Stack.Screen>
      <Stack.Screen
        options={{headerShown: false}}
        name="UserAdd"
        component={UserAdd}></Stack.Screen>
    </Stack.Navigator>
  );
};
