import { useNavigation } from "@react-navigation/native"
import React from "react"
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from "react-native"
import registerStyles from "./signinStyles"

const SignIn = () => {
    const navigation = useNavigation();
    const goToRegister = () => {
        navigation.navigate("Landing" as never, {} as never);
    }
    return(
        <View>
        <SafeAreaView style={{ flex:0, backgroundColor: '#EAEAEA' }}  />
        <View style={registerStyles.container}>
        <TouchableOpacity
            onPress={() => goToRegister()}
            >
            <Text style={registerStyles.back} >Back</Text>
            </TouchableOpacity>
        <Text style={registerStyles.header}>Sign In</Text>

        <TextInput
        autoComplete="email"
        textContentType="emailAddress"
        style={registerStyles.input}
      />
        </View>
        </View>
    )
}

export default SignIn