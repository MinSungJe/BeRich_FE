import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabScreen from './src/navigator/TabScreen';
import StackScreen from './src/navigator/StackScreen';

export default function App() {
  let [isLogin, setIsLogin] = React.useState(true)

  return (
      <NavigationContainer>
        {isLogin ? <TabScreen /> : <StackScreen />}
      </NavigationContainer>
  );
}