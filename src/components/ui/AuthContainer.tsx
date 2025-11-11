import { FontAwesome } from "@expo/vector-icons";
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { global } from "./styles";
import React from "react";


type Props = {
    title : String;
    subtitle? : String;
    icon? : keyof typeof FontAwesome.glyphMap;
    children : React.ReactNode;
}

export function AuthContainer({title, subtitle, icon, children}:  Props){
    return (
        <SafeAreaView style ={global.safeArea}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={global.keyBoardAvoiding}>
            <ScrollView style = {global.container}>
                <View style = {global.header}>
                    {!! subtitle && <FontAwesome name={icon} size={25} color="black"/>}
                    <Text style = {global.title}>{title}</Text>
                    {!! subtitle && <Text style = {global.subTitle}>{subtitle}</Text>}
                </View>
                <View style = {global.content}>
                    {children}
                </View>
            </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}