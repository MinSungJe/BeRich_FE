import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabScreen from './src/Navigator/TabScreen';
import StackScreen from './src/Navigator/StackScreen';

export default function App() {
  let [isLogin, setIsLogin] = React.useState(true)

  return (
      <NavigationContainer>
        {isLogin ? <TabScreen /> : <StackScreen />}
      </NavigationContainer>
  );
}