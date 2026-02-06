import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import TextField from "./textField";
import { global } from "./styles";

type Props = React.ComponentProps<typeof TextField>;

const PasswordField =(resInpuitProps: Props) => {
    const [show, setShow] = useState(false);
    /*React.useState */

    return (
    <View>
        <TextField
        {...resInpuitProps}
        secureTextEntry={!show}
        autoCorrect={false}
        />
        <TouchableOpacity style={global.eyeIcon} onPress={() =>setShow ((showTrue) => !showTrue)}>
        <Ionicons name={show ? "eye-outline" : "eye-off-outline" } size={23} color="rgb(219, 152, 19)"/>
        </TouchableOpacity>
    </View>
    
    );
    
};
export default PasswordField;