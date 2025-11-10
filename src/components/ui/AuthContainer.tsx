import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { global } from "./styles";


type Props = {
    title : String;
    subtitle? : String;
    icon? : keyof typeof FontAwesome.glyphMap;
    // children : React.ReactNode;
}

export default function AuthContainer({title, subtitle, icon, /*children*/}:  Props){
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
                    {/*children*/}
                </View>
            </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}