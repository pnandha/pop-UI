import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Landing from './pages/landing'
import Register from './pages/register';
import SignIn from './pages/signIn';

const Stack = createNativeStackNavigator()

const Index = () => {
    return (
    <NavigationContainer>
       <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName="Landing">
         <Stack.Screen name="Landing" component={Landing} />
         <Stack.Screen name="Register" component={Register} />
         <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Index