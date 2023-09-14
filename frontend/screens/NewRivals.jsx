import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './newRivals.style'
import { Ionicons } from '@expo/vector-icons'
import { COLORS, SIZES} from "../constants"
import { useRoute } from '@react-navigation/native'
import ProductList from '../components/products/ProductList'

const NewRivals = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wapper}>
                <View style={styles.upperRow}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name='chevron-back-circle' size={30} color={COLORS.lightWhite}/>
                    </TouchableOpacity>

                    <Text style={styles.heading}> Products </Text>
                </View>

                <ProductList/>
            </View>
        </SafeAreaView>
    )
}

export default NewRivals