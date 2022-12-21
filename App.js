import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./src/login_page";
import HomePage from "./src/home";

const Stack = createNativeStackNavigator();

const App = () => {
 return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name = 'Login'
        component={LoginPage}
        options={{title:'Github stats'}}/>
      <Stack.Screen
        name = 'Home'
        component={HomePage}
        options={{title:'Github stats'}}/>
    </Stack.Navigator>
  </NavigationContainer>
 )
};

export default App;