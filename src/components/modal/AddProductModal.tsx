import { SafeAreaView, StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { COLORS, SIZES } from "../../constants";
import TextButton from "../button/TextButton";

type ProductModal = {
    isVisible: boolean,
    onDataFromChild:(data:boolean)=>void
}
const AddProductModal = ({ isVisible,onDataFromChild }: ProductModal) => {
    
    return (
        <Modal
            isVisible={isVisible}
            style={{ margin: 0, justifyContent: "flex-end" }}
            onBackdropPress={() => {
                onDataFromChild(false)
            }}>
            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.boxProduct}>
                        <Image
                            source={{ uri: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" }}
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: SIZES.margin
                            }}
                        />
                        <View style={{ gap: SIZES.base }}>
                            <Text>Price : 100$</Text>
                            <Text>Stock : 35</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            height: 1, width: '100%',
                            backgroundColor: COLORS.grey,
                            marginVertical: SIZES.margin
                        }} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>Amount</Text>
                        <View style={styles.amount}>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={{ color: COLORS.white }}>-</Text>
                            </TouchableOpacity>
                            <Text style={{ width: 50, textAlign: 'center' }}>1</Text>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={{ color: COLORS.white }}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ padding: SIZES.margin, backgroundColor: COLORS.white }}>
                    <TextButton
                        onPress={() => console.log("CLICK..")}
                        containerStyle={{
                            backgroundColor: COLORS.bluepurple
                        }}
                        label={"Add to cart"}
                        labelStyle={{
                            color: COLORS.white
                        }}
                    />
                </View>
            </SafeAreaView>
        </Modal>
    );
};

export default AddProductModal;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        height: 300,
        borderTopRightRadius: SIZES.padding,
        borderTopLeftRadius: SIZES.padding,
        padding: SIZES.margin
    },
    boxProduct: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: SIZES.margin
    },
    amount: {
        flexDirection: 'row',
    },
    btn: {
        width: 20,
        backgroundColor: COLORS.grey,
        alignItems: 'center'
    }
});
