import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from "react-native"
import { useSelector } from "react-redux"
import createProductStyles from './createProductStyles'
import { useNavigation } from "@react-navigation/native"
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/Octicons';


const CreateProduct = () => {
    const navigation = useNavigation()
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const toProfile = () =>{
        navigation.navigate("Home" as never, {} as never);
    }

    return (
        <KeyboardAvoidingView
        behavior={"padding"}
        style={createProductStyles.container}
      >
        <SafeAreaView style={{ backgroundColor: '#F9F9F9' }}  />
        <TouchableOpacity
              onPress={() => toProfile()}
              >
              <Text style={createProductStyles.back} >Back</Text>
              </TouchableOpacity>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={createProductStyles.inner}>
          <Text style={createProductStyles.header}>Add something</Text>
            <View style={createProductStyles.textInput}>
                  <TextInput placeholder="Name" spellCheck={false} defaultValue={''} onChangeText={(e) => setName(e)} style={createProductStyles.enterText} />
            </View>
            <View style={createProductStyles.textInput}>
               <TextInput placeholder="Description" 
               spellCheck={false} 
               defaultValue={''} 
               onChangeText={(e) => setDescription(e)} 
               multiline={true} 
               style={createProductStyles.enterText} />
            </View>
            <View style={createProductStyles.textInput}>
               <TextInput placeholder="Location" 
               spellCheck={false} 
               defaultValue={''} 
               onChangeText={(e) => setDescription(e)} 
               multiline={true} 
               style={createProductStyles.enterText} />
            </View>
            <View style={createProductStyles.textInput}>
               <TextInput placeholder="Expire date" 
               spellCheck={false} 
               defaultValue={''} 
               onChangeText={(e) => setDescription(e)} 
               multiline={true} 
               style={createProductStyles.enterText} />
            </View>
            <Text style={createProductStyles.header}>Trading for...</Text>
            <View style={createProductStyles.textInput}>
               <TextInput placeholder="Trading for..." 
               spellCheck={false} 
               defaultValue={''} 
               onChangeText={(e) => setDescription(e)} 
               multiline={true} 
               style={createProductStyles.enterText} />
            </View>
            <TouchableOpacity
              onPress={() => console.log()}
              style={createProductStyles.registerButton}
              >
              <Text style={createProductStyles.registerButtonText}>Submit</Text>
              </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default CreateProduct