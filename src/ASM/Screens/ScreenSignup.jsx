import { Text, View, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { useState } from 'react'
import StyleSignup from '../component/StyleSignup'
const ScreenSignup = ({ navigation }) => {
    const With = Dimensions.get('window').width
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [checkPass, setCheckPass] = useState(false)
    const funCheckPass = () => {
        setCheckPass(!checkPass)
    }
    const validate = () => {
        let errors = {}
        if (!name) errors.name = "Please fill Name"
        if (!email) errors.email = "Please fill Email"
        if (!phone) errors.phone = "Please fill Phone"
        if (!password) errors.password = "Please fill Password"
        setErrors(errors)
        return Object.keys(errors).length === 0
    }
    const Signup = () => {
        if (validate()) navigation.navigate('Tab')
        console.log('Signup thành công')

    }
    return (
        <View >
            <View style={{ width: "100%", height: '25%' }}>
                <Image source={require('../../../Assets/images/bg2.png')} />
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Text style={StyleSignup.txtChao} >Signup</Text>
                <Text style={StyleSignup.txt2}>Create account</Text>
            </View>
            <View style={{ marginHorizontal: 20, marginVertical: 10 }}>

                <TextInput style={StyleSignup.input}
                    value={name}
                    placeholder='Name'
                    onChangeText={setName}
                />
                <View>
                    <Text>
                        {
                            errors.name ? <Text style={StyleSignup.txtErrors}>{errors.name}</Text> : null
                        }
                    </Text>
                </View>
                <TextInput style={StyleSignup.input}
                    value={email}
                    placeholder='Email'
                    onChangeText={setEmail}
                />
                <View>
                    <Text>
                        {
                            errors.email ? <Text style={StyleSignup.txtErrors}>{errors.email}</Text> : null
                        }
                    </Text>
                </View>
                <TextInput
                    style={StyleSignup.input}
                    value={phone}
                    placeholder='Phone'
                    onChangeText={setPhone}
                />
                <View>
                    <Text>
                        {
                            errors.phone ? <Text style={StyleSignup.txtErrors}>{errors.phone}</Text> : null
                        }
                    </Text>
                </View>
                <TextInput style={StyleSignup.input}
                    value={password}
                    placeholder=' Password'
                    onChangeText={setPassword}
                    secureTextEntry={!checkPass}
                />
                <View>
                    <Text>
                        {
                            errors.password ? <Text style={StyleSignup.txtErrors}>{errors.password}</Text> : null
                        }
                    </Text>
                    <TouchableOpacity onPress={funCheckPass} >
                        <Image
                            source={
                                checkPass ? require('../../../Assets/images/eyeClose.png') : require('../../../Assets/images/eyeOpen.png')
                            }
                            style={StyleSignup.imgEye} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={StyleSignup.txtCondition}>
                <TouchableOpacity>
                    <Text style={[StyleSignup.txtrememberAcc]}>
                        To signup an account, you agree<Text style={{ color: '#009245' }}>Terms & Conditions <Text style={{ color: '#000' }}> and </Text> Privacy Policy</Text>
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', marginVertical: 25 }}>
                <TouchableOpacity style={StyleSignup.btnLogin} onPress={Signup}>
                    <Text style={StyleSignup.txtLogin}>Signup</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Image style={StyleSignup.imgLine} source={require('../../../Assets/images/Line.png')} />
                <Text style={StyleSignup.txtSignup}>Or</Text>
                <Image style={StyleSignup.imgLine} source={require('../../../Assets/images/Line.png')} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 44, marginHorizontal: 100 }}>
                <Image style={StyleSignup.imgLogin} source={require('../../../Assets/images/gg.jpg')} />
                <Image style={StyleSignup.imgLogin} source={require('../../../Assets/images/fb.png')} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
                <TouchableOpacity>
                    <Text style={StyleSignup.txtSignup}>Have account?</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={[StyleSignup.txtSignup, { color: '#009245' }]} >Login</Text>
                </TouchableOpacity>
            </View>

        </View >
    )
}
export default ScreenSignup

