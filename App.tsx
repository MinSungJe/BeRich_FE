import { Input } from '@rneui/base';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <Text>기본 앱</Text>
      <Input
      placeholder='BASIC INPUT'
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
