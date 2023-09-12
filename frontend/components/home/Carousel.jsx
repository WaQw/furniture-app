import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants'
import p1 from "../../assets/images/fn1.jpg"
import p2 from "../../assets/images/fn2.jpg"
import p3 from "../../assets/images/fn3.jpg"

const Carousel = () => {

    const slides = [p1, p2, p3]

    return (
        <View style={styles.carouselContainer}>
            <SliderBox images={slides}
                dotColor={COLORS.primary}
                inactiveDotColor={COLORS.secondary}
                ImageComponentStyle={{borderRadius: 15, width: "92%", marginTop: 15}}
                autoplay
                circleLoop
            />
        </View>
    )
}

export default Carousel

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: "center"
    }
})