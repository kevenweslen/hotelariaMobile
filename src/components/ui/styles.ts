import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

export const global = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },

  keyBoardAvoiding: {
    flex: 1,

  },
  ImageBackground: {
    flex: 1,
  },

  container: {
    marginTop: height * 0.07
  },

  header: {
    alignItems: "center",
    borderRadius: 10,
    marginBottom: height * 0.04
  },

  content: {
    
    borderRadius: 10,
    alignItems: "center",
    
  },

  title: {
    fontSize: 25,
    fontWeight: "800",
  },

  subTitle: {
    fontSize: 15,
    color: "#000",
    fontWeight: "900",
  },
  //imputs
  inputGroup: {
    backgroundColor: "#00000027",
    width: width * 0.8,
  },

  label: {
    fontSize: 17,
    fontWeight: "600",
    color: "#ffffffff",
    marginBottom: height * 0.01,
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

  eyeIcon: {
    position: "absolute",
    right: 12,
    top: 38,
  },

  primaryButton: {
    backgroundColor: "#4169E1",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginTop: height * 0.02,
    width: width * 0.8,
  },

  primaryButtonDesabled: {
    backgroundColor: "#5b6ea8ff",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginTop: height * 0.02,
  },
  primaryButtonText: {
    color: "#ffffff",
  },

});
