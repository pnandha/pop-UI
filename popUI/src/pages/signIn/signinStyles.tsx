import { ImageBackground, StyleSheet } from 'react-native'

const signinStyles = StyleSheet.create({
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
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "space-around"
    },
    header: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#266CCF',
    },
    textInput: {
        display: 'flex',
        flexDirection: 'column',
    },
  registerButton : {
        backgroundColor : '#FF781F',
        color: 'white',
        padding: 10,
        borderRadius: 15
        },
    registerButtonText : {
        color: 'white',
        textAlign: 'center', 
        fontWeight: 'bold',
        fontSize: 20,
    },
    errorStyle: {
        color: 'red',
        marginTop: 15,
    },
    enterText: {
        marginBottom: 0,
        height: 40,
        borderColor: "#FF781F",
        borderBottomWidth: 1,

    }
}
    )

export default signinStyles