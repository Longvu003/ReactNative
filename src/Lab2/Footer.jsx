import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'

export const Footer = memo(props => {
    const { time, backgroundColor } = props
    return (
        <View
            style={({
                height: 100,
                backgroundColor: backgroundColor,
                alignItems: 'center',
                justifyContent: 'center'
            })}>
            <Text style={styles.text}>Thời gian cập nhật thông tin:{time}</Text>

        </View>
    )
})

export default Footer

const styles = StyleSheet.create({})