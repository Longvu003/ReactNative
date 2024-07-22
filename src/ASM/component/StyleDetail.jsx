import { Dimensions, StyleSheet } from 'react-native'
const W = Dimensions.get('window').width
const StyleDetail = StyleSheet.create({
    detailInfor: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtbtn: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500'
    },
    btn: {
        backgroundColor: '#007537',
        borderRadius: 8,
        width: 327,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%'
    },
    footerChild: {
        flexDirection: 'row',
        marginHorizontal: 29,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 130
    },
    containercountItem: {
        flexDirection: 'row',
        marginHorizontal: 29,
        justifyContent: 'space-between'
    },
    imgLine: {
        width: 320,
        marginVertical: 15
    },
    containerDetail: {
        flexDirection: 'row',
        marginTop: 15,
        width: W * 1,
    },
    container: {
        marginVertical: 15,
        marginHorizontal: 48
    },
    txtPrice: {
        color: '#009245',
        fontSize: 24,
        fontWeight: '500',
        width: W * 1
    },
    txtCategory: {
        backgroundColor: '#009245',
        color: 'white',
        width: 76,
        height: 28,
        textAlign: 'center',
        borderRadius: 4
    },
    img: {
        width: 337,
        height: 270,
    }
})
export default StyleDetail