import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, TouchableWithoutFeedback, Keyboard, Alert, ScrollView, Button, FlatList, Image } from "react-native"
import { useSelector } from "react-redux"
import createProductStyles from './createProductStyles'
import { useNavigation } from "@react-navigation/native"
import DatePicker from 'react-native-date-picker'
import Icon from 'react-native-vector-icons/Octicons';
import DropDownPicker from 'react-native-dropdown-picker';
import { categories } from "../../constants"
import  { MediaType, launchImageLibrary} from 'react-native-image-picker';
import { createProduct } from "../../api/products/createProduct"
import { MyState } from "../../state/userSlice"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Image as img } from 'react-native-compressor';



const CreateProduct = () => {
   const navigation = useNavigation()
   const [name, setName] = useState('')
   const [nameError, setNameError] = useState(false)
   const [tradingFor, setTradingFor] = useState<any | null>(null)
   const [tradingError, setTradingError] = useState(false)
   const [description, setDescription] = useState('')
   const [descriptionError, setDescriptionError] = useState(false)
   const [category, setCategory] = useState<any | null>(null)
   const [categoryError, setCategoryError] = useState(false)
   const [location, setLocation] = useState('')
   const [stringPostalCode, setStringPostalCode] = useState<any | null>(null)
   const [locationError, setLocationError] = useState(false)
   const [imageUrl, setImageUrl] = useState<any | null>(null)
   const [imageError, setImageError] = useState(false)
   const [date, setDate] = useState(new Date())
   const [dateOpen, setDateOpen] = useState(false)
   const [catOpen, setCatOpen] = useState(false);
   const [catValue, setCatValue] = useState<any | null>(null)
   const [items, setItems] = useState(categories.map((item, i) => ({label: item.name, value: i, id: item.id})))
   const timeOptions: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: '2-digit', weekday: 'short',  day: 'numeric', month: 'short', year: 'numeric' };
   const userId = useSelector((state: MyState) => state.user.id)

   const selectImage = () => {
      const options = {
         title: 'Select Image',
         mediaType: 'photo' as MediaType,
         customButtons: [
         { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
         ],
         storageOptions: {
         skipBackup: true,
         path: 'images',
         },
      };
      launchImageLibrary(options, (response) => {
         if(response.assets?.length){
         setImageUrl(response.assets[0])
         }
      })
   }
   const sumbitSuccessHandler = () =>{
      Alert.alert('Successfuly Created', '')
      navigation.navigate("Home" as never, {} as never);

   }
   const sumbitErrorHandeler = () =>{
      Alert.alert('Error', 'Could not create item')
   
   }

   const sumbit = async () => {
      if (!name){
         setNameError(true)
       } else { setNameError(false) }
       if (!tradingFor){
         setTradingError(true)
       } else { setTradingError(false) }
       if (!description){
         setDescriptionError(true)
       } else { setDescriptionError(false)}
       if (!category){
         setCategoryError(true)
       } else { setCategoryError(false) }
       if (!location){
         setLocationError(true)
       } else { setLocationError(false) }
       if (!imageUrl){
         setImageError(true)
       } else { setImageError(false) }

      if(
         name && 
         tradingFor &&
         description &&
         category &&
         location &&
         imageUrl) {
      const compressedImage = await img.compress(imageUrl.uri, {
         maxWidth: 1000,
         quality: 0.6,
       })
      const formData:any = new FormData()
      formData.append('image_url', {
            'name': imageUrl.fileName,
            "type": 'image/jpeg',
             "uri": compressedImage,
      })
      formData.append('name', name)
      formData.append('trading_for', tradingFor)
      formData.append('description', description)
      formData.append('location', location)
      formData.append('stringPostalCode', stringPostalCode)
      formData.append('category', category)
      formData.append('expire', date.toISOString())
      formData.append('user_id', userId)
      createProduct(formData, sumbitSuccessHandler, sumbitErrorHandeler)
    }
   }


   const toProfile = () =>{
         navigation.navigate("Home" as never, {} as never);
      }

    return (
       
      <>
      <SafeAreaView style={{ backgroundColor: '#F9F9F9' }} /><TouchableOpacity
          onPress={() => toProfile()}
       >
          <Text style={createProductStyles.back}>Back</Text>
       </TouchableOpacity>
       <View style={createProductStyles.container}>
       <ScrollView 
       style={{ marginBottom: "5%" }}
       showsVerticalScrollIndicator={false}
       automaticallyAdjustKeyboardInsets={true}
       >
         <View style={createProductStyles.scrollContainer}>
             <Text style={createProductStyles.header}>Add Something</Text>
             <Text style={createProductStyles.textTitles}>Name it</Text>
             <TextInput
                placeholder="Name"
                value={name}
                onChangeText={setName}
                style={createProductStyles.enterText} />
                 {nameError ? <Text style={createProductStyles.errorStyle}>Please Enter a Valid Full Name</Text> : null }
            <Text style={createProductStyles.textTitles}>Describe it</Text>
             <TextInput
                placeholder="Description"
                multiline={true}
                value={description}
                onChangeText={setDescription}
                style={createProductStyles.multiLineInput} />
                {descriptionError ? <Text style={createProductStyles.errorStyle}>Please Enter a Valid Description</Text> : null }
            <Text style={createProductStyles.textTitles}>Where abouts is it located?</Text>
            <ScrollView horizontal contentContainerStyle={{flex: 1, width: '100%', height: '100%'}}>
               <GooglePlacesAutocomplete
                  placeholder='Search Location'
                  fetchDetails={true}
                  onPress={(data, details) => {
                  setStringPostalCode(details?.address_components.filter((v) => v.types[0] == "postal_code")[0].long_name)
                  setLocation(`POINT(${details?.geometry.location.lat} ${details?.geometry.location.lng})`)
                  }}
                  query={{
                  key: 'AIzaSyAokUQ1bxWYKpaq4SyLz8UsnLef_Ur-yEg',
                  language: 'en',
                  type: 'establishment',
                  }}
                  styles={{
                     textInputContainer:{
                        marginVertical: '5%'
                     },
                     textInput: {
                        backgroundColor: 'lightgrey',
                        color: 'black',
                        borderWidth: 0,
                        fontWeight: 'bold',
                     },
                     predefinedPlacesDescription: {
                     color: '#1faadb',
                     }}}
                  />
               </ScrollView>
               {locationError ? <Text style={createProductStyles.errorStyle}>Please Enter a Valid Location</Text> : null }
            <Text style={createProductStyles.textTitles} >What category does it fall into ?</Text>
             <DropDownPicker
                style={createProductStyles.dropDownStyle}
                open={catOpen}
                value={catValue}
                items={items}
                placeholderStyle={{
                  color: 'grey',
                  fontWeight: 'bold',
                }}
                textStyle={{fontWeight: 'bold'}}
                dropDownContainerStyle={{
                   borderColor: "#dfdfdf",
                }}
                setOpen={setCatOpen}
                setValue={(v) => items.map(i => {
                   if (i.value == v(null)) {
                      setCategory(i.id)
                   }
                   setCatValue(v)
                })}
                setItems={setItems}
                listMode="SCROLLVIEW"
                placeholder="Select a Category" />
                {categoryError ? <Text style={createProductStyles.errorStyle}>Please Select A Category</Text> : null }
             <Text style={createProductStyles.textTitles} >When should the lisiting expire?</Text>
             <View style={createProductStyles.enterText}>
               <TouchableOpacity onPress={() => setDateOpen(true)}>
                  <Text style={{fontWeight: 'bold'}}>
                    {date.toLocaleDateString("en-GB", timeOptions)}
                  </Text>
               </TouchableOpacity>
               </View>
               <DatePicker
                modal
                minimumDate={new Date()}
                maximumDate={new Date(Date.now() + 12096e5)}
                open={dateOpen}
                date={date}
                onConfirm={(date) => {
                   setDateOpen(false)
                   setDate(date)
                } }
                onCancel={() => {
                   setDateOpen(false)
                } } />
            <Text style={createProductStyles.textTitles}>Snap it</Text>
            <View style={createProductStyles.labelInput}>
            <TouchableOpacity onPress={selectImage}>
               <Text style={createProductStyles.textTitles}>Upload Image <Icon name="upload" color={"#FF781F"} size={20}/></Text> 
             </TouchableOpacity>
             </View>
             <View style={createProductStyles.card} >
             { imageUrl? 
             <Image
                    style={createProductStyles.image} 
                    source={{uri:imageUrl.uri}}/> : null}
            </View>
            {imageError ? <Text style={createProductStyles.errorStyle}>Please Select An Image</Text> : null }
            <Text style={createProductStyles.textTitles}>What do you want to trade it for?</Text>
             <TextInput
                placeholder="Trading For"
                value={tradingFor}
                onChangeText={setTradingFor}
                style={createProductStyles.enterText} /> 
                {tradingError ? <Text style={createProductStyles.errorStyle}>Please Enter Trading Items, they can be multiple make sure to use a comma.</Text> : null }
             <TouchableOpacity
                style={createProductStyles.registerButton}
                onPress={sumbit}
             >
                <Text style={createProductStyles.registerButtonText} >SUMBIT</Text>
             </TouchableOpacity>
             </View>
          </ScrollView>
          </View>
          </>

      
    )
}

export default CreateProduct