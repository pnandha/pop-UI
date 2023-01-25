import { ImageBackground, StyleSheet } from 'react-native'

const likedStyles = StyleSheet.create({
    container: {
        backgroundColor : '#F9F9F9',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    header :{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FF781F',
        marginTop: '10%',
        marginLeft: '5%',
        marginRight: '5%',
    },
    card: {
        display: 'flex',
        position: "relative",
        textAlign: "center",
        flexDirection: 'column',
        height: 300,
        marginVertical: 25,
        marginHorizontal: 25,
        borderRadius: 10,
        backgroundColor: "white",
        shadowColor: "#FF781F",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 5,
        shadowRadius: 2,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },
    cardTextHeader: {
        position: "absolute",
        top: 8,
        backgroundColor: '#266CCF',
        left: 16,
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        textShadowColor: 'black',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
        width: "90%",

    },
    cardTextBody: {
        position: "absolute",
        bottom: 20,
        backgroundColor: '#266CCF',
        left: 16,
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        textShadowColor: 'black',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
        width: "90%",
    },
    paginationContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
    },
    paginationButton: {
        color: 'white',
        padding: 10,
        borderRadius: 15,
        widht: '20%',
        margin: '5%',
    },
    paginationButtonText: {
        color: '#FF781F',
        textAlign: 'center', 
        fontWeight: 'bold',
        fontSize: 20,
    },
    paginationText: {
        color: '#FF781F',
        textAlign: 'center', 
        fontWeight: 'bold',
        fontSize: 20,
    },
})

export default likedStyles
