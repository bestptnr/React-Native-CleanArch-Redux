import {
    StyleSheet,
    Text,
    View,
    StyleProp,
    TextStyle,
    ViewStyle,
    TouchableOpacity,
    Image,
} from "react-native";
import React from "react";
import { Double } from "react-native/Libraries/Types/CodegenTypes";
import { COLORS, SIZES } from "../../constants";
import { AntDesign } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../routes/AppNavigation";

type CardProduct = {
    onPress: () => void;
    title: string;
    titleStyle?: StyleProp<TextStyle>;
    description: string;
    descriptionStyle: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    price: Double;
    thumbnail: string;
    discountPercentage: Double;
    rating: Double;
    brand: string;
    category: string;
};

const CardProduct = ({
    title,
    titleStyle,
    description,
    descriptionStyle,
    containerStyle,
    price,
    thumbnail,
    rating,
    category,
    brand,
    discountPercentage,
    onPress,
}: CardProduct) => {
    const navigation = useNavigation<StackNavigation>()
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("ProductDetailScreen", {
                product: {
                    title,
                    titleStyle,
                    description,
                    descriptionStyle,
                    containerStyle,
                    price,
                    thumbnail,
                    rating,
                    category,
                    brand,
                    discountPercentage,
                }
            })
        }}>
            <View style={styles.cardBody}>
                <Image
                    source={{ uri: thumbnail }}
                    style={{
                        width: '48%',
                        height: 150,
                        borderRadius: 4
                    }}

                />
                <View style={{ width: '48%', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ fontSize: SIZES.h4, fontWeight: 'bold' }}>{title}</Text>
                        <Text numberOfLines={1}>Brand : {brand}</Text>
                        <Text style={styles.dsc} numberOfLines={3}>{description}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <AntDesign name="star" size={16} color="rgba(247, 185, 0,1)" />
                            <Text style={{ fontSize: SIZES.h6 }}>{rating}</Text>
                        </View>
                    </View>
                    <View>
                        <Text>Price : {price}$ </Text>
                        {/* <Text>Save : {discountPercentage}</Text> */}
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    );
};

export default CardProduct;

const styles = StyleSheet.create({
    cardBody: {

        padding: SIZES.margin,
        marginTop: SIZES.margin,
        borderRadius: SIZES.base,
        borderWidth: 1,
        borderColor: COLORS.lightpurple,
        flexDirection: 'row',
        gap: SIZES.margin
    },
    dsc: {
        color: COLORS.grey,
        fontSize: SIZES.h6,
    }
});
