import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import StyleHome from '../component/StyleHome'
import axios from 'axios'
const BaseUrl = "http://172.16.122.242:3000"
const fetchUser = async () => {
    try {
        const configurationObject = {
            method: 'get',
            url: `${BaseUrl}/getAll`,
        };
        console.log("Making request to:", configurationObject.url); // Log the URL

        const response = await axios(configurationObject);

        console.log(response.data);
    } catch (error) {
        console.log(error)
    }

};
const Home = ({ navigation }) => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetchUser()
    }, [])

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
                                    {/* <Image style={StyleHome.imgItem} source={item.nameProduct} /> */}
                                    <Text style={StyleHome.txtNameItem} >{item.nameProduct}</Text>
                                    {/* <Text style={StyleHome.txtCategory} >{item.category}</Text>
                                    <Text style={StyleHome.txtPrice}>{item.price}</Text>  */}
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

