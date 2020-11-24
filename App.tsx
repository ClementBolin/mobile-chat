// @refresh state
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { ChatScreen } from './src/screens/ChatScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { SafeAreaView } from 'react-navigation';
import { InitFirebase } from './src/utils/firebase2';
import { YellowBox } from 'react-native';

InitFirebase()
YellowBox.ignoreWarnings(['Setting a timer for a long period of time'])

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
