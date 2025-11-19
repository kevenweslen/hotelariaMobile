import {Dimensions, Text, TouchableOpacity, View, ImageBackground,} from "react-native";
import AuthContainer from "../ui/AuthContainer";
import { global } from "../ui/styles";

const RenderAcount = () => {
  return (
    <ImageBackground
      source={require("../Image/hauEntrada.webp")}
      style={global.ImageBackground}
    >
      <AuthContainer title="Acount">
        <Text>Informações da sua conta</Text>
      </AuthContainer>
    </ImageBackground>
  );
};
export default RenderAcount;
