import { TouchableOpacity, Text, View, Image } from 'react-native'
import React from 'react'
import styles from './productCardView.style'
import p1 from "../../assets/images/fn1.jpg"
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from "../../constants"
import { useNavigation } from '@react-navigation/native'

const ProductCardView = () => {

    const DEFAULT_IMAGE = Image.resolveAssetSource(p1).uri;
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
           <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{uri: DEFAULT_IMAGE}} style={styles.image} />
                </View>

                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>Product</Text>
                    <Text style={styles.supplier} numberOfLines={1}>AnAn Company</Text>
                    <Text style={styles.price}>$3000</Text>
                </View>

                <TouchableOpacity style={styles.addBtn}>
                    <Ionicons name='add-circle' size={35} color={COLORS.primary} />
                </TouchableOpacity>
           </View>
        </TouchableOpacity>
    )
}

export default ProductCardView