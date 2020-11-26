import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, StyleSheet, Platform, KeyboardAvoidingViewBase } from 'react-native'
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import firebase from 'firebase';
import 'firebase/firestore';
import { SafeAreaView } from 'react-navigation';
import { IScreenNavigation } from './models/navigation.model';

export const ChatScreen = ({ navigation }: IScreenNavigation) => {
    const db = firebase.firestore()
    const chatRef = db.collection('chats')
    const [messages, setMessages] = useState([]);
    const [actualUser, setActualUser] = useState({
        _id: "Hello",
        name: navigation.state.params.name
    })

    useEffect(() => {
        console.log(`name account use = ${navigation.state.params.name}`)
        const unsubscribe = chatRef.onSnapshot(querySnapshot => {
            const messageFirestore = querySnapshot
                .docChanges().filter(({type}) => type === 'added')
                .map(({doc}) => {
                    const message = doc.data()
                    return {...message, createdAt: message.createdAt.toDate()}
                })
                .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
            appendMessages(messageFirestore)
        })
    }, [])

    const appendMessages = useCallback((messages) => {
        setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
    }, [messages])

    const handleSend = async (myMessage: IMessage[]) => {
        const writes = myMessage.map(m => chatRef.add(m))
        await Promise.all(writes)
    }

    const chat = <GiftedChat messages={messages} user={actualUser} onSend={handleSend} />

    return (
        <SafeAreaView style={{flex: 1}}>
            {chat}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
