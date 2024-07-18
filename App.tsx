import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackScreen from './src/BeforeLogin/StackScreen';
import TabScreen from './src/TabBar/TabScreen';

export default function App() {
  let [isLogin, setIsLogin] = React.useState(false)

  return (
      <NavigationContainer>
        {isLogin ? <TabScreen /> : <StackScreen />}
      </NavigationContainer>
  );
}