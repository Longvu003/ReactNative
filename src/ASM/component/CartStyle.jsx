import { StyleSheet } from 'react-native'

const CartStyle = StyleSheet.create({

    txtBtn: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff'
    },
    btnPay: {
        flexDirection: 'row',
        backgroundColor: '#007537',
        width: 326,
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 10
    },
    txtpay: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    footer: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    headerQuantity: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 200,
        justifyContent: 'space-between'
    },
    headerChild: {
        flexDirection: 'row',
        height: 107,
        alignItems: 'center'
    }
    ,
    header: {
        flexDirection: 'row',
        flex: 9,
        marginLeft: 23
    },
    sizeBtn: {
        width: 30,
        height: 30
    },
    txtNameItem: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000'
    },
    imgItem: {
        width: 77,
        height: 77
    }

})
export default CartStyle