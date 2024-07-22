import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ItemCustomtaskbar from '../../Custom/ItemCustomtaskbar'
import StyleDetail from '../component/StyleDetail'
import { useRoute } from '@react-navigation/native'
const W = Dimensions.get('window').width
const Detail = ({ navigation, route }) => {

    const { data } = route.params
    return (
        <View style={{ flexDirection: 'column', }}>
            <View >
                <ItemCustomtaskbar
                    leftIcon={require('../../../Assets/images/back.png')}
                    header={data.name}
                    rightIcon={require('../../../Assets/images/delete.png')}
                />
            </View>
            {/* image */}
            <View style={{ alignItems: 'center' }}>
                <Image style={StyleDetail.img} source={data.img} />
            </View>
            <View style={StyleDetail.container}>
                <View style={StyleDetail.containerDetail}>
                    <Text style={StyleDetail.txtCategory}>Cây Trồng</Text>
                    <Text style={[StyleDetail.txtCategory, { marginLeft: 8 }]}>Cây</Text>
                </View>
                <Text style={StyleDetail.txtPrice}>{data.price}</Text>
                <Text style={[StyleDetail.txtPrice, { fontSize: 16, color: '#3A3A3A' }]}>Chi tiết sản phẩm</Text>
                <Image style={StyleDetail.imgLine} source={require('../../../Assets/images/line2.png')} />
                <View style={StyleDetail.detailInfor}>
                    <Text >Kích cỡ</Text>
                    <Text >Lớn</Text>
                </View>
                <Image style={StyleDetail.imgLine} source={require('../../../Assets/images/line2.png')} />
                <View style={StyleDetail.detailInfor}>
                    <Text >Xuất xứ</Text>
                    <Text >Châu phi</Text>
                </View>
                <Image style={StyleDetail.imgLine} source={require('../../../Assets/images/line2.png')} />
                <View style={StyleDetail.detailInfor}>
                    <Text >Tình trạng</Text>
                    <Text >125sp</Text>
                </View>
                <Image style={StyleDetail.imgLine} source={require('../../../Assets/images/line2.png')} />
            </View>
            <View style={StyleDetail.containercountItem}>
                <Text>Đã chọn 1 sản phẩm</Text>
                <Text>Tạm tính</Text>
            </View>
            <View style={StyleDetail.footer}>
                <View style={StyleDetail.footerChild}>
                    <TouchableOpacity>
                        <Image source={require('../../../Assets/images/minus.png')} />
                    </TouchableOpacity>
                    <Text>1</Text>
                    <TouchableOpacity>
                        <Image source={require('../../../Assets/images/add.png')} />
                    </TouchableOpacity>
                </View>
                <Text>0đ</Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: 13 }}>
                <TouchableOpacity style={StyleDetail.btn} >
                    <Text style={StyleDetail.txtbtn}>Chọn mua</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Detail

