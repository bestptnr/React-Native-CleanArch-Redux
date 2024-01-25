import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { COLORS, SIZES } from "../../constants";
import { StackNavigation } from "../../routes/AppNavigation";
import { TextButton } from "../../components";

const ProductDetailScreen = () => {
    const route = useRoute<any>();
    const navigation = useNavigation<StackNavigation>();
    console.info("info >>> product >>>", route?.params.product);
    const product = route.params?.product;
    useEffect(() => {
        navigation.setOptions({
            title: route.params?.product.title,
        });
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: COLORS.white,
                    paddingHorizontal: SIZES.margin,
                }}
            >
                <Image
                    source={{ uri: route.params?.product.thumbnail }}
                    style={{
                        width: "100%",
                        height: 200,
                        resizeMode: "cover",
                        borderRadius: SIZES.margin,
                        marginTop: SIZES.margin,
                    }}
                />
                <View style={{ marginTop: SIZES.margin }}>
                    <View
                        style={{ flexDirection: "row", justifyContent: "space-between" }}
                    >
                        <Text style={styles.heading}>Product name : {product.title}</Text>
                        <Text style={styles.heading}>Price : {product.price}$</Text>
                    </View>
                    <Text style={{ marginTop: SIZES.base }}>
                        Description: {product.description}
                    </Text>
                </View>
            </ScrollView>
            <View style={{ padding: SIZES.margin, backgroundColor: COLORS.white }}>
                <TextButton
                    onPress={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                    containerStyle={{
                        backgroundColor: COLORS.bluepurple
                    }}
                    label={"Add to cart"}
                    labelStyle={{
                        color: COLORS.white
                    }}
                />
                <TextButton
                    onPress={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                    label={"View Cart"}
                    labelStyle={{
                        color: COLORS.white
                    }}
                    containerStyle={{
                        marginTop: SIZES.margin,
                        backgroundColor: COLORS.bluepurple
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
    heading: {
        fontSize: SIZES.h4,
        fontWeight: "bold",
    },
});
