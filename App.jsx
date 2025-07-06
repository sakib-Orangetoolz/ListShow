
import React from 'react'
import {StatusBar} from "react-native"
import AppStack from './src/core/navigation/Stack'
import { NavigationContainer } from '@react-navigation/native'
import { store } from './src/core/rtk/store'
import { Provider } from 'react-redux'

const App = () => {
  return (

    <NavigationContainer>
      <StatusBar
      backgroundColor="#FFFFFF" 
      barStyle="dark-content"   
    />
      <Provider store={store}>
        <AppStack />
      </Provider>
    </NavigationContainer>

  )
}

export default App

