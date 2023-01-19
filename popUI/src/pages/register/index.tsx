import { useNavigation } from "@react-navigation/native"
import React from "react"
import { useState } from "react"
import { postRegister } from "../../api/auth/postRegisterUser"
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, 
KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, Button, Alert } from "react-native"
import {validateEmail, validatePassword, validatePhoneNumber, validateName} from "../../constants"
import registerStyles from "./registerStyles"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Register = () => {
    const navigation = useNavigation()
    const [name, setName]  = useState('')
    const [email, setEmail]  = useState('')
    const [mobileNumber, setMobileNumber]  = useState('')
    const [location, setLocation]  = useState('')
    const [stringLocation, setStringLocation] = useState<any | null>(null)
    const [password, setPassword]  = useState('')
    const [nameError, setNameError]  = useState(false)
    const [emailError, setEmailError]  = useState(false)
    const [mobileNumberError, setMobileNumberError]  = useState(false)
    const [passwordError, setPasswordError]  = useState(false)
    const [locationError, setLocationError]  = useState(false)
    const goToRegister = () => {
        navigation.navigate("Landing" as never, {} as never);
      }

    const registerSuccessHandler = () => {
      Alert.alert(
        "Register",
        "Succesfully Registered")
      navigation.navigate("SignIn" as never, {} as never)
    }
    const registerErrorHandeler = (error) =>{
      if(error.status === 400){
      Alert.alert(
        "Register Error",
        `Bad Request ${error.status}`)
      }
    }

    const sumbitRegister = () => {
      console.log(validateName(name))
      if(
      validateEmail(email) 
      && validatePhoneNumber(mobileNumber)
      && validatePassword(password) 
      && validateName(name)
      && location
      && stringLocation
      ){
      postRegister(
        name,
        email, 
        password, 
        mobileNumber,
        location,
        stringLocation,
        registerSuccessHandler, 
        registerErrorHandeler)
      } 
      if (!validateName(name)){
        setNameError(true)
      } else { setNameError(false) }
      if (!validatePhoneNumber(mobileNumber)){
        setMobileNumberError(true)
      } else { setMobileNumberError(false) }
      if (!validateEmail(email)){
        setEmailError(true)
      } else { setEmailError(false)}
      if (!validatePassword(password)){
        setPasswordError(true)
      } else { setPasswordError(false) }
      if (!location){
        setLocationError(true)
      } else { setLocationError(false) }
  }
    return(
      <KeyboardAvoidingView
      behavior={"padding"}
      style={registerStyles.container}
    >
        <SafeAreaView style={{ backgroundColor: '#F9F9F9' }}  />
      <TouchableOpacity onPress={() => goToRegister()} >
            <Text style={registerStyles.back}>Back</Text>
            </TouchableOpacity>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={registerStyles.inner}>
          <Text style={registerStyles.header}>Register</Text>
          <View style={registerStyles.textInput}>
                <TextInput placeholder="Full Name" spellCheck={false} onChangeText={(e) => setName(e)} style={registerStyles.enterText} />
                {nameError ? <Text style={registerStyles.errorStyle}>Please Enter a Valid Full Name</Text> : null }
          </View>
          <View style={registerStyles.textInput}>
                <TextInput placeholder="Email" spellCheck={false} onChangeText={(e) => setEmail(e)} style={registerStyles.enterText} />
                {emailError ? <Text style={registerStyles.errorStyle}>Please Enter a Valid Email</Text> : null }
          </View>
          <View style={registerStyles.textInput}>
               <TextInput placeholder="Mobile Number" spellCheck={false} onChangeText={(e) => setMobileNumber(e)} style={registerStyles.enterText} />
                {mobileNumberError ? <Text style={registerStyles.errorStyle}>Please Enter a Valid Number</Text> : null }
          </View>
          <View style={registerStyles.textInput}>
          <ScrollView horizontal contentContainerStyle={{flex: 1, width: '100%', height: '100%'}}>
               <GooglePlacesAutocomplete
                  placeholder='Search Location'
                  fetchDetails={true}
                  onPress={(data, details) => {
                  setStringLocation(details?.formatted_address)
                  setLocation(`POINT(${details?.geometry.location.lat} ${details?.geometry.location.lng})`)
                  }}
                  query={{
                  key: 'AIzaSyAokUQ1bxWYKpaq4SyLz8UsnLef_Ur-yEg',
                  language: 'en',
                  }}
                  styles={{
                     textInputContainer:{
                        marginVertical: '2%'
                     },
                     textInput: {
                        marginBottom: 0,
                        height: 40,
                        borderColor: "#FF781F",
                        borderBottomWidth: 1,
                        backgroundColor: '#F9F9F9',
                        fontSize: 14,
                     },
                     predefinedPlacesDescription: {
                     color: '#1faadb',
                     }}}
                  />
               </ScrollView>
               {locationError ? <Text style={registerStyles.errorStyle}>Please Select A Location, Does Not Have To Be Exact </Text> : null }
          </View>
          <View style={registerStyles.textInput}>
               <TextInput placeholder="Password" spellCheck={false} onChangeText={(e) => setPassword(e)} secureTextEntry={true} style={registerStyles.enterText} />
               {passwordError ? <Text style={registerStyles.errorStyle}>Please Enter More Than 6 Characters, Atleast One Capital Letter & One Number </Text> : null }
          </View>
          <TouchableOpacity
            onPress={() => sumbitRegister()}
            style={registerStyles.registerButton}
            >
            <Text style={registerStyles.registerButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    )
}

export default Register