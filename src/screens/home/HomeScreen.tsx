import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { CounterState } from '../../types/Counter';
import { increment, decrement } from '../../redux/slices/counterSlice';
import { TextButton } from '../../components';
import { logout } from '../../redux/slices/authSlice';
import { AppDispatch } from '../../redux/store';

const HomeScreen = () => {
    const dispatch = useDispatch<AppDispatch>();
    const count = useSelector((state: CounterState) => state.counter.value);

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ backgroundColor: COLORS.white }}>
                {/* <Text style={styles.textNumber}>{count ? count : 0}</Text>
                <TouchableOpacity style={styles.button} onPress={handleIncrement}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleDecrement}>
                    <Text style={styles.textButton}>-</Text>
                </TouchableOpacity> */}
                <View style={styles.container}>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ex explicabo deserunt at ut aperiam in voluptatibus, accusantium itaque tempore dolor minima obcaecati officiis? Earum, minus sapiente. Molestiae, non dolores?</Text>
                    
                </View>

            </ScrollView>
            <View style={{ backgroundColor: COLORS.white, alignItems: 'center', paddingVertical: SIZES.margin, paddingHorizontal: SIZES.margin }}>
                <TextButton
                    label={"Logout"}
                    onPress={() => {
                        dispatch(logout())
                    }}
                    containerStyle={{
                        width: '100%',
                        backgroundColor: COLORS.primary
                    }}
                    labelStyle={{
                        color: COLORS.white
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {

        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.margin,
    },
    textNumber: {
        fontSize: 32,
    },
    button: {
        backgroundColor: COLORS.primary,
        width: '100%',
        marginTop: SIZES.margin,
        height: 40,
        borderRadius: SIZES.base,
        justifyContent: 'center',
        alignItems: 'center',

    },
    textButton: {
        fontSize: 32,
        color: COLORS.white,
    },
});
