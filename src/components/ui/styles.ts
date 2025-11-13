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
    backgroundColor: "#4169E1",
    padding: 20,
    borderWidth: 2,
    borderColor: "#4169e18a",
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
    fontSize: 15,
    color: "#000", 
    fontWeight: "900",
    marginTop: 8,
    marginBottom: 8,   
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
        paddingLeft: width * 0.02,
        paddingRight: width * 0.02,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
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

    eyeIcon:{
        position: "absolute",
        right: 12,
        top: 42
    },

    primaryButton: {
        backgroundColor: "#4169E1",
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
    },

        primaryButtonDesabled: {
        backgroundColor: "#5b6ea8ff",
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
    },
    primaryButtonText:{
        color: "#ffffff"
    },
});