import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CameraContainer } from './src/container/Camera';

const Home2 = () => {
  return (
    <View style={styles.container}>
      <Text>Hello in Home 2</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {              
              switch (route.name) {
                case "Camera":
                  return <Entypo name={focused ?  'camera' : 'camera'} size={size} color={color} />
                case "Gallery":
                  return <AntDesign name={focused ?  'picture' : 'picture'} size={size} color={color} />
                default:
                  return <AntDesign name={focused ?  'picture' : 'picture'} size={size} color={color} />
              }
            }
          })}
          tabBarOptions={{
            activeTintColor: '#D50000',
            inactiveTintColor: 'gray'
          }}
        >
          <Tab.Screen name="Camera" component={CameraContainer} />
          <Tab.Screen name="Gallery" component={Home2} />
        </Tab.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
