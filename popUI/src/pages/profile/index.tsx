import { Link, useFocusEffect, useNavigation } from "@react-navigation/native"
import React, { SetStateAction, useCallback, useContext, useEffect, useRef, useState } from "react"
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert, ScrollView, Image } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useDispatch, useSelector } from "react-redux"
import { postLogout } from "../../api/auth/postLogout"
import profileStyles from './profileStyles'
import { MyState } from "../../state/userSlice"
import Icon from 'react-native-vector-icons/Octicons';
import { getProductsByUser } from "../../api/user/getProductsByUser"
import { deleteProduct } from "../../api/products/deleteProduct"
import { AuthContext } from "../../AuthContext"


const Profile = () => {
    const name = useSelector((state: MyState) => state.user.userName).split(' ')
    const userId = useSelector((state: MyState) => state.user.id)
    const userInfo = useSelector((state: MyState) => state.user)
    const navigation = useNavigation()
    const [products, setProducts] = useState<any[]>([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const scrollViewRef = useRef<ScrollView>(null)
    const { setSignedInFalse } = useContext(AuthContext)

    async function logoutSuccessHandeler ()  {
        await AsyncStorage.setItem('isLoggedIn', 'false')
        await AsyncStorage.setItem('email', '');
        await AsyncStorage.setItem('password', '');
        Alert.alert('Logged out')
        setSignedInFalse()
    }

    async function logoutErrorHandeler () {
        await AsyncStorage.setItem('isLoggedIn', 'false')
        await AsyncStorage.setItem('email', '');
        await AsyncStorage.setItem('password', '');
        setSignedInFalse()
        Alert.alert('Logged out')
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

    const onLogout = () =>{
        postLogout(logoutSuccessHandeler, logoutErrorHandeler)
    }

    const toAdd = () =>{
        navigation.navigate("Add" as never, {state:{id:userId}} as never);
    }

    const goToProduct = (item: any) =>{
        navigation.navigate("Products" as never, {item: item} as never);
    }

    const deleteProductSucces = () => {
        Alert.alert('Successfuly Deleted', '',  
        [ {text: "OK", onPress: () => getProductsByUser(page, prodSuccess, prodError)} ])
    }

    const deleteProductError = () => {
        Alert.alert('Error when deleting')
    }

    const deleteItem = (id: any, name: any) =>{
        Alert.alert(
            '',
            `Are you sure you want to delete ${name}?`,  
            [
               {text: 'Yes', onPress: () => deleteProduct(id, deleteProductSucces, deleteProductError)},
               {text: 'Cancel', style: 'cancel'},
               
            ],
            { cancelable: false }
       )
    }

    useFocusEffect(
        React.useCallback(() => {
        getProductsByUser(page, prodSuccess, prodError)
      }, [page]) )

    return (
        <View>
        <SafeAreaView style={{ flex:0, backgroundColor: '#F9F9F9' }}  />
        <View style={profileStyles.container}>
             <View style={profileStyles.headerContainer}>
                <Text style={profileStyles.header}>{name[0]}</Text>
                <View style={{ 
                    display: 'flex', 
                    flexDirection: 'row',  
                    justifyContent:'space-evenly',  
                    alignContent: 'center'}}>
                <TouchableOpacity onPress={() => navigation.navigate("Settings" as never, {user: userInfo} as never)} >
                    <Icon name="gear" color={"#FF781F"} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: '10%'}}onPress={() => onLogout()} >
                    <Icon name="sign-out" color={"#FF781F"} size={25} />
                </TouchableOpacity>
                </View>
            </View>
            <View style={profileStyles.headerContainer}>
                <Text style={profileStyles.header}>My Listings</Text>
                <TouchableOpacity onPress={() => toAdd()} >
                    <Icon name="plus" color={"#FF781F"} size={25} />
                </TouchableOpacity>
            </View>
            <Text style={{ color: 'grey', marginLeft: "5%" }}>Listed {total} item(s)</Text>
            <Text style={{ color: 'grey', margin: "5%" }}>Showing page {page} out of {totalPages} pages</Text>
        <ScrollView ref={scrollViewRef} style={{ marginBottom: "20%" }}>
            {
            products.map((item,key)=>
            <TouchableOpacity key={key} onPress={() => goToProduct(item)}>
                <View style={profileStyles.card}>
                    <Image
                    style={profileStyles.image} 
                    source={{uri: item.image_url}}/>
                    <Text style={profileStyles.cardTextHeader}>Trading {item.name}</Text>
                    <TouchableOpacity style={profileStyles.cardIcon} onPress={() => deleteItem(item.id, item.name)} >
                        <Icon name="trash" color={"red"} size={25} />
                    </TouchableOpacity>
                    <Text style={profileStyles.cardTextBody}>For {item.trading_for}</Text>
                </View>
            </TouchableOpacity>
                )}
                <View style={profileStyles.paginationContainer}>
                    <TouchableOpacity 
                    style={profileStyles.paginationButton}
                    disabled={page === 1}
                    onPress={() => {
                        setPage(page - 1)
                        scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true })
                    }}
                    >
                    <Text style={profileStyles.paginationButtonText}>
                        <Icon name="chevron-left" color={"#FF781F"} size={25} />
                    </Text>
                    </TouchableOpacity>
                    <Text style={profileStyles.paginationText} > {page}</Text>
                    <TouchableOpacity 
                    style={profileStyles.paginationButton}
                    disabled={page >= totalPages}
                    onPress={() => 
                        {
                        setPage(page + 1)
                        scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true })
                    }}
                    >
                    <Text style={profileStyles.paginationButtonText}>
                        <Icon name="chevron-right" color={"#FF781F"} size={25} />
                    </Text>
                    </TouchableOpacity>
                </View>
        </ScrollView>  
        </View>
        </View>
    )
}

export default Profile

function dispatch(arg0: any) {
    throw new Error("Function not implemented.")
}


function token(arg0: null): any {
    throw new Error("Function not implemented.")
}
