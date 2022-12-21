import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./src/login";
import HomePage from "./src/home";
import { store } from "./src/store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

const App = () => {
 return(
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name = 'Login'
          component={LoginPage}
          options={{title:'Github stats'}}/>
        <Stack.Screen
          name = 'Home'
          component={HomePage}
          options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
 )
};

export default App;