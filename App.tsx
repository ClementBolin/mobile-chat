import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Hello in Home</Text>
    </View>
  )
}

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
              let iconeName
              
              switch (route.name) {
                case "Home":
                  iconeName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline';
                    break
                case "Home2":
                  iconeName = focused ?  'ios-list-box' : 'ios-list'
                  break
                default:
                  iconeName = ""
                  break
              }
              return <Ionicons name={iconeName} size={size} color={color} />
            }
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray'
          }}
        >
          <Tab.Screen name="Home" component={Home} options={{ tabBarBadge: 3 }} />
          <Tab.Screen name="Home2" component={Home2} />
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