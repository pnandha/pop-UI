import React, { SetStateAction, useEffect, useRef, useState } from "react"
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert, ScrollView, Image } from "react-native"
import { useSelector } from "react-redux"
import likedStyles from './likedStyles'
import { getSavedProduct } from "../../api/products/getSavedProducts"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import Icon from 'react-native-vector-icons/Octicons'


const Liked = () => {
    const navigation = useNavigation()
    const [products, setProducts] = useState<any[]>([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [total, setTotal]= useState(0)
    const scrollViewRef = useRef<ScrollView>(null)
    const prodSuccess = (data: {
        product_total: SetStateAction<number>, content: React.SetStateAction<any[]>  
        }) => {
        setProducts(data.content)
        setTotal(data.product_total)
        if(data.product_total == 0){
            setTotalPages(1)
        } else{
        setTotalPages(Math.ceil(data.product_total as any / 10))
        }
    }
    const prodError = (error: any) => {
        console.log(error)
    }

    const goToProduct = (item: any) =>{
        navigation.navigate("Products" as never, {item: item} as never);
    }
    useFocusEffect(
        React.useCallback(() => {
        getSavedProduct(page, prodSuccess, prodError)
      }, [page]) )


    return (
        <View>
        <SafeAreaView style={{ flex:0, backgroundColor: '#F9F9F9' }}  />
        <View style={likedStyles.container}>
            <Text style={likedStyles.header}>Liked</Text>
            <Text style={{ color: 'grey', margin: "5%" }}>Liked {total} item(s)</Text>
            <Text style={{ color: 'grey', margin: "5%" }}>Showing page {page} out of {totalPages}</Text>
        <ScrollView ref={scrollViewRef} style={{ marginBottom: "20%" }}>
            {
            products.map((item,key)=>
            <TouchableOpacity key={key} onPress={() => goToProduct(item)}>
                <View style={likedStyles.card}>
                    <Image
                    style={likedStyles.image} 
                    source={{uri: item.image_url}}/>
                    <Text style={likedStyles.cardTextHeader} numberOfLines={3} ellipsizeMode='tail'>Trading {item.name}</Text>
                    <Text style={likedStyles.cardTextBody} numberOfLines={3} ellipsizeMode='tail'>For {item.trading_for}</Text>
                </View>
            </TouchableOpacity>
                )}
                <View style={likedStyles.paginationContainer}>
                    <TouchableOpacity 
                    style={likedStyles.paginationButton}
                    disabled={page === 1}
                    onPress={() => {
                        setPage(page - 1)
                        scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true })
                    }}
                    >
                    <Text style={likedStyles.paginationButtonText}>
                        <Icon name="chevron-left" color={"#FF781F"} size={25} />
                    </Text>
                    </TouchableOpacity>
                    <Text style={likedStyles.paginationText}>{page}</Text>
                    <TouchableOpacity 
                    style={likedStyles.paginationButton}
                    disabled={page >= totalPages}
                    onPress={() => 
                        {
                        setPage(page + 1)
                        scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true })
                    }}
                    >
                    <Text style={likedStyles.paginationButtonText}>
                        <Icon name="chevron-right" color={"#FF781F"} size={25} />
                    </Text>
                    </TouchableOpacity>
                </View>
        </ScrollView>
        </View>
        </View>
    )
}

export default Liked