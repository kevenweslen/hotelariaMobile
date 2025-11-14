import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { global } from "./styles";


type Props = {
    title : String;
    subtitle? : String;
    icon? : keyof typeof FontAwesome6.glyphMap;
    children : React.ReactNode;
}
const AuthContainer = ({title, subtitle, icon, children}:  Props) => {

    return (
        <SafeAreaView style ={global.safeArea}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={global.keyBoardAvoiding}>
                <ImageBackground source={require('../Image/mala.png')} style={global.ImageBackground}>
            <ScrollView style = {global.container}>
                <View style = {global.header}>
                    {!! subtitle && <FontAwesome6 name={icon} size={23} color="#000" marginTop={10}/>}
                    <Text style = {global.title}>{title}</Text>
                    {!! subtitle && <Text style = {global.subTitle}>{subtitle}</Text>}
                </View>
                <View style = {global.content}>
                    {children}
                </View>
            </ScrollView>
            </ImageBackground>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
export default AuthContainer;

