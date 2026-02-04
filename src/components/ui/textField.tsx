import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { global } from "./styles";

type NameIcon =
  | { lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
  | { lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap }
  | { lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap };

type Props = TextInputProps & {
  label: string;
  errorText?: string;
  icon?: NameIcon;
};

const TextField = ({ label, errorText, icon, style, ...props }: Props) => {
  return (
    <View style={global.inputGroup}>
      <Text style={global.label}> {label}</Text>
      <View style={[global.inputIcon, errorText ? global.inputError : null]}>
        {!!icon && (
          <View>
            {icon.lib === "MaterialIcons" && (
              <MaterialIcons name={icon.name} size={23} color="#FFD700" />
            )}
            {icon.lib === "FontAwesome5" && (
              <FontAwesome5 name={icon.name} size={23} color="#FFD700" />
            )}
            {icon.lib === "FontAwesome6" && (
              <FontAwesome6 name={icon.name} size={23} color="#FFD700" />
            )}
          </View>
        )}
        <TextInput
          keyboardAppearance="dark"
          placeholderTextColor="#8a8a8aff"
          style={[global.input, style]}
          /*Resto dos unputs */
          {...props}
        />
      </View>

      <Text style={global.errorText}>{errorText}</Text>
    </View>
  );
};
export default TextField;
