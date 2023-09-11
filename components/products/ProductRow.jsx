import { FlatList, Text, View } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants'

const ProductRow = () => {
    
    const products = [1, 2, 3, 4]


    return (
        <View style={{marginTop: SIZES.medium}}>
            <FlatList 
            data={products}
            renderItem={({item}) => (<Text>Product</Text>)}
            horizontal
            contentContainerStyle={{columnGap: SIZES.medium}}
        />
        </View>
    )
}

export default ProductRow