import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabScreen from './src/TabBar/TabScreen';
import SwipeScreen from './src/BeforeLogin/SwipeScreen';

export default function App() {
  let [isLogin, setIsLogin] = React.useState(false)

  return (
      <NavigationContainer>
        {isLogin ? <TabScreen /> : <SwipeScreen />}
      </NavigationContainer>
  );
}