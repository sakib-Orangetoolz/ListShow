import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../../features/random/Home';
import Details from '../../features/random/Details';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}  options={{headerShown:false}}/>
      <Stack.Screen name="Profile" component={Details} />
    </Stack.Navigator>
  )
}

export default AppStack

