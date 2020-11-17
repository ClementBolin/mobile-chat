import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permission from 'expo-permissions';

export const CameraContainer = () => {
    const [hashPermission, setHashPermission] = useState<string>("")
    const [type, setType] = useState(Camera.Constants.Type.back)

    useEffect(() => {
        Permission.askAsync(Permission.CAMERA)
            .then((data) => {
                const { status } = data
                console.log(status)
                setHashPermission(status ? 'granted' : 'error Access')
            })

    }, [])

    switch (hashPermission) {
        case "error Access":
            return (
                <View>
                    <Text>Error we can use your camera</Text>
                </View>
            )
        case "granted":
            return (
                <View style={{ flex: 1 }}>
                    <Camera style={{ flex: 1 }} type={type}>

                    </Camera>
                </View>
            )
        default:
            return (
                <View>

                </View>
            )
    }
}
