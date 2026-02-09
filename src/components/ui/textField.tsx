import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { global } from "./styles";

type MaskType = "cpf" | "phone" | "none";

type NameIcon =
  | { lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
  | { lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap }
  | { lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap };

type Props = TextInputProps & {
  label: string;
  errorText?: string;
  icon?: NameIcon;
  cpfMask?: string;
  telMask?: string;
  mask?: MaskType;
  value?: string;
  onChangeText?: (text: string, rawText?: string) => void;
  [key: string]: any;
};

const TextField = ({
  label,
  errorText,
  icon,
  style,
  mask = "none",
  value: externalValue,
  onChangeText,
  ...props
}: Props) => {
  const [internalValue, setInternalValue] = useState(externalValue || "");

  useEffect(() => {
    if (externalValue !== undefined && externalValue !== internalValue) {
      setInternalValue(externalValue);
    }
  }, [externalValue]);

  const applyMask = (text: string): { masked: string; raw: string } => {
    const raw = text.replace(/\D/g, "");

    if (mask === "cpf") {
      if (raw.length <= 3) return { masked: raw, raw };
      if (raw.length <= 6)
        return {
          masked: `${raw.slice(0, 3)}.${raw.slice(3)}`,
          raw,
        };
      if (raw.length <= 9)
        return {
          masked: `${raw.slice(0, 3)}.${raw.slice(3, 6)}.${raw.slice(6)}`,
          raw,
        };
      return {
        masked: `${raw.slice(0, 3)}.${raw.slice(3, 6)}.${raw.slice(6, 9)}-${raw.slice(9, 11)}`,
        raw: raw.slice(0, 11),
      };
    }

    if (mask === "phone") {
      if (raw.length <= 2) return { masked: `(${raw}`, raw };
      if (raw.length <= 6)
        return {
          masked: `(${raw.slice(0, 2)}) ${raw.slice(2)}`,
          raw,
        };
      if (raw.length <= 10) {
        return {
          masked: `(${raw.slice(0, 2)}) ${raw.slice(2, 6)}-${raw.slice(6)}`,
          raw,
        };
      }
      return {
        masked: `(${raw.slice(0, 2)}) ${raw.slice(2, 3)} ${raw.slice(3, 7)}-${raw.slice(7, 11)}`,
        raw: raw.slice(0, 11),
      };
    }

    return { masked: text, raw: text };
  };

  const getMaxLength = (): number | undefined => {
    if (mask === "cpf") return 14;
    if (mask === "phone") return 15;
    return props.maxLength;
  };

  const getKeyboardType = (): TextInputProps["keyboardType"] => {
    if (mask === "cpf" || mask === "phone") return "numeric";
    return props.keyboardType || "default";
  };

  const handleTextChange = (text: string) => {
    const { masked, raw } = applyMask(text);

    setInternalValue(masked);

    if (onChangeText) {
      onChangeText(masked, raw);
    }
  };
  return (
    <View style={global.inputGroup}>
      <Text style={global.label}> {label}</Text>
      <View style={[global.inputIcon, errorText ? global.inputError : null]}>
        {!!icon && (
          <View>
            {icon.lib === "MaterialIcons" && (
              <MaterialIcons
                name={icon.name}
                size={23}
                color="rgb(219, 152, 19)"
              />
            )}
            {icon.lib === "FontAwesome5" && (
              <FontAwesome5
                name={icon.name}
                size={23}
                color="rgb(219, 152, 19)"
              />
            )}
            {icon.lib === "FontAwesome6" && (
              <FontAwesome6
                name={icon.name}
                size={23}
                color="rgb(219, 152, 19)"
              />
            )}
          </View>
        )}
        <TextInput
          keyboardAppearance="dark"
          placeholderTextColor="#8a8a8aff"
          style={[global.input, style]}
          value={internalValue}
          onChangeText={handleTextChange}
          keyboardType={getKeyboardType()}
          maxLength={getMaxLength()}
          // Passa outras props, mas remove as que já definimos
          {...props}
        />
      </View>

      <Text style={global.errorText}>{errorText}</Text>
    </View>
  );
};
export default TextField;
