import { ImageBackground, StyleSheet } from 'react-native'

const createProductStyles = StyleSheet.create({
    back :{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FF781F',
        marginLeft: '5%',
        marginRight: '5%',
        backgroundColor: '#F9F9F9'
    },
    scrollContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        margin: '5%',
        height: '96%',
    },
    container: {
        flexGrow: 1,
        backgroundColor : '#F9F9F9',
        marginBottom: '20%'
    },
    header: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#266CCF',
        marginBottom: '5%',
    },
    textTitles: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF781F',
    },
    labelInput: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
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
        marginBottom: 10,
    },
    enterText: {
        height: 40,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        padding: 10,
        marginVertical: '5%',
        fontWeight: 'bold',
    },
    multiLineInput: {
        height: 100,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        padding: 10,
        marginVertical: '5%',
        fontWeight: 'bold',
    },
    dropDownStyle: {
     backgroundColor: 'lightgrey',
     color: 'grey',
     borderWidth: 0,
     fontWeight: 'bold',
     marginVertical: '5%'
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },
    card: {
        display: 'flex',
        position: "relative",
        textAlign: "center",
        backgroundColor: 'lightgrey',
        flexDirection: 'column',
        height: 300,

        marginVertical: 25,
        marginHorizontal: 5,
        borderRadius: 10,
        shadowColor: "#FF781F",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 5,
        shadowRadius: 2,
    },
}
    )

export default createProductStyles