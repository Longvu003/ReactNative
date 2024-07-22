import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import Footer from './Footer'
import Header from './Header'
import Body from './Body'
import { useState, useEffect } from 'react'

export const Main = () => {
    const [user, setUser] = useState({
        name: 'ko xác định',
        img: "https://taoanhdep.com/wp-content/uploads/2023/08/lam-net-anh.jpg"
    })
    const [time, setTime] = useState('Chưa có thông tin')
    const [footerColor, setFooterColor] = useState('white')
    const clickUpdate = useCallback(_user => {
        setUser(_user)
    }, [])
    const getrandomcolor = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16)
        return `#${randomColor.padStart(6, '0')}`;
    }
    const changeColorFooter = useCallback(() => {
        const randomcolor = getrandomcolor()
        setFooterColor(randomcolor)
    }, [])
    useEffect(() => {
        const currentDate = new Date();
        const dateTime = currentDate.getDate() + '/' + (currentDate.getMonth() + 1) +
            '/' + currentDate.getFullYear() + "  " + currentDate.getHours() + ':'
            + currentDate.getMinutes() + ':' + currentDate.getSeconds() + '.'
        setTime(dateTime)
    }, [user])
    return (

        <View style={{ flex: 1 }}>
            <View style={{ flex: 3 }}>
                <Header user={user} />
            </View>
            <View style={{ flex: 9 }}>
                <Body
                    onupdateinfor={clickUpdate}
                    onchangeColorFooter={changeColorFooter}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Footer time={time} backgroundColor={footerColor} />
            </View >
        </View>
    )
}

export default Main

const styles = StyleSheet.create({})