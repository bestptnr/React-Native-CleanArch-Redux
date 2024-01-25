import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "../screens/auth/LoginScreen";
import HomeScreen from "../screens/home/HomeScreen";
import ProductDetailScreen from "../screens/products/ProductDetailScreen";
import CartProductScreen from "../screens/products/CartProductScreen";



import { useSelector } from "react-redux";
import { AuthState } from "../types/Auth";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../constants";


export type ScreenNames = ["HomeScreen", "LoginScreen", "ProductDetailScreen", "CartProductScreen"]
export type RootStackParamList = Record<ScreenNames[number], any>;
export type StackNavigation = NavigationProp<RootStackParamList>;


const Stack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()

function TabNavigation() {
    return (
        <Tabs.Navigator
            screenOptions={({ }) => ({
                tabBarActiveTintColor: COLORS.bluepurple,
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
            <Tabs.Screen
                name="cart"
                component={CartProductScreen}
                options={() => ({
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="shopping-cart" color={color} size={26} />
                    ),
                })}
            />
        </Tabs.Navigator>
    )
}


function AppNavigation() {
    const { userData } = useSelector((state: AuthState) => state.auth);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {userData ? (
                    <Stack.Group>
                        <Stack.Screen
                            component={TabNavigation}
                            name="HomeScreen"
                            options={{
                                title: ""
                            }} />
                        <Stack.Screen
                            component={ProductDetailScreen}
                            name="ProductDetailScreen"
                        />

                    </Stack.Group>
                ) : (<Stack.Screen
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