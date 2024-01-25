import { StyleSheet, Text, View, StyleProp, ViewStyle, TextStyle, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from "react";
import { COLORS, SIZES } from '../../constants';

type TextButtonProps = {
    onPress: () => void;
    label: string;
    labelStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    isDisable?: boolean;
    isLoading?: boolean;
}

const TextButton = ({
    onPress,
    label,
    labelStyle,
    containerStyle,
    isDisable = false,
    isLoading = false,
}: TextButtonProps) => {
    return (
        <TouchableOpacity
            disabled={isDisable}
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.green,
                height: 48,
                borderRadius: SIZES.base,
        
                ...(containerStyle as object)
            }}
            onPress={onPress}
        >
            {isLoading ? <ActivityIndicator size={24} color={COLORS.white} style={{position:'absolute',left:16}}></ActivityIndicator> : null}
            <Text style={{ ...(labelStyle as object) }}>{label}</Text>
        </TouchableOpacity>
    );
};

export default TextButton;

const styles = StyleSheet.create({});
