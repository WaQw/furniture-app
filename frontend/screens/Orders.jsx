import { Text, View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../constants'
import styles from './cart.style'
import fetchOrders from '../hook/fetchOrders'
import OrderTile from '../components/OrderTile'

const Orders = ({navigation}) => {
    const {data, loading, error, refetch} = fetchOrders();
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

                <Text style={styles.titleText}>Orders</Text>
            </View>

            {loading ? (<ActivityIndicator />) : (
                <FlatList 
                    data = {data}
                    keyExtractor={(item) => item._id}
                    renderItem={({item}) => <OrderTile item={item}/>}
                />
            )}
        </SafeAreaView>
    )
}

export default Orders