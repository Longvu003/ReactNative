import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
const URL = 'https://chungnhanthamgia.io.vn/questionLv1'
const Test1 = () => {
    const [question, setQuestion] = useState([])
    const [answerA, setAnswersA] = useState([])
    const [answerB, setAnswersB] = useState([])
    const [answerC, setAnswersC] = useState([])
    const [answerD, setAnswersD] = useState([])
    // const Question = async () => {
    //     const getQuestion = {
    //         method: 'get',
    //         url: `${URL}/getAllQuestion`
    //     }
    //     const res = await axios(getQuestion)

    //     console.log(res.data)r
    // }
    const QuestionData = async () => {

        try {
            const url = `${URL}/getAllQuestion`;
            const response = await axios.get(url);
            console.log(response);
            if (response.data) {
                setQuestion(response.data.question)
            }
        } catch (error) {

            console.log("false connect", error)

        }

    };

    useEffect(() => {
        QuestionData();

    }, [])


    useEffect(() => {
        console.log("biến question", question)
    }, [question])

    return (
        <View>
            <Text>{question}</Text>

        </View>
    )
}

export default Test1

const styles = StyleSheet.create({})