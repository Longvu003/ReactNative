import { StyleSheet } from 'react-native'
const StyleSignup = StyleSheet.create({
    imgEye: {
        position: 'absolute',
        alignSelf: 'flex-end',
        bottom: 30

    },
    txtErrors: {
        color: 'red'
    },
    txtrememberAcc: {
        fontSize: 11,
        fontWeight: '500',
        marginLeft: 7
    },
    txtSignup: {
        marginHorizontal: 5,
        fontSize: 12,
        color: '#000',
        fontWeight: '400'
    },
    imgLogin: {
        width: 32,
        height: 32
    }
    ,
    imgLine: {
        width: 150
    },
    txtLogin: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
    },
    btnLogin: {
        backgroundColor: 'green',
        alignItems: 'center',
        width: 380,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center'
    },
    txtCondition: {
        marginHorizontal: 90,
        marginTop: 20
    },
    input: {
        width: 380,
        height: 46,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    txt2: {
        fontSize: 18,
        fontWeight: '400',
        color: '#000',
    },
    txtChao: {
        fontSize: 30,
        fontStyle: 'normal',
        fontWeight: '700',
        color: '#000',
        height: 40,
    },
    container: {
        flexDirection: 'column'
    }

})
export default StyleSignup