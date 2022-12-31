import { useNavigation } from "@react-navigation/native"
import React from "react"
import { useState } from "react"
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from "react-native"
import { useDispatch } from "react-redux"
import { postSignIn } from "../../api/auth/postSignInUser"
import { getUserInfo } from "../../api/user/getUserInfo"
import { validateEmail, validateName, validatePassword, validatePhoneNumber } from "../../constants"
import { id, userName, userEmail, userNumber } from "../../state/userSlice"
import registerStyles from "./signinStyles"

const SignIn = () => {
    const navigation = useNavigation();
    const [email, setEmail]  = useState('')
    const [mobileNumber, setMobileNumber]  = useState('')
    const [password, setPassword]  = useState('')
    const [emailError, setEmailError]  = useState(false)
    const [loginError, setLoginError]  = useState(false)
    const goToLanding= () => {
        navigation.navigate("Landing" as never, {} as never);
    }
    const dispatch = useDispatch()

    const userSuccessHandler = (info) => {
        dispatch(id(info.id))
        dispatch(userName(info.name))
        dispatch(userEmail(info.email))
        dispatch(userNumber(info.mobileNumber))
    }
    const userErrorHandeler = (error) => {
        console.log(error)
    }

    const signInSuccessHandler = () => {
        getUserInfo(userSuccessHandler, userErrorHandeler)
        navigation.navigate("Home" as never, {} as never)
      }
      const signInErrorHandeler = (error) =>{
        setLoginError(true)
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
        behavior={"padding"}
        style={registerStyles.container}
      >
          <SafeAreaView style={{ backgroundColor: '#F9F9F9' }}  />
        <TouchableOpacity
              onPress={() => goToLanding()}
              >
              <Text style={registerStyles.back} >Back</Text>
              </TouchableOpacity>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={registerStyles.inner}>
            <Text style={registerStyles.header}>Sign In</Text>
            <View style={registerStyles.textInput}>
                  <TextInput placeholder="Email" spellCheck={false} defaultValue={''} onChangeText={(e) => setEmail(e)} style={registerStyles.enterText} />
                  {emailError ? <Text style={registerStyles.errorStyle}>Please Enter a Valid Email</Text> : null }
            </View>
            <View style={registerStyles.textInput}>
               <TextInput placeholder="Password" spellCheck={false} defaultValue={''} onChangeText={(e) => setPassword(e)} secureTextEntry={true} style={registerStyles.enterText} />
               {loginError ? <Text style={registerStyles.errorStyle}>You have entered the Wrong Email or Password</Text> : null }
            </View>
            <TouchableOpacity
              onPress={() => sumbitSignIn()}
              style={registerStyles.registerButton}
              >
              <Text style={registerStyles.registerButtonText}>Submit</Text>
              </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
}

export default SignIn