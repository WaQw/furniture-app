import { TouchableOpacity, View, Image, Text } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons'
import { COLORS, SIZES} from "../constants"
import p1 from "../assets/images/fn1.jpg"
import styles from './productDetails.style'

const ProductDetails = ({navigation}) => {

    const DEFAULT_IMAGE = Image.resolveAssetSource(p1).uri;
    const [count, setCount] = useState(1)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.upperRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='chevron-back-circle' size={30}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {}}>
                    <Ionicons name='heart' size={30} color={COLORS.primary} />
                </TouchableOpacity>
            </View>

            <Image source={{uri: DEFAULT_IMAGE}} style={styles.image} />

            <View style={styles.details}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>Product</Text>
                    <View style={styles.priceWrapper}>
                        <Text style={styles.price}>$ 660.88</Text>
                    </View>
                </View>

                <View style={styles.ratingRow}>
                    <View style={styles.rating}>
                        {[1,2,3,4,5].map((index) => (
                            <Ionicons key={index} name='star' size={24} color="gold" />
                        ))}

                        <Text style={styles.ratingText}>(4.9)</Text>
                    </View>

                    <View style={styles.rating}>
                        <TouchableOpacity onPress={() => increment()}>
                            <SimpleLineIcons name='plus' size={20} />
                        </TouchableOpacity>
                        <Text style={styles.ratingText}>{count}</Text>
                        <TouchableOpacity onPress={() => decrement()}>
                            <SimpleLineIcons name='minus' size={20} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.descriptionWrapper}>
                    <Text style={styles.description}>Description</Text>
                    <Text style={styles.descText}>
                        "I'll talk to you tomorrow in more detail at our meeting, but I think I've found a solution to our problem. It's not exactly legal, but it won't land us in jail for the rest of our lives either. Are you willing to take the chance?" Monroe asked his partner over the phone.
                    </Text>
                </View>

                <View style={{marginBottom: SIZES.small}}>
                    <View style={styles.location}>
                        <View style={{flexDirection: "row"}}>
                            <Ionicons name='location-outline' size={20} />
                            <Text>  89 McGill St</Text>
                        </View>

                        <View style={{flexDirection: "row"}}>
                            <MaterialCommunityIcons name='truck-delivery-outline' size={20} />
                            <Text>  Free delivery   </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.cartRow}>
                    <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
                        <Text style={styles.cartTitle}>BUY NOW</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {}} style={styles.addCart}>
                        <Fontisto name='shopping-bag' size={22} color={COLORS.lightWhite} />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default ProductDetails