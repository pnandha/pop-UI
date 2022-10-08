import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Landing from './pages/landing'
import Register from './pages/register';
import SignIn from './pages/signIn';
import Home from './pages/home';
import store from './store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator()

const Index = () => {
    return (
    <Provider store={store}>
    <NavigationContainer>
       <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName="Landing">
         <Stack.Screen name="Landing" component={Landing} />
         <Stack.Screen name="Register" component={Register} />
         <Stack.Screen name="SignIn" component={SignIn} />
         <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  )
}

export default Index