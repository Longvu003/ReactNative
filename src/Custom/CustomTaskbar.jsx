import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemCustomtaskbar from './ItemCustomtaskbar'
const CustomTaskbar = () => {
    return (
        <View style={{ marginVertical: 20 }}>

            <ItemCustomtaskbar
                leftIcon={require('../../Assets/images/cart.png')}
                header="Trang chủ"
                rightIcon={require('../../Assets/images/search.png')}
            />
            <ItemCustomtaskbar

                header="Trang chủ"
                rightIcon={require('../../Assets/images/search.png')}
            />

            <ItemCustomtaskbar
                leftIcon={require('../../Assets/images/cart.png')}

                rightIcon={require('../../Assets/images/search.png')}
            />




        </View>
    )
}

export default CustomTaskbar

const styles = StyleSheet.create({})