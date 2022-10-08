import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from "react-native"
import { useSelector } from "react-redux"
import homeStyles from './homeStyles'


const Home = () => {
    // const [name, setName]  = useState(useSelector(state => user.userName))
    const [email, setEmail]  = useState(useSelector(state => state.user.userEmail))

    const name = useSelector((state: MyState) => state.user.userName)


    return (
        <View>
        <SafeAreaView style={{ flex:0, backgroundColor: '#EAEAEA' }}  />
        <View style={homeStyles.container}>
            <Text style={homeStyles.header}>Welcome Back {name}</Text>
        </View>
        </View>
    )
}

export default Home