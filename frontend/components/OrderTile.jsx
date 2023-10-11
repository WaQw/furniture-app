import { Image, TouchableOpacity, View, Text } from 'react-native'
import React from 'react'
import styles from '../screens/cart.style'
import { COLORS } from '../constants'

const OrderTile = ({item}) => {
    return (
        <TouchableOpacity style={styles.favContainer(COLORS.secondary)}>
            <View style={styles.imageContainer}>
                <Image 
                    source={{uri: item.cartItem.imageUrl}}
                    style={styles.image}
                />
            </View>

            <View style={styles.textContainer}>
                <Text numberOfLines={1} style={styles.productTxt}>{item.productId.title}</Text>
                <Text numberOfLines={1} style={styles.supplier}>{item.productId.supplier}</Text>
                <Text numberOfLines={1} style={styles.supplier}>${item.productId.price}</Text>
            </View>

            <View style={styles.order}>
                <Text style={styles.productTxt}>{item.payment_status}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default OrderTile