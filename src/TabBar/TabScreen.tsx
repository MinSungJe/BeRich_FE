import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Stock from '../Stock/page';
import BuySell from '../Buy/page';
import UserInfo from '../User/page';
import { Color } from '../resource/Color';


const Tab = createBottomTabNavigator();

export default function TabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="주식"
      screenOptions={{
        tabBarActiveTintColor: Color.MainColor,
      }}>
      <Tab.Screen
        name="주식"
        component={Stock}
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