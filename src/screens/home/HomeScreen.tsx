import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
} from "react-native";
import { COLORS, SIZES } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { TextButton } from "../../components";
import { logout } from "../../redux/slices/authSlice";
import { AppDispatch } from "../../redux/store";
import { getProductList } from "../../redux/slices/productSlice";
import CardProduct from "../../components/card/CardProduct";
import { Product } from "../../types/Product";
import { StackNavigation } from "../../routes/AppNavigation";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const productList = useSelector((state: any) => state.product.products);
    const navigation = useNavigation<StackNavigation>()

    useEffect(() => {
        dispatch(getProductList())
            .then(() => setIsLoading(true))
    }, []);
    if (!isLoading) {
        return <ActivityIndicator />
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ backgroundColor: COLORS.white }}>
                <View style={styles.container}>
                    {productList?.products.map((item: Product, index: number) => {
                        return (
                            <CardProduct
                                key={index}
                                onPress={() => {
                                    navigation.navigate("ProductDetailScreen", {
                                        product: {
                                            ...item
                                        }
                                    })
                                }}
                                title={item.title}
                                description={item.description}
                                descriptionStyle={{}}
                                price={item.price}
                                thumbnail={item.thumbnail}
                                discountPercentage={item.discountPercentage}
                                rating={item.rating}
                                brand={item.brand}
                                category={item.category}

                            />
                        )
                    })}

                </View>
            </ScrollView>
            <View
                style={{
                    backgroundColor: COLORS.white,
                    alignItems: "center",
                    paddingVertical: SIZES.margin,
                    paddingHorizontal: SIZES.margin,
                }}
            >
                <TextButton
                    label={"Logout"}
                    onPress={() => {
                        dispatch(logout());
                    }}
                    containerStyle={{
                        width: "100%",
                        backgroundColor: COLORS.bluepurple,
                    }}
                    labelStyle={{
                        color: COLORS.white,
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
        width: "100%",
        marginTop: SIZES.margin,
        height: 40,
        borderRadius: SIZES.base,
        justifyContent: "center",
        alignItems: "center",
    },
    textButton: {
        fontSize: 32,
        color: COLORS.white,
    },
});
