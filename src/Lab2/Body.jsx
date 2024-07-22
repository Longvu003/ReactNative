import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { useState } from 'react'
const Body = memo(props => {
    const { onupdateinfor, onchangeColorFooter } = props
    const [name, setName] = useState('')
    const [linkImg, setLinkImg] = useState("")
    const handleChangeInfor = () => {
        if (name.length > 0 && linkImg.length > 0) {
            onupdateinfor({ name, img: linkImg })
        } else {
            ToastAndroid.show('Không được để trống', ToastAndroid.SHORT)
        }
    }
    return (
        <View>
            <TextInput style={{ borderWidth: 1, marginHorizontal: 30, width: 350, borderRadius: 10, marginVertical: 20 }}
                placeholder='nhập tên'
                value={name}
                onChangeText={setName}
            />
            <TextInput style={{ borderWidth: 1, marginHorizontal: 30, width: 350, borderRadius: 10, marginVertical: 20 }}
                placeholder='nhập đường dẫn ảnh'
                value={linkImg}
                onChangeText={setLinkImg}
            />
            <View style={{ alignItems: 'center' }} >
                <TouchableOpacity style={styles.btn} onPress={handleChangeInfor} >
                    <Text style={styles.txt}>Thay đổi</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.btn} onPress={onchangeColorFooter}>
                    <Text style={styles.txt}>Thay đổi màu footer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
})

export default Body

const styles = StyleSheet.create({
    txt: {
        color: 'black',
        fontSize: 20
    },
    btn: {
        width: 250,
        height: 60,
        backgroundColor: 'aqua',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10
    }

})