import AsyncStorage from "@react-native-async-storage/async-storage";

export const setLocalStorage = async (name: string, value: any) => {
    await AsyncStorage.setItem(name, value);
    console.info("info >>> set storage >>> ", name, value)
};
export const getLocalStorage = async (name: string) => {
    const value = await AsyncStorage.getItem(name);
    console.info("info >>> get storage >>> ", name, value)
    return value;
};
export const removeLocalStorage = async (name: string) => {
    const value = await AsyncStorage.removeItem(name);
    console.info("info >>> remove storage >>> ", name)
    return value;
};