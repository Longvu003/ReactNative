import { StyleSheet, Text, View, SectionList, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const bai1 = () => {
    const List = [
        {
            title: "Lịch trình",
            data: [
                {
                    id: 1,
                    location: "Hồ Tràm vũng tàu",
                    timeBegin: "09:00 AM-12:00 AM , 12/12/2023",
                    vehicle: "bus",
                    time: "09:00 AM - 12:00 AM",
                    img: "https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2024/04/anh-bien.jpg.webp"
                },

            ],
        },
    ]
    const List2 = [
        {
            title: "Khách sạn",
            data: [
                {
                    id: 1,
                    name: "Hồng quỳnh",
                    timeOpen: "12:00 AM",
                    LocationRes: "Đường 12, Hồng Bàng,TP.HCM "
                }
            ],
        }
    ]
    return (
        <View>
            <View >
                <SectionList
                    sections={List}
                    keyExtractor={(index, item) => item + index}
                    renderItem={({ item }) => (
                        <View style={styles.containerSection}>
                            <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
                                <Text>Địa điểm:</Text>
                                <Text style={styles.txtSectionlist}>{item.location}</Text>
                                <Text>Thời gian:</Text>
                                <Text style={styles.txtSectionlist}>{item.timeBegin}</Text>
                                <Text>Phương tiện:</Text>
                                <Text style={styles.txtSectionlist}>{item.vehicle}</Text>
                                <Text>Thời gian:</Text>
                                <Text style={styles.txtSectionlist}>{item.time}</Text>
                                <Text>Hình ảnh:</Text>
                                <Image source={{ uri: item.img }} style={{ height: 200, width: 300, resizeMode: 'cover' }} />
                            </View>

                        </View>
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.txtTitle}>{title}</Text>
                    )}
                />
                <SectionList
                    sections={List2}
                    keyExtractor={(index, item) => item + index}
                    renderItem={({ item }) => (
                        <View style={[styles.containerSection, { height: 250 }]}>
                            <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
                                <Text>Tên khách sạn</Text>
                                <Text style={styles.txtSectionlist}>{item.name}</Text>
                                <Text>Giờ mở cửa</Text>
                                <Text style={styles.txtSectionlist}>{item.timeOpen}</Text>
                                <Text>Địa điểm</Text>
                                <Text style={styles.txtSectionlist}>{item.LocationRes}</Text>
                                <View style={{ alignItems: 'center' }}>
                                    <TouchableOpacity style={styles.btn}>
                                        <Text style={{ color: 'white', fontSize: 20 }}>Chi tiết</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    )}
                    renderSectionHeader={({ section: { title } }) => (

                        <Text style={styles.txtTitle}>{title}</Text>

                    )}
                />
            </View>

        </View >
    )
}
export default bai1

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        backgroundColor: 'aqua',
        height: 50,
        width: 300,
        borderRadius: 10,
        justifyContent: 'center'
    },
    txtSectionlist: {
        color: 'black',
        fontSize: 20,
        marginVertical: 5
    },

    containerSection: {
        backgroundColor: 'white',
        width: 400,
        borderRadius: 20,
        height: 500,
        marginHorizontal: 20,
        shadowColor: 'gray',
        elevation: 8
    },
    txtTitle: {
        fontSize: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        color: 'blue',
    }
})