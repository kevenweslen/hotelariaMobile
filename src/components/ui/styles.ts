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
       /* paddingHorizontal:width * 0.07,
        paddingVertical: height * 0.07,
        backgroundColor: "#1e6807ff"
        */
    backgroundColor: "#1e6807ff",
    padding: 20,
    borderWidth: 2,
    borderColor: "#1e6f5c",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 10,
    },

    header: {
        backgroundColor: "#ffffffff",
        alignItems: "center",
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
    color: "#b61a9cff", // Amarelo
    fontWeight: "900",
    marginTop: 8,
    textShadowColor: 'rgba(113, 38, 38, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,

    },
    //imputs
    inputGroup: {
        marginBottom: height * 0.02,

    },

    label: {
        fontSize: 17,
        fontWeight: "600",
        color: "#000000ff",
        marginBottom: height * 0.01

    },

    inputIcon: {
        borderWidth: 1,
        paddingLeft: width * 0.02,
        paddingRight: width * 0.02,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ffe6002c",
        borderWidth: 2,
        borderColor: "#000000ad",
        borderRadius: 10,
        
    },

    inputError: {
        backgroundColor: "#ff00004d",
        borderColor: "#ff0000ff",
    },

    input: {
        flex: 1,
        fontSize: 16,
        color: "black",
        fontWeight: "600",

    },

    errorText: {
        color: "#ff0000ff",
        fontSize: 14,
        marginRight: width * 0.01,
    },
});