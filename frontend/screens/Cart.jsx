import { TouchableOpacity, Text, View, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './cart.style'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import fetchCart from '../hook/fetchCart'
import { Button, CartTile } from '../components'
import { COLORS } from '../constants'
import { useState } from 'react'

const Cart = ({navigation}) => {
    const {data, loading, error, refetch} = fetchCart();
    const [selected, setSelected] = useState(null);
    const [select, setSelect] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons
                        name='chevron-back-circle'
                        size={30}
                        color={COLORS.primary}
                    />
                </TouchableOpacity>

                <Text style={styles.titleText}>Cart</Text>
            </View>

            {loading ? (<ActivityIndicator />) : (
                <FlatList 
                    data = {data}
                    keyExtractor={(item) => item._id}
                    renderItem={({item}) => <CartTile item={item} onPress={() => {setSelect(!select), setSelected(item)}} select={select}/>}
                />
            )}

            {select === false ? (<View></View>) : (
                (<Button title={'Checkout'} isValid={select} onPress={() => {}} loader={false}/>)
            )}

        </SafeAreaView>
    )
}

export default Cart