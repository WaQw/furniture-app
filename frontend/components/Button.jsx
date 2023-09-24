import {StyleSheet, TouchableOpacity, View, Text} from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'

const Button = ({title, onPress}) => {
    return (
        <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
            <Text style={styles.btnTxt}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btnTxt: {
        fontFamily: "bold",
        color: COLORS.white,
        fontSize: 18
    },
    btnStyle: {
        height: 50,
        width: '100%',
        marginVertical: 20,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12
    }
})