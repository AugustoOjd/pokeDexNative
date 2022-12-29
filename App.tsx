import 'react-native-gesture-handler';

import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation/Navigation';
import Tabs from './src/Navigation/Tabs';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tabs/>
        {/* <Navigation/> */}
      </NavigationContainer>
    </>
  )
}

export default App
