import { ImageBackground, StyleSheet } from 'react-native'


const settingsStyles = StyleSheet.create({
    back :{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FF781F',
        margin: '5%',
    },
    container: {
        flex: 1,
        backgroundColor : '#F9F9F9',
    },
    inner: {
        margin: '5%',
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
        height: 40,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        padding: 10,
        marginVertical: '5%',
        fontWeight: 'bold',
    },
    textTitles: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF781F',
        marginVertical: "5%",
    },
    scrollContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        margin: '5%',
       
    },
}
    )

export default settingsStyles