import React, { useState } from 'react'
import { StyleSheet, View, Image, Text, TextInput } from 'react-native'

export const LoginScreen = ({ navigation }) => {
    const [name, setName] = useState("");

    const continueChat = () => {
        navigation.navigate("Chat", {name: name})
    }

    return (
        <View style={styles.container}>
            <View style={styles.circle} />
            <View style={{marginTop: 80}}>
                <Image
                    source={require('../../assets/chat.png')}
                    style={{width: 150, height: 150, alignSelf: "center"}}
                />
            </View>
            <View style={{marginHorizontal: 22, marginTop: 15}}>
                <Text style={styles.header}>Username</Text>
                <TextInput
                    style={styles.input}
                    placeholder="username"
                />
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
    }
})
