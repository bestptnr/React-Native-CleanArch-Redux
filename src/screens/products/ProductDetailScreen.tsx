import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { COLORS, SIZES } from "../../constants";
import { StackNavigation } from "../../routes/AppNavigation";
import { AddProductModal, TextButton } from "../../components";

const ProductDetailScreen = () => {
    const route = useRoute<any>();
    const navigation = useNavigation<StackNavigation>();
    const [isVisible,setIsVisible] = useState<boolean>(false)
    const product = route.params?.product;
    console.info("info >>> product >>>", route?.params.product);

    useEffect(() => {
        navigation.setOptions({
            title: route.params?.product.title,
        });
    }, []);

    const handleDataFromChild = (data:boolean) =>{
        setIsVisible(data)
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: COLORS.white,
                    paddingHorizontal: SIZES.margin,
                }}
            >
                <AddProductModal isVisible={isVisible} onDataFromChild={handleDataFromChild}/>
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
                        <Text style={[styles.heading, { textAlign: 'right' }]}>Price : {product.price}$</Text>
                    </View>
                    <Text style={{ marginTop: SIZES.base }}>
                        Description: {product.description}
                    </Text>
                </View>
            </ScrollView>
            <View style={{ padding: SIZES.margin, backgroundColor: COLORS.white }}>
                <TextButton
                    onPress={()=>{
                        setIsVisible(prev=>!prev)
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
        flex: 1
    },
});
