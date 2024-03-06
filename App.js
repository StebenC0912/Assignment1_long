import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./src/screens/startGameScreen";
import EnterNumber from "./src/screens/enterNumber";
import MainGameScreen from "./src/screens/mainGameScreen";
import EndGameScreen from "./src/screens/endGameScreen";
const stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <stack.Screen name="Welcome" component={WelcomeScreen} />
        <stack.Screen name="EnterNumber" component={EnterNumber} />
        <stack.Screen name="MainGameScreen" component={MainGameScreen} />
        <stack.Screen name="EndGameScreen" component={EndGameScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
