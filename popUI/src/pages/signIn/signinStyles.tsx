import { ImageBackground, StyleSheet } from 'react-native'


const signinStyles = StyleSheet.create({
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
        color: '#231942',
        marginTop: '5%',
        marginLeft: '5%',
        marginRight: '5%',
    },
    back :{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#231942',
        marginLeft: '5%',
        marginRight: '5%',
    },
    input: {
        height: 40,
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '5%',
        borderWidth: 1,
        borderColor: '#231942',
        padding: 10,
      },
})

export default signinStyles