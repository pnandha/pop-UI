import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, SafeAreaView, Modal, TextInput, KeyboardAvoidingView, Image, ScrollView, TouchableWithoutFeedback, StatusBar } from "react-native"
import { useSelector } from "react-redux"
import productCardStyles from './productCardStyles'
import { useNavigation } from "@react-navigation/native"
import DatePicker from 'react-native-datepicker'
import Icon from 'react-native-vector-icons/Octicons'
import { getUserInfoById } from "../../api/user/getUserById"
import { BannerAd, TestIds, BannerAdSize } from 'react-native-google-mobile-ads'
import { saveProduct } from "../../api/products/saveProduct"
import { MyState } from "../../state/userSlice"
import { unSaveProduct } from "../../api/products/unsaveProduct"
import { Linking } from 'react-native'
import Pinchable from 'react-native-pinchable'
import wellknown from 'wellknown'
import MapView from 'react-native-maps'



const ProductPage = ({ route }) => {
    const navigation = useNavigation()
    const [liked, setLiked] = useState(false)
    
    const userId = useSelector((state: MyState) => state.user.id)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const timeOptions: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: '2-digit', weekday: 'short',  day: 'numeric', month: 'short', year: 'numeric' };
    const [productOwner, setProductOwner] = useState({
        name: "",
        mobileNumber: "",
        email: "",
    })
    const [reveal, setReveal] = useState(false)
    const [date, setDate] = useState(new Date())
    const back = () =>{
        navigation.navigate("Home" as never, {} as never);
    }
    const { item } = route.params;
    const point = wellknown.parse(item.location)

    const userInfoSuccess = (data: any) => {
        setProductOwner(data)
    }

    const userInfoError = (error: any) => {
        console.log(error)
    }
    useEffect(() => {
        getUserInfoById(item.user_id, userInfoSuccess, userInfoError)
      }, [])

      useEffect(() => {
        if(item.is_saved == true) {
          setLiked(true)
        }
        
        setDate(new Date(item.expire))
      }, [item])


     const likeSuccess = () => {
      setLiked(true)
    }

    const unLikeSuccess = () => {
      setLiked(false)
    }
    
    const handleLike = () => {
        saveProduct(userId, item.id, likeSuccess)
    }

    const handleUnLike = () => {
        unSaveProduct(item.id, unLikeSuccess)
  }

    
    return (
        <KeyboardAvoidingView
        behavior={"padding"}
        style={productCardStyles.container}
      >
        <SafeAreaView style={{ backgroundColor: '#F9F9F9' }}  />
        <StatusBar barStyle={'dark-content'} />
        <TouchableOpacity
              onPress={() => back()}
              >
              <Text style={productCardStyles.back} >Back</Text>
        </TouchableOpacity>
        
            <ScrollView style={{ height: '100%', flex: 1 }} >
            <View style={productCardStyles.productContainer}>
      
            <TouchableWithoutFeedback onPress={() => setIsModalVisible(true)}>
          <Image
            style={productCardStyles.image}
            source={{ uri: item.image_url}}
          />
      </TouchableWithoutFeedback>
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <SafeAreaView style={{ backgroundColor: '#F9F9F9' }}  />
        <StatusBar barStyle={'dark-content'} />
        <TouchableOpacity
          onPress={() => setIsModalVisible(false)}>
            <Text style={productCardStyles.back}>Back</Text>
          </TouchableOpacity>
        <View style={productCardStyles.modalContainer}>
          <Pinchable>
            <Image
              style={productCardStyles.largeImage}
              source={{ uri: item.image_url }}
            />
          </Pinchable>
        </View>
      </Modal>
               <View style={productCardStyles.headerContainer}>
                <Text style={productCardStyles.header}>{item.name}</Text>
                { liked ?
                <Text style={productCardStyles.productBody}>
                  <Icon name="heart-fill" color={"#FF781F"} size={30} onPress={() => {handleUnLike()}}/> 
                </Text> : 
                <Text style={productCardStyles.productBody}>
                  <Icon name="heart" color={"#FF781F"} size={30} onPress={() => {handleLike()}}/> 
               </Text>
                }
              </View>
              <Text style={productCardStyles.header2}>Trading For</Text>
              <Text style={productCardStyles.productBody}>{item.trading_for}</Text>
              <Text style={{margin: '5%', fontWeight: 'bold'}}>Do you have any of these items and are interested? Contact them below</Text>
              <Text style={productCardStyles.header2}>Description</Text>
              <Text style={productCardStyles.productBody}>{item.description}</Text>
              <Text style={productCardStyles.header2}>Details</Text>
              <Text style={productCardStyles.productBody}>
                <Icon name="location" color={"#FF781F"} size={25}/> 
                <Text style={productCardStyles.productBody}>  {item.stringPostalCode}</Text>
              </Text>
              <MapView
                  loadingEnabled={true}
                  style={productCardStyles.mapView}
                  zoomEnabled={true}
                  minZoomLevel={10}
                  maxZoomLevel={15}
                  rotateEnabled={false}
                  pitchEnabled={false}
                  scrollEnabled={true}
                  showsScale={true}
                  region={{
                    latitude: point.coordinates[0],
                    longitude: point.coordinates[1],
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.006,
                  }}
                />
              <Text style={productCardStyles.productBody}> 
                <Icon name="person" color={"#FF781F"} size={25}/>
                <Text>{" "} {productOwner.name}</Text>
              </Text>
              <Text style={productCardStyles.productBody}> 
                <Icon name="clock" color={"#FF781F"} size={25}/>
                <Text>{" "} Expires on {date.toLocaleDateString("en-GB", timeOptions)}</Text>
              </Text>
              <View style={{ alignItems: 'center', margin: "5%" }}>
                <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.BANNER} />
              </View>
              { reveal ? 
              <View style={productCardStyles.revealContainer}>
                <TouchableOpacity onPress={() => Linking.openURL(`tel:${productOwner.mobileNumber}`)}>
                  <Text style={productCardStyles.productBody}>{productOwner.mobileNumber}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL(`mailto:${productOwner.email}`)
                .then(() => null)
                .catch(() => null)}>
                  <Text style={productCardStyles.productBody}>{productOwner.email}</Text>
                </TouchableOpacity>
              </View> :
                <View style={productCardStyles.revealContainer}>
                    <TouchableOpacity onPress={() => setReveal(true)}>
                        <Text style={productCardStyles.revealButton}>Contact</Text>
                    </TouchableOpacity>
                </View>

              }
              </View>
              </ScrollView>
       
           
        </KeyboardAvoidingView>
    )
}

export default ProductPage