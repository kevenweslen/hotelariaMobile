import { ImageBackground, Text, View } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import { global } from "../ui/styles";
import dateSelector from "../ui/dateSelector";

const RenderHome = () => {
  return (
    // <ImageBackground 
    //   source={require("../../image/haulEntrada.webp")}>
      <AuthContainer title="Bem vindo">
        <Text> Confira nossas ofertas de hoteis !</Text>

        <View>

        <dateSelector/>

        </View>

      </AuthContainer>
      
    /* </ImageBackground> */
  );
};
export default RenderHome;
