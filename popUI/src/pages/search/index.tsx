import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, Image } from "react-native"
import { useSelector } from "react-redux"
import searchStyles from "./searchStyles"
import { useNavigation, useNavigationState} from "@react-navigation/native"
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/Octicons';
import { getProductsTrade } from "../../api/products/getProductsTrade"
import { getProductsSearch } from "../../api/products/getProductsSearch"


const Search = ({ route }) => {
    const navigation = useNavigation()
    const [products, setProducts] = useState<any[]>([])
    const [total, setTotal] = useState<any[]>([])
    const { search, type } = route.params;
    const toHome = () =>{
        navigation.navigate("Home" as never, {} as never);
    }

    const prodSuccess = (data: { content: React.SetStateAction<any[]>, product_total: React.SetStateAction<any[]>  }) => {
        setProducts(data.content)
        setTotal(data.product_total)
    }
    const prodError = (error: any) => {
        console.log(error)
    }

    useEffect(() => {
        if (type === "trading"){
        getProductsTrade(search, 1, prodSuccess, prodError)
        } else if (type == "lookingFor"){
        getProductsTrade(search, 1, prodSuccess, prodError)
        }
      }, [])
    
    return (
        <KeyboardAvoidingView
        behavior={"padding"}
        style={searchStyles.container}
      >
        <SafeAreaView style={{ backgroundColor: '#F9F9F9' }}  />
        <TouchableOpacity
              onPress={() => toHome()}
              >
              <Text style={searchStyles.back} >Back</Text>
              </TouchableOpacity>
              <Text>{search}</Text>
              <Text>{type}</Text>
              <Text>Returned {total} Products</Text>
            <View style={searchStyles.cardContainer}>
         <ScrollView>
            {
            products.map((item,key)=>
                <View style={searchStyles.card} key={key}>
                    <Image
                    style={searchStyles.image} 
                    source={{uri: item.image_url}}/>
                    <Text style={searchStyles.cardTextHeader}>{item.name}</Text>
                    <Text style={searchStyles.cardTextBody}>{item.trading_for}</Text>
                </View>
                )}
        </ScrollView>
        </View>
        </KeyboardAvoidingView>
    )
}

export default Search