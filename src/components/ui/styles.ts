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
    ImageBackground:{
        flex: 1,
    },

    container: {
    paddingHorizontal:width * 0.07,
    paddingVertical: height * 0.07,    
    padding: 20,
    borderWidth: 2,
    },

    header: {
        alignItems: "center",
        marginBottom: height * 0.05,
        borderRadius: 10,
    },

    content: {
        // alignItems: "center",
        borderRadius: 10,
        padding: width*  0.03,
        borderColor: "#000",
        elevation: 5,
        marginLeft: 30,
        width: 250,
        height:170,
    },

    title: {
        fontSize: 25,
        fontWeight: "800"

    },

    subTitle: {
    fontSize: 15,
    color: "#000", 
    fontWeight: "900",
  
    },
    //imputs
    inputGroup: {
        marginBottom: height * 0.02,

    },

    label: {
        fontSize: 17,
        fontWeight: "600",
        color: "#ffffffff",
        // marginBottom: height * 0.01,
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
        marginTop: 110,
    },

        primaryButtonDesabled: {
        backgroundColor: "#5b6ea8ff",
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        marginTop: 100,
    },
    primaryButtonText:{
        color: "#ffffff"
    },
});