import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Landing from './pages/landing'
import Register from './pages/register';
import SignIn from './pages/signIn';
import store from './store';
import { useDispatch } from 'react-redux';
import IndexScreen from './components/bottomNav';
import CreateProduct from './pages/createProduct';
import Search from './pages/search';
import ProductPage from './components/productCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { postSignIn } from './api/auth/postSignInUser';
import { getUserInfo } from './api/user/getUserInfo';
import { id, userName, userEmail, userNumber, userLocation, userStringLocation } from './state/userSlice';
import SeeMore from './pages/seemore';
import { Alert } from 'react-native';
import { AuthContext } from './AuthContext';
import Settings from './pages/settings';

const Stack = createNativeStackNavigator()
const Navigator = () => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const userSuccessHandler = (info: {
    userStringLocation: any;
    userLocation: any; id: any; name: any; email: any; mobileNumber: any }) => {
    dispatch(id(info.id))
    dispatch(userName(info.name))
    dispatch(userEmail(info.email))
    dispatch(userNumber(info.mobileNumber))
    dispatch(userLocation(info.userLocation))
    dispatch(userStringLocation(info.userStringLocation))
}
const userErrorHandeler = (error: any) => {
  Alert.alert(
    "Failed to retreive",
    `Error ${error} Please Try Again Later`)
    navigation.navigate("SignIn" as never, {} as never)
}

async function signInSuccessHandler(data: any){
    setIsSignedIn(true)
    await getUserInfo(userSuccessHandler, userErrorHandeler)
  }
  const signInErrorHandeler = (error: any) =>{
    setIsSignedIn(false)
    Alert.alert(
      "Failed Sign In",
      `Error ${error}`)
      navigation.navigate("SignIn" as never, {} as never);
  }

  useEffect(() => {
    async function checkLoginStatus() {
      try {
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
          const email = await AsyncStorage.getItem('email');
          const password = await AsyncStorage.getItem('password');
          postSignIn(
            email, 
            password, 
            signInSuccessHandler, 
            signInErrorHandeler)
        } else {
          setIsSignedIn(false)
        }
      } catch (error) {
        console.error(error);
      }
    }
    checkLoginStatus();
  }, []);

    return (
    <AuthContext.Provider value={{isSignedIn, 
    setSignedInFalse: () => setIsSignedIn(false),
    setSignedInTrue: () => setIsSignedIn(true)
    }}>
    <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName="Landing">
    
        { isSignedIn ? 
         <>
            <Stack.Screen name="Home" component={IndexScreen} />
            <Stack.Screen name="Add" component={CreateProduct} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Products" component={ProductPage} />
            <Stack.Screen name="SeeMore" component={SeeMore} />
            <Stack.Screen name="Settings" component={Settings} />
         </>
         :
         <>
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="SignIn" component={SignIn} />
         </> }
       
        </Stack.Navigator>      
        </AuthContext.Provider>
  )
}

export default Navigator
