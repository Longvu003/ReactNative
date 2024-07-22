import { Image, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'

export const Header = memo(props => {
    const { user } = props
    console.log('re-render header')
    return (
        <View style={({
            height: 100,
            backgroundColor: 'white',
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
            width: 500
        })}>
            <Image
                resizeMode='center'
                style={styles.img}
                source={{ uri: user.img }}
            />
            <View style={{ marginLeft: 50 }}>
                <Text>Chào ngày mới</Text>
                <Text style={styles.name}>{user.name}</Text>
            </View>
        </View>
    )
})

export default Header

const styles = StyleSheet.create({})