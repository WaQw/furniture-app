import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './cart.style'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import { COLORS } from '../constants'

const Cart = ({navigation}) => {
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
        </SafeAreaView>
    )
}

export default Cart