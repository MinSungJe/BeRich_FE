import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Color } from '../resource/Color';
import WelcomeScreen from '../BeforeLogin/WelcomeScreen';
import StockInfoScreen from '../BeforeLogin/StockInfoScreen';
import LoginInfoScreen from '../BeforeLogin/LoginInfoScreen';
import AutoTradeInfoScreen from '../BeforeLogin/AutoTradeInfoScreen';

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
