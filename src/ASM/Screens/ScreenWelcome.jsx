import { Text, View, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useState } from 'react'
import StyleScreen1 from '../component/StyleScreen1'
const ScreenWelcome = (props) => {
    const { navigation } = props
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [checkPass, setCheckpass] = useState(false)
    const funCheckPass = () => {
        setCheckpass(!checkPass)

    }
    const validate = () => {
        let errors = {}
        if (!name) errors.name = "Please fill Name"
        if (!password) errors.password = "Please fill password"
        setErrors(errors)
        return Object.keys(errors).length === 0
    }
    const funLogin = () => {
        if (validate()) {
            navigation.navigate('Signup')
            console.log('Login Successfully')
        }
    }
    return (
        <View>
            <View>
                <Image style={{ width: '100%', height: 380 }} source={require('../../../Assets/images/Background.png')} />
            </View>

            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Text style={StyleScreen1.txtChao} >Welcome</Text>
                <Text style={StyleScreen1.txt2}>Login account</Text>
            </View>
            <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                <TextInput style={StyleScreen1.input}
                    value={name}
                    placeholder='fill Name or Phone'
                    onChangeText={setName}
                />
                <View>
                    <Text >
                        {errors.name ? <Text style={StyleScreen1.textErrors}>{errors.name}</Text> : null
                        }
                    </Text>
                </View>
                <TextInput style={StyleScreen1.input}
                    value={password}
                    placeholder='fill Password'
                    onChangeText={setPassword}
                    secureTextEntry={!checkPass}
                />
                <TouchableOpacity onPress={funCheckPass} >
                    <Image
                        source={
                            checkPass ? require('../../../Assets/images/eyeClose.png') : require('../../../Assets/images/eyeOpen.png')
                        }
                        style={StyleScreen1.imgEye} />
                </TouchableOpacity>
                <View>
                    <Text>
                        {errors.password ? <Text style={StyleScreen1.textErrors}>{errors.password}</Text> : null
                        }
                    </Text>
                </View>
            </View>
            <View style={StyleScreen1.checkAcc}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../../Assets/images/check.png')} />
                    <TouchableOpacity>
                        <Text style={StyleScreen1.txtrememberAcc}>
                            Remember account
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={[StyleScreen1.txtrememberAcc, { color: '#009245' }]}>
                        Forgot Password ?
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', marginVertical: 25 }}>
                <TouchableOpacity style={StyleScreen1.btnLogin} onPress={funLogin}>
                    <Text style={StyleScreen1.txtLogin}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Image style={StyleScreen1.imgLine} source={require('../../../Assets/images/Line.png')} />
                <Text style={StyleScreen1.txtHoac}>Or</Text>
                <Image style={StyleScreen1.imgLine} source={require('../../../Assets/images/Line.png')} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 44, marginHorizontal: 100 }}>
                <Image style={StyleScreen1.imgLogin} source={require('../../../Assets/images/gg.jpg')} />
                <Image style={StyleScreen1.imgLogin} source={require('../../../Assets/images/fb.png')} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 30 }}>
                <TouchableOpacity>
                    <Text style={StyleScreen1.txtHoac}>Do you have an account?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={[StyleScreen1.txtHoac, { color: '#009245' }]} >Create account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default ScreenWelcome

