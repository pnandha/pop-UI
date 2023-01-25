import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, TouchableWithoutFeedback, Keyboard, ScrollView, Alert } from 'react-native';
import settingsStyles from './settingStyles';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { postUserDetails } from '../../api/user/updateUserDetails';
import wellknown from 'wellknown'
import { validateName } from '../../constants';
import { getUserInfo } from '../../api/user/getUserInfo';
import { id, userName, userEmail, userNumber, userLocation, userStringLocation } from '../../state/userSlice';
import { useDispatch } from 'react-redux';

const Settings = ({ route }) => {
    const { user } = route.params
    const point = wellknown.parse(user.userLocation)
    const [stringLocation, setStringLocation] = useState(user.userStringLocation)
    const originaLocation = `POINT(${point.coordinates[0]} ${point.coordinates[1]})`
    const [location, setLocation] = useState('');
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);
    const [locationError, setLocationError] = useState(false);
    const dispatch = useDispatch()
    
    const navigation = useNavigation()

    useEffect(() => {
        setLocation(`POINT(${point.coordinates[0]} ${point.coordinates[1]})`);
        setName(user.userName);
    }, [user]);

    const userSuccessHandler = (info: {
        userStringLocation: any; userLocation: any, id: any; name: any; email: any; mobileNumber: any }) => {
          dispatch(id(info.id))
          dispatch(userName(info.name))
          dispatch(userEmail(info.email))
          dispatch(userNumber(info.mobileNumber))
          dispatch(userLocation(info.userLocation))
          dispatch(userStringLocation(info.userStringLocation))
      }
      const userErrorHandeler = (error: any) => {
          Alert.alert('Error', `Please try again later  ${error}`,)
      }

    const updateSuccess = () => {
        Alert.alert('Successfully updated')
        navigation.navigate("Home" as never, {} as never)
        getUserInfo(userSuccessHandler, userErrorHandeler)
    }

    const updateError = () => {
        Alert.alert('Failed Update', 'try again later')
        navigation.navigate("Home" as never, {} as never)
    }

    const handleSubmit = () => {
        if (!validateName(name)){
            setNameError(true)
        } else if(!stringLocation) { 
            setLocationError(true)
        } else {
            setNameError(false) 
            if (user.userName === name && originaLocation === location ){
                Alert.alert('No changes made')
                navigation.navigate("Home" as never, {} as never)
            }
            if (user.userName !== name || originaLocation !== location){
                postUserDetails(name, location, stringLocation, updateSuccess, updateError)
            }
        }
    }

    return (
        <KeyboardAvoidingView
        style={settingsStyles.container}
      >
        <SafeAreaView style={{ backgroundColor: '#F9F9F9' }}  />
        <TouchableOpacity
              onPress={() => navigation.navigate("Home" as never, {} as never)}
              >
              <Text style={settingsStyles.back} >Back</Text>
              </TouchableOpacity>
              <View style={settingsStyles.container}>
                <ScrollView 
                style={{ marginBottom: "5%" }}
                showsVerticalScrollIndicator={false}
                >
                <View style={settingsStyles.scrollContainer}>
                    <Text style={settingsStyles.header}>Settings</Text>
                    <Text style={{ fontWeight: 'bold', marginVertical: '5%'}}>Change your details below. More customisation on the way</Text>
                    <View style={settingsStyles.textInput}>
                    <Text style={settingsStyles.textTitles}>Name</Text>
                        <TextInput value={name} onChangeText={(e) => setName(e)} style={settingsStyles.enterText} />
                        {nameError ? <Text style={settingsStyles.errorStyle}>Please Enter a Valid Name</Text> : null }
                    </View>
                    <View style={settingsStyles.textInput}>
                    <Text style={settingsStyles.textTitles}>Location</Text>
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
                  textInputProps={{
                    value:  stringLocation,
                    onChangeText: setStringLocation
                  }}
                  styles={{
                    textInputContainer:{
                       marginVertical: '5%'
                    },
                    textInput: {
                       backgroundColor: 'lightgrey',
                       color: 'black',
                       height: 40,
                       borderWidth: 0,
                       borderRadius: 10,
                       fontWeight: 'bold',
                    },
                    predefinedPlacesDescription: {
                    color: '#1faadb',
                    }}}
                  />
               </ScrollView>
               {locationError ? <Text style={settingsStyles.errorStyle}>Please Enter a Valid Location</Text> : null }
                    </View>
                    <TouchableOpacity
                    onPress={() => handleSubmit()}
                    style={settingsStyles.registerButton}
                    >
                    <Text style={settingsStyles.registerButtonText}>Confirm Change</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
                </View>

</KeyboardAvoidingView> )
}

export default Settings