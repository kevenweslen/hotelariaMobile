import {Dimensions, Text, TouchableOpacity, View, ImageBackground,} from "react-native";
import AuthContainer from "../ui/AuthContainer";
import { global } from "../ui/styles";

const RenderAcount = () => {
  return (
      <AuthContainer title="Acount">
        <Text> <h1>Informações da sua conta</h1></Text>
      </AuthContainer>
  );
};
export default RenderAcount;
