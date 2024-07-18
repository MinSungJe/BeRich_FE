import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SwipeScreen from "./SwipeScreen";
import LoginScreen from "../Login/LoginScreen";
import RegisterScreen from "../Register/RegisterScreen";

const Stack = createNativeStackNavigator()

export default function StackScreen() {
    return(
        <Stack.Navigator initialRouteName="WelcomeInfo" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="WelcomeInfo" component={SwipeScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
        </Stack.Navigator>
    )
}