import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

export const global = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor:"#fff"
    },

    keyBoardAvoiding:{
        flex: 1

    },

    container: {
        paddingHorizontal:width * 0.07,
        paddingVertical: height * 0.07,
        backgroundColor: "#fff"
/*#5a1cebff*/

    },

    header: {
        backgroundColor: "#fff",
        marginBottom: height * 0.07,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10

    },

    content: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: width*  0.03,
        shadowColor: "#000",
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10
    },

    title: {
        fontSize: 25,
        fontWeight: "800"

    },

    subTitle: {
        fontSize: 20,
        color: "yellow",
        fontWeight: 600,
        marginTop: 8
    },
});