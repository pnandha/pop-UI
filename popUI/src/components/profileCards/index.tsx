import React, { useState, useEffect } from 'react'
import {
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native'
import profileCardStyles from './profileCardStyles'
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
        <View style={profileCardStyles.cardContainer}>
         <ScrollView horizontal={true}>
            {
            products.map((item,key)=>
                <View style={profileCardStyles.card} key={key}>
                    <Image
                    style={profileCardStyles.image} 
                    source={{uri: item.image_url}}/>
                    <Text style={profileCardStyles.cardTextHeader} numberOfLines={3} ellipsizeMode='tail'>Trading {item.name}</Text>
                    <Text style={profileCardStyles.cardTextBody} numberOfLines={2} ellipsizeMode='tail'>For {item.trading_for}</Text>
                </View>
                )}
        </ScrollView>
        </View>
    )
}

export default CategoryCards