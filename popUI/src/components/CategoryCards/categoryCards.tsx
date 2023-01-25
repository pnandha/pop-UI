import React, { useState, useEffect, useRef } from 'react'
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native'
import categoryStyles from './categoryStyle'
import { getProductsByCat } from '../../api/products/getProductsByCat';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';

const CategoryCards = (categoryID: any) => {
    const [products, setProducts] = useState<any[]>([])
    const navigation = useNavigation()
    
    useFocusEffect(
        React.useCallback(() => {
            getProductsByCat(categoryID.categoryID, catSuccess, catError)
          },  [])
    )

    const catSuccess = (data: { content: React.SetStateAction<any[]>; }) => {
        setProducts(data.content)
    }
    const catError = (error: any) => {
        console.log(error)
    }
    
    const goToProduct = (item: any, page: any) =>{
        navigation.navigate("Products" as never, {item: item, page: page} as never);
    }

    return(
        <View style={categoryStyles.cardContainer}>
         { products.length != 0 ?
         (<ScrollView horizontal={true}>
            { 
            products.map((item,key)=>
            <TouchableOpacity key={key} onPress={() => goToProduct(item, "Home")}>
                <View style={categoryStyles.card}>
                    <Image
                    style={categoryStyles.image} 
                    source={{uri: item.image_url}}/>
                    <Text style={categoryStyles.cardTextHeader} numberOfLines={3} ellipsizeMode='tail'>Trading {item.name}</Text>
                    <Text style={categoryStyles.cardTextBody} numberOfLines={3} ellipsizeMode='tail'> For {item.trading_for}</Text>
                </View>
            </TouchableOpacity>
                )}
        </ScrollView>) : <Text style={categoryStyles.errorBody} >No listings at this time</Text>} 
        </View>
    )
}

export default CategoryCards