import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import landingStyles from './landingStyles'

const Landing = () => {


    return (
        <View>
        <SafeAreaView style={{ flex:0, backgroundColor: '#EAEAEA' }}  />
        <View style={landingStyles.container}>
            <Text style={landingStyles.header}>one mans rubbish is another mans treasure</Text>
            <TouchableOpacity
            style={landingStyles.registerButton}
            >
            <Text style={landingStyles.registerButtonText}>Register Here</Text>
            </TouchableOpacity>
            <Text style={landingStyles.signInText}>Already have an account sign in here</Text>
        </View>
        </View>
    )
}

export default Landing