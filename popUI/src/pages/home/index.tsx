import React, { useEffect, useRef, useState } from "react"
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, TextInput, Animated,  KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert, Easing } from "react-native"
import { useSelector } from "react-redux"
import homeStyles from './homeStyles'
import { MyState } from "../../state/userSlice"
import { categories } from "../../constants"
import Icon from 'react-native-vector-icons/Octicons';
import CategoryCards from "../../components/CategoryCards/categoryCards"
import { useNavigation } from "@react-navigation/native"

const Home = () => {
    const [searchType, setSearchType] = useState("lookingFor")
    const [searchText, setSearchText] = useState("")
    const navigation = useNavigation()
    const searchSumbit = () => {
        if (searchText != "") {
        navigation.navigate("Search" as never, {search: searchText, type: searchType} as never);
        setSearchText("")
        }
    }
    return (
        <View >
        <SafeAreaView style={{ flex: 0, backgroundColor: '#F9F9F9' }}  />
        <View style={homeStyles.container}>            
                { searchType === "lookingFor" ?
                <>
              
                <Text style={homeStyles.searchHeader} ><Text style={{color: "#266CCF"}}>Iam looking for...</Text></Text>
        
                <View style={homeStyles.searchbar}>
                      
                        <Icon name="arrow-switch" color={"#FF781F"} size={25} onPress={() => {setSearchType("trading") }}/>
                       
                        <TextInput 
                        style={homeStyles.searchInput} 
                        placeholder="Looking for..." 
                        keyboardType={"web-search"}
                        value={searchText}
                        onChangeText={(val) => {setSearchText(val)}}
                        onSubmitEditing={() => searchSumbit()}/>
                </View>
                </> :
                <>
              
                <Text style={homeStyles.searchHeader}>Iam trading...</Text>
        
                <View style={homeStyles.searchbar}>                  
                  <Icon name="arrow-switch" color={"#266CCF"} size={25} onPress={() => {setSearchType("lookingFor")}}/>
                  <TextInput 
                    style={homeStyles.searchInput} 
                    placeholder="Trading..." 
                    keyboardType={"web-search"}
                    value={searchText}
                    onChangeText={(val) => {setSearchText(val)}}
                    onSubmitEditing={() => searchSumbit()}/>
                </View>
                </> 
                }
            <ScrollView >
            {
            categories.map((item,key)=>
                 <View>
                    <View style={homeStyles.catContainers} key={key}>
                        <Text style={homeStyles.catTitles}>{item.name}</Text>
                        <Text style={{color: "#FF781F", fontWeight: "bold"}}>see more...</Text>
                    </View>
                    <CategoryCards categoryID={item.id}/>
                </View>
                )}
            </ScrollView>
            </View>
        </View>
    )
}

export default Home