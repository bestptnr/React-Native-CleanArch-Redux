import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { COLORS, SIZES } from '../../constants'
import { StackNavigation } from '../../routes/AppNavigation'


const ProductDetailScreen = () => {
    const route = useRoute<any>()
    const navigation = useNavigation<StackNavigation>()
    console.info("info >>> product >>>", route?.params.product)

    useEffect(() => {
        navigation.setOptions({
            title: route.params?.product.title
        })
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, backgroundColor: COLORS.white, paddingHorizontal: SIZES.margin }}>
                <Image
                    source={{ uri: route.params?.product.thumbnail }}
                    style={{
                        width: '100%',
                        height: 200,
                        resizeMode: 'cover',
                        borderRadius: SIZES.margin,
                        marginTop: SIZES.margin

                    }}
                />
            </ScrollView>
            <View>
                <Text>DSf</Text>
            </View>
        </SafeAreaView>

    )
}

export default ProductDetailScreen

const styles = StyleSheet.create({})