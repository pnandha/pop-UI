import { Link, useNavigation } from "@react-navigation/native"
import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { postLogout } from "../../api/auth/postLogout"
import profileStyles from './profileStyles'
import { MyState } from "../../state/userSlice"
import Icon from 'react-native-vector-icons/Octicons';


const Profile = () => {
    const name = useSelector((state: MyState) => state.user.userName).split(' ')
    const userId = useSelector((state: MyState) => state.user.id)
    const navigation = useNavigation()

    const logoutSuccessHandeler = () => {
        // destroy redux store
        Alert.alert('Logged out')
        navigation.navigate("Landing" as never, {} as never);

    }

    const logoutErrorHandeler = () => {
        Alert.alert('Logged out')
        navigation.navigate("SignIn" as never, {} as never);

    }

    const onLogout = () =>{
        postLogout(logoutSuccessHandeler, logoutErrorHandeler)
    }

    const toAdd = () =>{
        navigation.navigate("Add" as never, {state:{id:userId}} as never);
        }

    return (
        <View>
        <SafeAreaView style={{ flex:0, backgroundColor: '#F9F9F9' }}  />
        <View style={profileStyles.container}>
             <View style={profileStyles.headerContainer}>
                <Text style={profileStyles.header}>{name[0]}</Text>
                <TouchableOpacity onPress={() => onLogout()} >
                    <Icon name="sign-out" color={"#FF781F"} size={25} />
                </TouchableOpacity>
            </View>
            <View style={profileStyles.headerContainer}>
                <Text style={profileStyles.header}>My Listings</Text>
                <TouchableOpacity onPress={() => toAdd()} >
                    <Icon name="plus" color={"#FF781F"} size={25} />
                </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}

export default Profile

function dispatch(arg0: any) {
    throw new Error("Function not implemented.")
}


function token(arg0: null): any {
    throw new Error("Function not implemented.")
}
