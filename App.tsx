import { Input, Text } from '@rneui/base';
import { ThemeProvider } from '@rneui/themed';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { mainTheme } from './src/resource/style/MainTheme';

function App(): React.JSX.Element {

  return (
    
    <ThemeProvider theme={mainTheme}>

    <SafeAreaView>
      <Text>기본 앱 화면입니다</Text>
      <Input
      placeholder='BASIC INPUT'
    />
    </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({

});

export default App;
