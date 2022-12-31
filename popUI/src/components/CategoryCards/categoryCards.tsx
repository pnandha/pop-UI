import React, { Component, useState, useEffect } from 'react'
import {
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native'
import categoryStyles from './categoryStyle'
import { getProductsByCat } from '../../api/products/getProductsByCat';

const CategoryCards = (categoryID: any) => {
    const [products, setProducts] = useState<any[]>([])
    useEffect(() => {
        getProductsByCat(categoryID.categoryID, catSuccess, catError)
      }, [])

    const catSuccess = (data: { content: React.SetStateAction<any[]>; }) => {
        setProducts(data.content)
    }
    const catError = (error: any) => {
        console.log(error)
    }
    
    return(
        <View style={categoryStyles.cardContainer}>
         <ScrollView horizontal={true}>
            {
            products.map((item,key)=>
                <View style={categoryStyles.card} key={key}>
                    <Image
                    style={categoryStyles.image} 
                    source={{uri: item.image_url}}/>
                    <Text style={categoryStyles.cardTextHeader}>{item.name}</Text>
                    <Text style={categoryStyles.cardTextBody}>{item.trading_for}</Text>
                </View>
                )}
        </ScrollView>
        </View>
    )
}

export default CategoryCards