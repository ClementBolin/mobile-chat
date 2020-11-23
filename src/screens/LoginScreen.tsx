import React, { useState } from 'react'
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

export const LoginScreen = ({ navigation }) => {
    const [name, setName] = useState("");

    const continueChat = () => {
        navigation.navigate("Chat", {name: name})
    }

    return (
        <View style={styles.container}>
            <View style={styles.circle} />
            <View style={{marginTop: 90}}>
                <Image
                    source={require('../../assets/chat.png')}
                    style={{width: 150, height: 150, alignSelf: "center"}}
                />
            </View>
            <View style={{marginHorizontal: 22, marginTop: 70}}>
                <Text style={styles.header}>Username</Text>
                <TextInput
                    style={styles.input}
                    placeholder="username"
                    onChangeText={input => setName(input)}
                    value={name} 
                />
                <View style={{marginTop: 50, alignItems: "flex-end"}}>
                    <TouchableOpacity onPress={continueChat} style={styles.contiueButton}>
                        <AntDesign name="arrowright" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F5F7"
    },
    circle: {
        width: 500,
        height: 500,
        borderRadius: 500 / 2,
        backgroundColor: "#FFF",
        position: "absolute",
        left: -90,
        top: 40
    },
    header: {
        fontSize: 50,
        fontWeight: "800"
    },
    input: {
        marginTop: 10,
        paddingLeft: 8,
        height: 50,
        borderColor: "#B4B7C3",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 30
    },
    contiueButton: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: "#9032E4",
        alignItems: "center",
        justifyContent: "center"
    }
})
