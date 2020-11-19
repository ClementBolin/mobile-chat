import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Camera, CameraPictureOptions } from 'expo-camera';
import { Entypo } from '@expo/vector-icons';
import * as Permission from 'expo-permissions';
import { OCRDetection } from '../services/ocr';

export const CameraContainer = () => {
    const [hashPermission, setHashPermission] = useState<string>("")
    const [type, setType] = useState(Camera.Constants.Type.back)
    const inputCamera = useRef<Camera>(null)

    const takePicture = async () => {
        if (inputCamera) {
            const pictureOption: CameraPictureOptions = {
                base64: true,
            }
            let picture = await inputCamera.current?.takePictureAsync(pictureOption);
            OCRDetection(picture?.base64)
        }
    }

    useEffect(() => {
        Permission.askAsync(Permission.CAMERA)
            .then((data) => {
                const { status } = data
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
                <View style={styles.container}>
                    <Camera style={styles.camera} type={type} ref={inputCamera}>
                        <View style={styles.CameraButton}>
                            <TouchableOpacity style={styles.opacity} onPress={takePicture}>
                                <Entypo name="circle" style={styles.icons} />
                            </TouchableOpacity>
                        </View>
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

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    CameraButton: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 20
    },
    icons: {
        color: "white",
        fontSize: 50,
    },
    opacity: {
        alignSelf: "flex-end",
        alignItems: "center",
        backgroundColor: "transparent",
    },
    camera: {
        display: "flex",
        flex: 1,
    }
})
