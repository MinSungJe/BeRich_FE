import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StockInfo from '../stock/page';
import BuySell from '../buy/page';
import UserInfo from '../user/page';


const Tab = createBottomTabNavigator();

export default function TabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="주식"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="주식"
        component={StockInfo}
        options={{
          tabBarLabel: '주식',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons  name="chart-line" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="매수/매도"
        component={BuySell}
        options={{
          tabBarLabel: '매수/매도',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons  name="hand-coin" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="회원정보"
        component={UserInfo}
        options={{
          tabBarLabel: '회원정보',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}