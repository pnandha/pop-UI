import { useNavigation } from "@react-navigation/native"
import React from "react"
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from "react-native"
import registerStyles from "./registerStyles"

const Register = () => {
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
        <Text style={registerStyles.header}>Register</Text>

        <Text style={registerStyles.form}>Name</Text>
        <TextInput
        autoComplete="email"
        textContentType="emailAddress"
        style={registerStyles.input}
      />

        <Text style={registerStyles.form}>Email</Text>
        <TextInput
        autoComplete="email"
        textContentType="emailAddress"
        style={registerStyles.input}
      />
        </View>
        </View>
    )
}

export default Register