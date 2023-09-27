import { TouchableOpacity, View, Image, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons'
import { COLORS, SIZES} from "../constants"
import styles from './productDetails.style'
import AddToCart from '../hook/AddToCart'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ProductDetails = ({navigation}) => {

    const route = useRoute();
    const {item} = route.params;

    const [count, setCount] = useState(1);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }

    useEffect(() => {
        checkUser();
    },[]);

    const checkUser = async() => {
        try {
            const id = await AsyncStorage.getItem('id');
            if(id !== null) {
                setIsLoggedIn(true)
                console.log('user logged in')
            } else {
                console.log('user not logged in')
            }
        } catch (error) {
            
        }
    }

    const handlePress = () => {
        if(isLoggedIn === false) {
            navigation.navigate('Login')
        } else {
        
        }
    }

    const handleBuy = () => {
        if(isLoggedIn === false) {
            navigation.navigate('Login')
        } else {
            
        }
    }

    const handleCart = () => {
        if(isLoggedIn === false) {
            navigation.navigate('Login')
        } else {
            AddToCart(item._id, count)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.upperRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='chevron-back-circle' size={30}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress()}>
                    <Ionicons name='heart' size={30} color={COLORS.primary} />
                </TouchableOpacity>
            </View>

            <Image source={{uri: item.imageUrl}} style={styles.image} />

            <View style={styles.details}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.priceWrapper}>
                        <Text style={styles.price}>$ {item.price}</Text>
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
                        {item.description}
                    </Text>
                </View>

                <View style={{marginBottom: SIZES.small}}>
                    <View style={styles.location}>
                        <View style={{flexDirection: "row"}}>
                            <Ionicons name='location-outline' size={20} />
                            <Text>  {item.product_location}</Text>
                        </View>

                        <View style={{flexDirection: "row"}}>
                            <MaterialCommunityIcons name='truck-delivery-outline' size={20} />
                            <Text>  Free delivery   </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.cartRow}>
                    <TouchableOpacity onPress={() => handleBuy()} style={styles.cartBtn}>
                        <Text style={styles.cartTitle}>BUY NOW</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleCart()} style={styles.addCart}>
                        <Fontisto name='shopping-bag' size={22} color={COLORS.lightWhite} />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default ProductDetails