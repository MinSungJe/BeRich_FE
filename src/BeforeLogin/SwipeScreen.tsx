import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Color } from '../resource/Color';
import WelcomeScreen from './WelcomeScreen';
import StockInfoScreen from './StockInfoScreen';
import LoginInfoScreen from './LoginInfoScreen';

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
        component={WelcomeScreen}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Notifications"
        component={StockInfoScreen}
        options={{ tabBarLabel: 'Updates' }}
      />
      <Tab.Screen
        name="Profile"
        component={LoginInfoScreen}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
}
