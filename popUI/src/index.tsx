import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import store from './store';
import { Provider } from 'react-redux';
import SplashScreen from "react-native-splash-screen"
import Navigator from './navigator';

const Stack = createNativeStackNavigator()

SplashScreen.hide()

const Index = () => {
    return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName="Navigator">
      <Stack.Screen name="Navigator" component={Navigator}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default Index