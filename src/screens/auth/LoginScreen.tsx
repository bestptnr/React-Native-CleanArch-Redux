import { StyleSheet, View, SafeAreaView, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS, IMAGES, SIZES } from '../../constants'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/slices/authSlice'
import { AppDispatch } from '../../redux/store'
import { AuthState } from '../../types/Auth'
import { TextButton } from '../../components'

const LoginScreen = () => {
    const [username, setUsername] = useState<string>('kminchelle');
    const [password, setPassoword] = useState<string>('0lelplR');
    const dispatch = useDispatch<AppDispatch>()
    const { isLoading } = useSelector((state: AuthState) => state.auth);

    async function handleLogin() {
        const params = {
            username: username,
            password: password
        }
        dispatch(login(params))
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white, }}>
            <View style={styles.container}>
                <Image
                    source={IMAGES.logo}
                    style={{
                        width: 250,
                        height: 250,
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}
                />
                <TextInput
                    value={username}
                    style={styles.input}
                    placeholder='Username'
                    onChangeText={(e: string) => setUsername(e)}
                />
                <TextInput
                    value={password}
                    style={styles.input}
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={(e: string) => setPassoword(e)}

                />
                <TextButton
                    label='Login'
                    labelStyle={{
                        color: COLORS.white,
                        fontSize: 20,

                    }}
                    containerStyle={{
                        backgroundColor: COLORS.bluepurple,
                        margin:SIZES.margin
                    }}
                    onPress={handleLogin}
                    isLoading={isLoading}
                />
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: 100
    },
    input: {
        borderWidth: 1,
        borderColor: "grey",
        marginHorizontal: SIZES.margin,
        marginTop: SIZES.padding,
        borderRadius: SIZES.base,
        height: 48,
        padding: SIZES.base,
        color: COLORS.black
    },
    login: {
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.margin,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.green,
        height: 48,
        borderRadius: SIZES.base
    }
})