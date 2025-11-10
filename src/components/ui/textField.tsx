import {View, Text, TextInput, TextInputProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

type Props = TextInputProps & {
    label: string;
    errorText?: string;
    icon?: keyof typeof MaterialIcons.glyphMap;
}

export default function textField({label, errorText, icon} : Props){
    return(
        <View>
            <Text> {label}</Text>
            <View>
                {!! icon  && (
                    <View>
                        <MaterialIcons name={icon} size={18} color="yellow"/>
                    </View>
                )}
                <TextInput value="Isso é um teste"/>
            </View>

        </View>
    )
}