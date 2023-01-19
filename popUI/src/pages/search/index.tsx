import React, { SetStateAction, useEffect, useRef, useState } from "react"
import { 
    View, 
    Text, 
    TouchableOpacity, 
    SafeAreaView, 
    KeyboardAvoidingView,
    ScrollView, 
    Image } from "react-native"
import Icon from 'react-native-vector-icons/Octicons';
import searchStyles from "./searchStyles"
import { useNavigation} from "@react-navigation/native"
import { getProductsTrade } from "../../api/products/getProductsTrade"
import { getProductsSearch } from "../../api/products/getProductsSearch"
import { imageDBurl } from "../../constants"


const Search = ({ route }) => {
    const navigation = useNavigation()
    const [products, setProducts] = useState<any[]>([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const scrollViewRef = useRef<ScrollView>(null)
    const { search, type } = route.params;
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

    useEffect(() => {
        if (type === "trading"){
        getProductsTrade(search, page, prodSuccess, prodError)
        } else if (type == "looking for"){
        getProductsSearch(search, page, prodSuccess, prodError)
        }
      }, [page])

      const goToProduct = (item: any) =>{
        navigation.navigate("Products" as never, {item: item} as never);
    }
    
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
              <View style={searchStyles.headerContainer}>
                <Text style={searchStyles.header}> I am {type}</Text>
                <Text style={searchStyles.header}>{search}</Text>
                <Text style={{ color: 'grey' }}>Showing page {page} out of {totalPages} page(s)</Text>
              </View>
            <View style={searchStyles.cardContainer}>
         <ScrollView ref={scrollViewRef} style={{ marginBottom: "60%" }}>
            {
            products.map((item,key)=>
            <TouchableOpacity onPress={() => goToProduct(item)} key={key}>
                <View style={searchStyles.card} >
                    <Image
                    style={searchStyles.image} 
                    source={{uri: imageDBurl + item.image_url}}/>
                    <Text style={searchStyles.cardTextHeader}>Trading {item.name}</Text>
                    <Text style={searchStyles.cardTextBody}>For {item.trading_for}</Text>
                </View>
            </TouchableOpacity>
                )}
                 <View style={searchStyles.paginationContainer}>
                    <TouchableOpacity 
                    style={searchStyles.paginationButton}
                    disabled={page === 1}
                    onPress={() => {
                        setPage(page - 1)
                        scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true })
                    }}
                    >
                    <Text style={searchStyles.paginationButtonText}>
                        <Icon name="chevron-left" color={"#FF781F"} size={25} />
                    </Text>
                    </TouchableOpacity>
                    <Text style={searchStyles.paginationText} >{page}</Text>
                    <TouchableOpacity 
                    style={searchStyles.paginationButton}
                    disabled={page >= totalPages}
                    onPress={() => 
                        {
                        setPage(page + 1)
                        scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true })
                    }}
                    >
                    <Text style={searchStyles.paginationButtonText}>
                        <Icon name="chevron-right" color={"#FF781F"} size={25} />
                    </Text>
                    </TouchableOpacity>
                </View>
        </ScrollView>
        </View>
        </KeyboardAvoidingView>
    )
}

export default Search