import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Color } from '../resource/Color';
import WelcomeScreen from './WelcomeScreen';
import StockInfoScreen from './StockInfoScreen';
import LoginInfoScreen from './LoginInfoScreen';
import AutoTradeInfoScreen from './AutoTradeInfoScreen';

const Tab = createMaterialTopTabNavigator();

export default function SwipeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        tabBarActiveTintColor: Color.MainColor,
        tabBarStyle: {display: 'none'}
      }}
    >
      <Tab.Screen
        name="Welcome"
        component={WelcomeScreen}
      />
      <Tab.Screen
        name="StockInfo"
        component={StockInfoScreen}
      />
      <Tab.Screen
        name="AutoTradeInfo"
        component={AutoTradeInfoScreen}
      />
      <Tab.Screen
        name="LoginInfo"
        component={LoginInfoScreen}
      />
    </Tab.Navigator>
  );
}
