import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import StyleHome from '../component/StyleHome'
const data = [
    {
        id: 1,
        name: 'cây chuối',
        category: 'Cây',
        price: '1270000',
        img: require('../../../Assets/images/user.png')
    },
    {
        id: 2,
        name: 'cây chuối',
        category: 'Cây',
        price: '150000',
        img: require('../../../Assets/images/anhbien3.jpg')
    },
    {
        id: 3,
        name: 'cây chuối',
        category: 'Cây',
        price: '120000',
        img: require('../../../Assets/images/anhbien3.jpg')
    },
    {
        id: 4,
        name: 'cây chuối',
        category: 'Cây',
        price: '122000',
        img: require('../../../Assets/images/anhbien3.jpg')
    },
]
const Home = ({ navigation }) => {

    return (
        <ScrollView>
            <View style={{ flex: 10 }}>
                <View style={StyleHome.header}>
                    <Text style={StyleHome.txtHeader}>Planta- tỏa sáng  không gian nhà bạn</Text>
                    <TouchableOpacity style={StyleHome.btnIconCart}
                        onPress={() => navigation.navigate('Cart')}
                    >
                        <Image source={require('../../../Assets/images/Buy.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 4 }}>
                    <Image style={StyleHome.imgBackground} source={require('../../../Assets/images/Background3.png')} />
                </View>
                <View style={{ flex: 1, marginHorizontal: 24 }}>
                    <Text style={StyleHome.txtHeader}>Cây trồng</Text>
                </View>
                <View style={{ flex: 6 }}>
                    <FlatList
                        scrollEnabled={false}
                        data={data}
                        numColumns={2}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <View >
                                <TouchableOpacity style={StyleHome.Item} onPress={() =>
                                    navigation.navigate('Detail', { data: item })
                                }>
                                    <Image style={StyleHome.imgItem} source={item.img} />
                                    <Text style={StyleHome.txtNameItem} >{item.name}</Text>
                                    <Text style={StyleHome.txtCategory} >{item.category}</Text>
                                    <Text style={StyleHome.txtPrice}>{item.price}</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>

            </View>
        </ScrollView >
    )
}
export default Home

