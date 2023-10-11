import { StyleSheet } from "react-native"
import { SIZES, COLORS } from '../constants'

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 20
    },
    titleRow: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: SIZES.width - 50,
        marginBottom: 12
    },
    titleText: {
        fontFamily: "bold",
        fontSize: SIZES.xLarge,
        letterSpacing:2,
        marginLeft: SIZES.small
    },
    favContainer: (color) => ({
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: SIZES.xSmall,
        padding: SIZES.medium,
        borderRadius: SIZES.small,
        backgroundColor: color,
        shadowColor: COLORS.secondary
    }),
    imageContainer: {
        width: 70,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: 65,
        borderRadius: SIZES.small,
        resizeMode: "cover"
    },
    textContainer: {
        flex: 1,
        marginHorizontal: SIZES.medium
    },
    productTxt: {
        fontSize: SIZES.medium,
        fontFamily: "bold",
        color: COLORS.primary
    },
    supplier: {
        fontSize: SIZES.small + 2,
        fontFamily: "regular",
        color: COLORS.gray,
        marginTop: 3,
        textTransform: "capitalize"
    },
    order: {
        backgroundColor: COLORS.lightWhite,
        paddingHorizontal: 30,
        borderRadius: 12
    }
})

export default styles