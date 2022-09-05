import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Landing from './pages/landing'

const Stack = createNativeStackNavigator()

const Index = () => {
    return (
    <NavigationContainer>
       <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName="Landing">
         <Stack.Screen name="Landing" component={Landing} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Index