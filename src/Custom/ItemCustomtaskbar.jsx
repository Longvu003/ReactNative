import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const itemCustomtaskbar = ({ leftIcon, header, rightIcon }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container} >
            {
                leftIcon ? (
                    <TouchableOpacity style={styles.iconSize} onPress={() => navigation.goBack()} >
                        <Image source={leftIcon} />
                    </TouchableOpacity>
                )
                    : <View>
                    </View>
            }

            {
                header ? (
                    <Text style={styles.txtHeader}>{header}</Text>
                ) :
                    <View></View>
            }

            {
                rightIcon ? (
                    <TouchableOpacity style={styles.iconSize}>
                        <Image source={rightIcon} />
                    </TouchableOpacity>
                )
                    : <View>
                    </View>
            }

        </View>
    )
}

export default itemCustomtaskbar

const styles = StyleSheet.create({

    txtHeader: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000'
    },
    iconSize: {
        width: 20,
        height: 30
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginHorizontal: 24
    }

})