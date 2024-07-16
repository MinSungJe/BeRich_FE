import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Screen_1, Screen_2, Screen_3 } from './Screen';
import { Color } from '../resource/Color';

const Tab = createMaterialTopTabNavigator();

export default function SwipeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: Color.MainColor,
        tabBarStyle: {display: 'none'}
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Screen_1}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Notifications"
        component={Screen_2}
        options={{ tabBarLabel: 'Updates' }}
      />
      <Tab.Screen
        name="Profile"
        component={Screen_3}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
}
