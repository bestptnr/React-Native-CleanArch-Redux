import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "../screens/auth/LoginScreen";
import HomeScreen from "../screens/home/HomeScreen";


import { useSelector } from "react-redux";
import { AuthState } from "../types/Auth";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../constants";



const Stack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()

function TabNavigation() {
    return (
        <Tabs.Navigator
            screenOptions={({ }) => ({
                tabBarActiveTintColor: COLORS.primary,
            })}
        >
            <Tabs.Screen
                name="home"
                component={HomeScreen}
                options={() => ({
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" color={color} size={26} />
                    ),
                })}
            />
        </Tabs.Navigator>
    )
}

interface AppNavigationProps {
    isLogin: boolean;
}
function AppNavigation() {
    const { userData } = useSelector((state: AuthState) => state.auth);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {userData ? (<Stack.Screen
                    component={TabNavigation}
                    name="HomeScreen"
                    options={{
                        title: "Home"
                    }}
                />) : (<Stack.Screen
                    component={LoginScreen}
                    name="LoginScreen"
                    options={{
                        headerShown: false
                    }}
                />)}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation