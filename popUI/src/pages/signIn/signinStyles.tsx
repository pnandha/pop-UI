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
        color: '#F50057',
        marginTop: '5%',
        marginLeft: '5%',
        marginRight: '5%',
    },
    back :{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#F50057',
        marginLeft: '5%',
        marginRight: '5%',
    },
    input: {
        height: 40,
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '5%',
        borderWidth: 1,
        borderColor: '#F50057',
        padding: 10,
      },
})

export default signinStyles