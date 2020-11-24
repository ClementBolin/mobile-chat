import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Platform, KeyboardAvoidingViewBase } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';
import { SafeAreaView } from 'react-navigation';
import Firebase from '../utils/firebase';

export const ChatScreen = ({ navigation }) => {
    const [messages, setMessages] = useState([]);
    const [actualUser, setActualUser] = useState({
        _id: "",
        name: ""
    })

    const user = () => {
        // return {
        //     _id: Firebase.uid,
        //     name: navigation.state.params.name
        // }
        // setActualUser(Firebase.uid, navigation.state.params.name)
    }

    useEffect(() => {
        Firebase.get((message: any) => setMessages(GiftedChat.append(messages, message)))
    }, [])

    const chat = <GiftedChat messages={messages} onSend={Firebase.send} user={actualUser} />
    if (Platform.OS === "android") {
        return (
            <KeyboardAvoidingViewBase style={{flex: 1}} behavior="padding" keyboardVerticalOffset={30} enabled >
                {chat}
            </KeyboardAvoidingViewBase>
        )
    }
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
