import React, { SetStateAction, useEffect, useRef, useState } from "react"
import { 
    View, 
    Text, 
    TouchableOpacity, 
    SafeAreaView, 
    KeyboardAvoidingView,
    ScrollView, 
    Image } from "react-native"
import Icon from 'react-native-vector-icons/Octicons'
import seeMoreStyles from "./seeMoreStyles"
import { useFocusEffect, useNavigation} from "@react-navigation/native"
import { getCategoryProducts } from "../../api/products/getCategoryProducts"


const SeeMore = ({ route }) => {
    const navigation = useNavigation()
    const [products, setProducts] = useState<any[]>([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const scrollViewRef = useRef<ScrollView>(null)
    const { category, categoryID } = route.params
    const toHome = () =>{
        navigation.navigate("Home" as never, {} as never);
    }

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

    useFocusEffect(
        React.useCallback(() => {
            getCategoryProducts(categoryID, page, prodSuccess, prodError)
          },  [page, categoryID])
    )

      const goToProduct = (item: any) =>{
        navigation.navigate("Products" as never, {item: item} as never);
    }
    
    return (
        <KeyboardAvoidingView
        behavior={"padding"}
        style={seeMoreStyles.container}
      >
        <SafeAreaView style={{ backgroundColor: '#F9F9F9' }}  />
        <TouchableOpacity
              onPress={() => toHome()}
              >
              <Text style={seeMoreStyles.back} >Back</Text>
              </TouchableOpacity>
              <View style={seeMoreStyles.headerContainer}>
                <Text style={seeMoreStyles.header}>{category}</Text>
                <Text style={{ color: 'grey' }}>Showing page {page} out of {totalPages} page(s)</Text>
              </View>
            <View style={seeMoreStyles.cardContainer}>
         <ScrollView ref={scrollViewRef} style={{ marginBottom: "60%" }}>
            {
            products.map((item,key)=>
            <TouchableOpacity onPress={() => goToProduct(item)} key={key}>
                <View style={seeMoreStyles.card} >
                    <Image
                    style={seeMoreStyles.image} 
                    source={{uri: item.image_url}}/>
                    <Text style={seeMoreStyles.cardTextHeader}>Trading {item.name}</Text>
                    <Text style={seeMoreStyles.cardTextBody}>For {item.trading_for}</Text>
                </View>
            </TouchableOpacity>
                )}
                 <View style={seeMoreStyles.paginationContainer}>
                    <TouchableOpacity 
                    style={seeMoreStyles.paginationButton}
                    disabled={page === 1}
                    onPress={() => {
                        setPage(page - 1)
                        scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true })
                    }}
                    >
                    <Text style={seeMoreStyles.paginationButtonText}>
                        <Icon name="chevron-left" color={"#FF781F"} size={25} />
                    </Text>
                    </TouchableOpacity>
                    <Text style={seeMoreStyles.paginationText} >{page}</Text>
                    <TouchableOpacity 
                    style={seeMoreStyles.paginationButton}
                    disabled={page >= totalPages}
                    onPress={() => 
                        {
                        setPage(page + 1)
                        scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true })
                    }}
                    >
                    <Text style={seeMoreStyles.paginationButtonText}>
                        <Icon name="chevron-right" color={"#FF781F"} size={25} />
                    </Text>
                    </TouchableOpacity>
                </View>
        </ScrollView>
        </View>
        </KeyboardAvoidingView>
    )
}

export default SeeMore