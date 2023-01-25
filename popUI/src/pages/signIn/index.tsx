import { useNavigation } from "@react-navigation/native"
import React, { useContext } from "react"
import { useState } from "react"
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert, ScrollView } from "react-native"
import { useDispatch } from "react-redux"
import { postSignIn } from "../../api/auth/postSignInUser"
import { getUserInfo } from "../../api/user/getUserInfo"
import { validateEmail, validateName, validatePassword, validatePhoneNumber } from "../../constants"
import { id, userName, userEmail, userNumber, userLocation, userStringLocation } from "../../state/userSlice"
import registerStyles from "./signinStyles"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { CommonActions } from '@react-navigation/native';
import { AuthContext } from "../../AuthContext"

const SignIn = () => {
    const navigation = useNavigation();
    const [email, setEmail]  = useState('')
    const [mobileNumber, setMobileNumber]  = useState('')
    const [password, setPassword]  = useState('')
    const [emailError, setEmailError]  = useState(false)
    const [loginError, setLoginError]  = useState(false)
    const { setSignedInTrue } = useContext(AuthContext)
    const goToLanding= () => {
        navigation.navigate("Landing" as never, {} as never);
    }
    const dispatch = useDispatch()

    const userSuccessHandler = (info: {
      userStringLocation: any, userLocation: any, id: any; name: any; email: any; mobileNumber: any }) => {
        dispatch(id(info.id))
        dispatch(userName(info.name))
        dispatch(userEmail(info.email))
        dispatch(userNumber(info.mobileNumber))
        dispatch(userLocation(info.userLocation))
        dispatch(userStringLocation(info.userStringLocation))
    }
    const userErrorHandeler = (error: any) => {
        console.log(error)
    }

    async function signInSuccessHandler(data: any){
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('password', password);
        await AsyncStorage.setItem('isLoggedIn', 'true')
        getUserInfo(userSuccessHandler, userErrorHandeler)
        setSignedInTrue()
      }
      
      const signInErrorHandeler = (error: any) =>{
        Alert.alert('Failed Sign in', error)
      }
  

    const sumbitSignIn = () => {
        setLoginError(false)
        if(
        validateEmail(email) 
        ){
        postSignIn(
          email, 
          password, 
          signInSuccessHandler, 
          signInErrorHandeler)
        } 
        if (!validateEmail(email)){
          setEmailError(true)
        } else { setEmailError(false)}
    }

    return(
        <KeyboardAvoidingView
        style={registerStyles.container}
      >
          <SafeAreaView style={{ backgroundColor: '#F9F9F9' }}  />
        <TouchableOpacity
              onPress={() => goToLanding()}
              >
              <Text style={registerStyles.back} >Back</Text>
              </TouchableOpacity>
        <View style={registerStyles.container}>
        <ScrollView 
        style={{ marginBottom: "5%" }}
        showsVerticalScrollIndicator={false}
        >
          <View style={registerStyles.scrollContainer}>
            <Text style={registerStyles.header}>Sign In</Text>
            <View style={registerStyles.textInput}>
                  <TextInput placeholder="Email" keyboardType={'email-address'} returnKeyType={'done'} spellCheck={false} defaultValue={''} onChangeText={(e) => setEmail(e)} style={registerStyles.enterText} />
                  {emailError ? <Text style={registerStyles.errorStyle}>Please Enter a Valid Email</Text> : null }
            </View>
            <View style={registerStyles.textInput}>
               <TextInput placeholder="Password" returnKeyType={'done'} spellCheck={false} defaultValue={''} onChangeText={(e) => setPassword(e)} secureTextEntry={true} style={registerStyles.enterText} />
               {loginError ? <Text style={registerStyles.errorStyle}>You have entered the Wrong Email or Password</Text> : null }
            </View>
            <TouchableOpacity
              onPress={() => sumbitSignIn()}
              style={registerStyles.registerButton}
              >
              <Text style={registerStyles.registerButtonText}>Submit</Text>
              </TouchableOpacity>
              </View>
              </ScrollView>
          </View>
      </KeyboardAvoidingView>
    )
}

export default SignIn