import { ImageBackground, Text } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import { global } from "../ui/styles";

const RenderHome = () => {
  return (
    <ImageBackground 
      source={require("../../image/hauEntrada.webp")}
      style={global.ImageBackground}
    >
      <AuthContainer title="Bem vindo">
        <Text> Confira nossas ofertas de hoteis !</Text>
      </AuthContainer>
    </ImageBackground>
  );
};
export default RenderHome;
