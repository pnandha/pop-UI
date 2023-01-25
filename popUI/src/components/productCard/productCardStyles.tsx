import { ImageBackground, StyleSheet } from 'react-native'

const productCardStyles = StyleSheet.create({
    back :{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FF781F',
        margin: '5%',
    },
    container: {
        flexGrow: 1,
        backgroundColor : '#F9F9F9',
    },

    header: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#266CCF',
        margin: "5%",
        width: '50%'
    },

    header2: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#266CCF',
        margin: "5%"
    },
    image: {
        aspectRatio: 1 , 
        width: undefined, 
        height: undefined,
        resizeMode: 'contain',
    },
    productContainer: {  
        display: 'flex',
        flexDirection: 'column',
        height: '90%',
    },
    productBody: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF781F',
        margin: "5%",
    },
    revealContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    revealButton: {
        padding: 30,
        fontSize: 25,
        color: "#FF781F",
        fontWeight: "bold",
    },
    headerContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    modalContainer: {
      display: 'flex',
      justifyContent: 'center',
      height: "80%",
      width: '100%',
      },
      largeImage: {
        aspectRatio: 2, 
        width: undefined, 
        height: undefined,
        resizeMode: 'contain',
      },
      mapView: {
        width: "90%",
        alignSelf: 'center',
        height: 200,
        padding: 20,
      }
}
    )

export default productCardStyles