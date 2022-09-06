import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import landingStyles from './landingStyles'
import ExploreSvg from '../../assets/images/landing/explore.svg'
import { useNavigation } from '@react-navigation/native';

const Landing = () => {
    const navigation = useNavigation();
    const goToRegister = () => {
        navigation.navigate("Register" as never, {} as never);
    }
    const goToSignIn = () => {
        navigation.navigate("SignIn" as never, {} as never);
    }

    return (
        <View>
        <SafeAreaView style={{ flex:0, backgroundColor: '#EAEAEA' }}  />
        <View style={landingStyles.container}>
            <Text style={landingStyles.header}>one mans rubbish is another mans treasure</Text>
            <ExploreSvg  height={450} width={375}/>
            <TouchableOpacity
            onPress={() => goToRegister()}
            style={landingStyles.registerButton}
            >
            <Text style={landingStyles.registerButtonText}>Register Here</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => goToSignIn()}
            >
                <Text style={landingStyles.signInText}>
                Already have an account sign in here
                </Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}

export default Landing