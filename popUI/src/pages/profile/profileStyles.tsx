import { ImageBackground, StyleSheet } from 'react-native'

const profileStyles = StyleSheet.create({
    container: {
        backgroundColor : '#F9F9F9',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    header :{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FF781F',

    },
    headerContainer :{
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "space-between", 
        margin: "5%",
    },
    signOutButton : {
        backgroundColor : '#FF781F',
        color: 'white',
        padding: 10,
        borderRadius: 15,
        margin: '5%',
        },
    signOutButtonText : {
        color: 'white',
        textAlign: 'center', 
        fontWeight: 'bold',
        fontSize: 20,
    },
})

export default profileStyles
