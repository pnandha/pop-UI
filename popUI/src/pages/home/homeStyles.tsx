import { ImageBackground, StyleSheet } from 'react-native'

const homeStyles = StyleSheet.create({
    container: {
        backgroundColor : '#F9F9F9',
        width: '100%',
        height: "95%",
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
    catTitles:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FF781F',
    },
    searchbar:{
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "2%",
        marginTop: "5%",
        height: "5%"
    },
    searchInput: {
        color: "black",
        backgroundColor: "#F9F9F9",
        fontWeight: "bold",
        width: "80%",
        height: "100%",
        borderColor: "#FF781F",
        border: "50px",
        padding: 5,
        borderWidth: 5,
        borderRadius: 5, 
    },
    searchHeader: {
        fontSize: 25,
        marginTop: '5%',
        fontWeight: 'bold',
        textAlign: "center",
        color: '#FF781F',
    },
    catContainers: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        fontWeight: 'bold',
        marginTop: '10%',
        marginLeft: '5%',
        marginRight: '5%',
    }

})

export default homeStyles
