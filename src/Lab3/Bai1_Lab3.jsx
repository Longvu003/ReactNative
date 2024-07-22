import { StyleSheet, Text, TouchableOpacity, useAnimatedValue, View } from 'react-native'
import React from 'react'
import { useAnimatedStyle } from 'react-native-reanimated'
const Bai1_Lab3 = () => {
    const transform = useAnimatedValue(1)
    const click = () => {
        transform.value = 500
    }
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: transform.value }]
        }
    })
    return (
        <View>
            <Animated.View style={[styles.box, animatedStyle]} />
            <TouchableOpacity onPress={click}>Click me</TouchableOpacity>
        </View>
    )
}
export default Bai1_Lab3

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'blue'
    }
})