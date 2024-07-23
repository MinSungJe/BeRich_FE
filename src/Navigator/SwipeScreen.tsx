import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Color } from '../resource/Color';
import WelcomeScreen from '../Pages/BeforeLogin/WelcomeScreen';
import StockInfoScreen from '../Pages/BeforeLogin/StockInfoScreen';
import LoginInfoScreen from '../Pages/BeforeLogin/LoginInfoScreen';
import AutoTradeInfoScreen from '../Pages/BeforeLogin/AutoTradeInfoScreen';

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
