import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Child from './Src/Components/Child';
import Parent from './Src/Components/Parent';
import Test from './Src/Components/Test';
import Parentfunctionalcomponent from './Src/Components/Parentfunctionalcomponent'

 function App() {
  return (
    
      <Parentfunctionalcomponent/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;