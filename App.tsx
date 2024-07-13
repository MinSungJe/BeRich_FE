import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabScreen from './src/TabBar/TabComponents';

export default function App() {
  return (
    <NavigationContainer>
      <TabScreen />
    </NavigationContainer>
  );
}