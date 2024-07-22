
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ScreenSignup from '../Screens/ScreenSignup';
import Detail from '../Screens/Detail';
import ScreenWelcome from '../Screens/ScreenWelcome';
import TabNavigation from '../Navigation/TabNavigation'
import Cart from '../Screens/Cart'
const Stack = () => {
    const Stack = createStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Welcome" component={ScreenWelcome} />
                <Stack.Screen name="Signup" component={ScreenSignup} />
                <Stack.Screen name="Tab" component={TabNavigation} />
                <Stack.Screen name="Detail" component={Detail} />
                <Stack.Screen name="Cart" component={Cart} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Stack

