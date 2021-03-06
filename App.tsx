// @refresh state
import { LogBox } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { ChatScreen } from './src/screens/ChatScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { InitFirebase } from './src/utils/firebase';

LogBox.ignoreLogs(['Setting a timer'])

InitFirebase()

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Chat: ChatScreen,
  },
  {
    headerMode: "none",
  }
)

export default createAppContainer(AppNavigator)
