import { useNavigation } from "@react-navigation/native"
import React from "react"
import { useState } from "react"
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, 
KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, Button } from "react-native"
import registerStyles from "./registerStyles"
import ThoughtSvg from '../../assets/images/register/thought.svg'

const Register = () => {
    const navigation = useNavigation()
    const [name, setName]  = useState()
    const [email, setEmail]  = useState()
    const [mobileNumber, setMobileNumber]  = useState()
    const [password, setPassword]  = useState()
    const goToRegister = () => {
        navigation.navigate("Landing" as never, {} as never);
    }
    const sumbitRegister = () => {
      navigation.navigate("Landing" as never, {} as never);
  }
    return(
      <KeyboardAvoidingView
      behavior={"padding"}
      style={registerStyles.container}
    >
        <SafeAreaView style={{ backgroundColor: '#EAEAEA' }}  />
      <TouchableOpacity
            onPress={() => goToRegister()}
            >
            <Text style={registerStyles.back} >Back</Text>
            </TouchableOpacity>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={registerStyles.inner}>
          <Text style={registerStyles.header}>Register</Text>
          <TextInput placeholder="Name" style={registerStyles.textInput} />
          <TextInput placeholder="Email" style={registerStyles.textInput} />
          <TextInput placeholder="Mobile Number" style={registerStyles.textInput} />
          <TextInput placeholder="Password" secureTextEntry={true} style={registerStyles.textInput} />
          <TouchableOpacity
            onPress={() => sumbitRegister()}
            style={registerStyles.registerButton}
            >
            <Text style={registerStyles.registerButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    // </View>
    )
}

export default Register