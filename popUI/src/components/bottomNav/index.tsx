import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Octicons';
import Home from '../../pages/home';
import Profile from '../../pages/profile';
import { SafeAreaView, View } from 'react-native';
import CreateProduct from '../../pages/createProduct';
import Liked from '../../pages/liked';

const Tab = createBottomTabNavigator()
Icon.loadFont().then();
const IndexScreen = () => {
        return (
            <Tab.Navigator
              initialRouteName="Homes"
              screenOptions={{ 
                headerShown: false ,
                tabBarActiveTintColor: '#FF781F',
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: { backgroundColor: '#F9F9F9', height: 100, padding: 10}
            }}
            >
              <Tab.Screen
                name="Homes"
                component={Home}
                options={{
                  tabBarLabel: 'Home',
                  unmountOnBlur: true,
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="home" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen
                name="Liked"
                component={Liked}
                options={{
                  tabBarLabel: 'Liked',
                  unmountOnBlur: true,
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="heart" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                  tabBarLabel: 'Profile',
                  unmountOnBlur: true,
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="person" color={color} size={size} />
                  ),
                }}
              />
    
            </Tab.Navigator>
        
         
    )
}

export default IndexScreen