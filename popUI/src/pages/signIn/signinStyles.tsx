import { ImageBackground, StyleSheet } from 'react-native'

const signinStyles = StyleSheet.create({
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
        display: 'flex',
        flexDirection: 'column',
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
    },
    errorStyle: {
        color: 'red',
        marginTop: 15,
    },
    enterText: {
        marginBottom: 0,
        height: 40,
        borderColor: "#F50057",
        borderBottomWidth: 1,

    }
}
    )

export default signinStyles