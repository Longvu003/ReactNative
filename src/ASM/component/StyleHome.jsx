import { StyleSheet } from 'react-native'
const StyleHome = StyleSheet.create({
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    Item: {
        width: 155,
        height: 217,
        backgroundColor: '#f6f6f6',
        borderRadius: 10,
        marginHorizontal: 24
    },
    txtNameItem: {
        color: 'black',
        fontWeight: '500',
        fontSize: 16
    },
    txtPrice: {
        color: '#009245',
        fontSize: 24,
        fontWeight: '500',
    },
    txtCategory: {
        color: '#7D7B7B',
    },
    imgItem: {
        width: 155,
        height: 134
    },
    btnIconCart: {
        width: 48,
        height: 48,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
    },
    header: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 31,
    },
    txtHeader: {
        fontSize: 24,
        fontWeight: '500',
        width: 223,
        height: 77,
        color: 'black',
    },
    imgBackground: {
        width: "100%",
        height: 205,

    }
})
export default StyleHome