import { ImageBackground, StyleSheet } from 'react-native'

const homeStyles = StyleSheet.create({
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
})

export default homeStyles
