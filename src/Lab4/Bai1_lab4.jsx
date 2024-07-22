import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import axios from 'axios'
const Bai1_lab4 = () => {
    const [image, setImage] = useState(null)
    const [url, setUrl] = useState(null)
    const [imgaeUpdate, setImageUpdate] = useState(null)
    const onCamera = async () => {
        try {
            const options = {
                mediaType: 'photo',
                quanlity: '1',
                cameraType: 'front',
                saveToPhotos: true
            }
            launchCamera(options, async (Response) => {
                if (Response.didCancel) {
                    console.log('User canceled Camera')
                } else if (Response.errorMessage) {
                    console.log('Lỗi', errorMessage)
                } else {
                    setImage(Response.assets[0].uri)
                    // Response.assets[0]
                    await uploadImage(Response.assets[0])
                }
            })

        } catch (errors) {
            console.log(errors)
        }
    }
    const uploadImage = async (image) => {
        try {
            const data = new FormData()
            data.append('file', {
                uri: image.uri,
                type: image.type,
                name: image.fileName,
                fileName: image.fileName
            })
            data.append('upload_preset', 'ml_default')
            axios({
                url: 'https://api.cloudinary.com/v1_1/dhg2svrh0/image/upload',
                method: 'post',
                data,
                headers: {
                    'Content-Type': 'multipart/form-data',
                }, Authorization: '',
            }).then((res) => {
                // console.log('Upload:', res.data)
            }).catch((error) => {
                console.log(error)
            })
        } catch (error) {
            console.log(error)
        }
    }
    const upDateImage = async () => {
        try {
            const options = {
                mediaType: 'photo',
                selectionLimit: 10
            }
            launchImageLibrary(options, async (Res) => {
                if (Res.didCancel) {
                    console.log('canceled upload')
                } else if (Res.errorMessage) {
                    console.log('Lỗi', errorMessage)
                } else {
                    setImageUpdate(Res.assets[0].uri)
                }
            })
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <View style={styles.container} >
            <View style={{ flex: 3 }}>
                {
                    image ? <Image style={styles.image}
                        source={{ uri: image }}

                    /> : <View></View>
                }
                {
                    url ? <Image style={styles.image}
                        source={{ uri: url }}

                    /> : <View></View>
                }
                {
                    imgaeUpdate ? <Image style={styles.image}
                        source={{ uri: imgaeUpdate }}

                    /> : <View></View>
                }
            </View>
            <TouchableOpacity style={styles.btn} onPress={upDateImage}><Text style={styles.txt}>Lấy ảnh từ thư viện</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={onCamera}><Text style={styles.txt}>Chụp ảnh</Text></TouchableOpacity>
        </View>
    )
}

export default Bai1_lab4

const styles = StyleSheet.create({
    txt: {
        color: '#fff'
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 100
    },
    btn: {
        width: 400,
        height: 60,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginVertical: 20,

    },


    container: {
        alignItems: 'center',
        flex: 1
    }

})