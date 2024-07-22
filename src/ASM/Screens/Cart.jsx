import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ItemCustomtaskbar from '../../Custom/ItemCustomtaskbar'
import CartStyle from '../component/CartStyle'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';

const Cart = ({ navigation }) => {
    // const route = useRoute()
    // const { data } = route.params

    const [checkBox, setCheckBox] = useState(false)
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ flex: 1 }}>
                <ItemCustomtaskbar
                    leftIcon={require('../../../Assets/images/back.png')}
                    header="Giỏ hàng" style={CartStyle.custom}
                    rightIcon={require('../../../Assets/images/delete.png')} />
            </View>
            {/* <Text style={{ textAlign: 'center' }}>Giỏ hàng của bạn đang trống</Text> */}
            <View style={CartStyle.header}>
                <View style={CartStyle.headerChild}>
                    <View style={{ justifyContent: 'center' }}>
                        <BouncyCheckbox />
                    </View>
                    <Image style={CartStyle.imgItem} source={require('../../../Assets/images/anhbien3.jpg')} />
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <Text style={CartStyle.txtNameItem}>Cây xoài</Text>
                        <Text style={[CartStyle.txtNameItem, { color: '#007537' }]}>300.000vnd</Text>
                        <View style={CartStyle.headerQuantity}>
                            <TouchableOpacity>
                                <Image style={CartStyle.sizeBtn} source={require('../../../Assets/images/minusOn.png')} />
                            </TouchableOpacity>
                            <Text>1</Text>
                            <TouchableOpacity>
                                <Image source={require('../../../Assets/images/add.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text>Xóa</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>
            <View style={CartStyle.footer}>
                <View style={CartStyle.txtpay}>
                    <Text>Tạm tính</Text>
                    <Text style={[CartStyle.txtBtn, { color: '#000' }]}>500.0000vnđ</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={CartStyle.btnPay}>
                        <Text style={CartStyle.txtBtn}>Tiến hành thanh toán</Text>
                        <Image source={require('../../../Assets/images/next3.png')} />
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    )
}
export default Cart

