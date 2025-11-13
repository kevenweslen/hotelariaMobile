import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import TextField from "./textField";
import { global } from "./styles";

type Props = React.ComponentProps<typeof TextField>;
const PasswordField =(props: Props) => {
    const [show, setShow] = useState(false);

    return (
    <View>
        <TextField
        {...props}
        secureTextEntry={!show}
        autoCapitalize="none"
        autoCorrect={false}
        />
        <TouchableOpacity style={global.eyeIcon} onPress={() =>setShow ((showTrue) => !showTrue)}>
        <Ionicons name={show ? "eye-outline" : "eye-off-outline" } size={23} color="#4169e18a"/>
        </TouchableOpacity>
    </View>
    
    );
    
};
export default PasswordField;