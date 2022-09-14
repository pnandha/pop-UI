import { ImageBackground, StyleSheet } from 'react-native'


const registerStyles = StyleSheet.create({
    back :{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#F50057',
        marginLeft: '5%',
        marginRight: '5%',
    },
    container: {
        flex: 1,
        backgroundColor : '#EAEAEA',
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "space-around"
    },
    header: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#F50057',
    },
    textInput: {
        height: 40,
        borderColor: "#F50057",
        borderBottomWidth: 1,
        marginBottom: 36,
    },
  registerButton : {
        backgroundColor : '#F50057',
        color: 'white',
        padding: 10,
        borderRadius: 15
        },
    registerButtonText : {
        color: 'white',
        textAlign: 'center', 
        fontWeight: 'bold',
        fontSize: 20,
    }}
    )

export default registerStyles