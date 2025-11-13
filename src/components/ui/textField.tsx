import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { global } from "./styles";

type Props = TextInputProps & {
    label: string;
    errorText?: string;
    icon?: keyof typeof MaterialIcons.glyphMap;
}

const TextField = ({label, errorText, icon, style, ...props} : Props) => {

    return(
        <View style = {global.inputGroup}>
            <Text style = {global.label}> {label}</Text>
            <View style = {[global.inputIcon, errorText ? global.inputError : null]}>
                {!! icon  && (
                    <View>
                        <MaterialIcons name={icon} size={21} color="#4169e18a"/>
                    </View>
                )}
                <TextInput 
                keyboardAppearance="dark"
                placeholderTextColor="#9ca3af"
                style = {[global.input, style]}
                /*Resto dos unputs */
                {... props}

                />
            
            </View>
                
                <Text style={global.errorText}>{errorText}</Text>
                
        </View>
    )
} 
export default TextField;