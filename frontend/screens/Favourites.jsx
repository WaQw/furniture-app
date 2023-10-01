import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Favourites = ({navigation}) => {
    const [favData, setFavData] = useState([]);

    useEffect(() => {
        checkFavorites();
    }, []);


    const checkFavorites = async() => {
        const id = await AsyncStorage.getItem("id");
        const favoritesId = `favorites${JSON.parse(id)}`

        try {
            const favoritesObj = await AsyncStorage.getItem(favoritesId);
            if(favoritesObj !== null) {
                const favorites = JSON.parse(favoritesObj);
                const favList = Object.values(favorites);
                setFavData(favList);
                console.log(favList.length);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const deleteFavorites = async(product) => {
        const id = await AsyncStorage.getItem('id');
        const favoritesId = `favorites${JSON.parse(id)}`

        let productId = product;

        try {
            const existingItem = await AsyncStorage.getItem(favoritesId);
            let favoritesObj = existingItem ? JSON.parse(existingItem) : {};

            if(favoritesObj[productId]) {
                delete favoritesObj[productId];
                navigation.goBack();
            } 

            await AsyncStorage.setItem(favoritesId, JSON.stringify(favoritesObj));
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <SafeAreaView>
            <Text>Favourites</Text>
        </SafeAreaView>
    )
}

export default Favourites

const styles = StyleSheet.create({})