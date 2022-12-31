import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from "react-native"
import { useSelector } from "react-redux"
import likedStyles from './likedStyles'


const LikedStyles = () => {


    return (
        <View>
        <SafeAreaView style={{ flex:0, backgroundColor: '#F9F9F9' }}  />
        <View style={likedStyles.container}>
            <Text style={likedStyles.header}>Liked</Text>
        </View>
        </View>
    )
}

export default LikedStyles