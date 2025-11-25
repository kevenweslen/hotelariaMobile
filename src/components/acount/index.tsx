import {Dimensions, Text, TouchableOpacity, View, ImageBackground,} from "react-native";
import AuthContainer from "../ui/AuthContainer";
import { global } from "../ui/styles";

const RenderAcount = () => {
  return (
      <AuthContainer title="Acount">
        <Text>Informações da sua conta</Text>
      </AuthContainer>
  );
};
export default RenderAcount;
