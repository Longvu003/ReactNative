import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import NotifyTab from '../Tabs/NotifyTab';
import UserTab from '../Tabs/UserTab';
import SearchTab from '../Tabs/SearchTab';
import { NavigationContainer } from '@react-navigation/native';
import IconTab from '../Icon/Iconnavigation';

const TabNavigation = () => {
    const Tab = createBottomTabNavigator()
    return (

        <Tab.Navigator >
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false, tabBarIcon: ({ focused }) => <Image source={IconTab.iconHome} /> }} />
            <Tab.Screen name="Search" component={SearchTab} options={{ headerShown: false, tabBarIcon: ({ focused }) => <Image source={IconTab.iconSearch} /> }} />
            <Tab.Screen name="Notify" component={NotifyTab} options={{ headerShown: false, tabBarIcon: ({ focused }) => <Image source={IconTab.iconNotify} /> }} />
            <Tab.Screen name="User" component={UserTab} options={{ headerShown: false, tabBarIcon: ({ focused }) => <Image source={IconTab.iconUser} /> }} />
        </Tab.Navigator>

    )
}

export default TabNavigation

