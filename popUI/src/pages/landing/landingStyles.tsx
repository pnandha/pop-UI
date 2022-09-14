import { ImageBackground, StyleSheet } from 'react-native'

const landingStyles = StyleSheet.create({
    container: {
        backgroundColor : '#EAEAEA',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    header :{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#F50057',
        marginTop: '10%',
        marginLeft: '5%',
        marginRight: '5%',
    },
    registerButton : {
        backgroundColor : '#F50057',
        color: 'white',
        marginLeft: '5%',
        marginRight: '5%',
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
        color: '#F50057',
        marginTop: '8%',
        marginLeft: '5%',
        marginRight: '5%',
    },
})

export default landingStyles
