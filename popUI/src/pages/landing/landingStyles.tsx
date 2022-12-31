import { ImageBackground, StyleSheet } from 'react-native'

const landingStyles = StyleSheet.create({
    container: {
        backgroundColor : '#F9F9F9',
        width: '100%',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between",
    },
    header:{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#266CCF',
        margin: "5%",
    },
    registerButton : {
        backgroundColor : '#FF781F',
        color: 'white',
        margin: "5%",
        padding: 20,
        borderRadius: 15
        },
    registerButtonText : {
        color: 'white',
        textAlign: 'center', 
        fontWeight: 'bold',
        fontSize: 20,
    },
    signInText: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center', 
        color: '#FF781F',
        margin: "5%",
    },
})

export default landingStyles
