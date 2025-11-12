import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { global } from "./styles";

type Props = TextInputProps & {
    label: string;
    errorText?: string;
    icon?: keyof typeof MaterialIcons.glyphMap;
}

const TextField = ({label, errorText, icon, style, ...restInputProps} : Props) => {

    return(
        <View style = {global.inputGroup}>
            <Text style = {global.label}> {label}</Text>
            <View style = {[global.inputIcon, errorText ? global.inputError : null]}>
                {!! icon  && (
                    <View>
                        <MaterialIcons name={icon} size={21} color="#ffd700"/>
                    </View>
                )}
                <TextInput 
                keyboardAppearance="dark"
                placeholderTextColor="#9ca3af"
                style = {[global.input, style]}
                /*Resto dos unputs */
                {... restInputProps}

                />
            
            </View>
                
                <Text style={global.errorText}>{errorText} opa</Text>
                
        </View>
    )
} 
export default TextField;