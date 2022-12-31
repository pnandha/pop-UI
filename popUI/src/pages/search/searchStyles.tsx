import { ImageBackground, StyleSheet } from 'react-native'

const searchStyles = StyleSheet.create({
    back :{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FF781F',
        marginLeft: '5%',
        marginRight: '5%',
    },
    container: {
        flex: 1,
        backgroundColor : '#F9F9F9',
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: "5%",
        marginTop: "2%",
        width: "100%",
        height: 300,
    },
    card: {
        display: 'flex',
        position: "relative",
        textAlign: "center",
        flexDirection: 'column',
        width: "100%",
        marginVertical: 25,
        marginHorizontal: 5,
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
        left: 16,
        fontSize: 15,
        fontWeight: "bold",
        color: "#FF781F",
        textShadowColor: 'white',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
        width: "90%",

    },
    cardTextBody: {
        position: "absolute",
        bottom: 20,
        left: 16,
        fontSize: 15,
        fontWeight: "bold",
        color: "#FF781F",
        textShadowColor: 'white',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
        width: "90%",
    },
}
    )

export default searchStyles