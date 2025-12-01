import { useRouter } from "expo-router";
import {
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import AuthContainer from "../ui/AuthContainer";
import PasswordField from "../ui/PasswordField";
import { global } from "../ui/styles";
import TextField from "../ui/textField";
import { ImageBackground } from "react-native";

const RenderLogin = () => {
  const router = useRouter();
  const { height } = Dimensions.get("window");
  const image = {uri: '../../src\image'};


  return (
    <AuthContainer
      title="Bem vindo"
      subtitle="Faça seu login para continuar"
      icon="hotel"
    >
      
      
      <View style={global.content}>
        <TextField
          label="Email"
          icon={{ lib: "MaterialIcons", name: "email" }}
          placeholder="name@Email.com"
        ></TextField>

        <PasswordField label="Senha" icon={{ lib: "FontAwesome5", name: "lock" }} placeholder="*********" />

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={[global.primaryButton]}
            onPress={() => router.replace("/(tabs)/home")}
          >
            <Text style={global.primaryButtonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/(auth)/resetPassword")}
          >
            <Text
              style={{
                color: "#000",
                fontWeight: 600,
                fontSize: 17,
                marginTop: height * 0.02,
              }}
            >
              Esqueceu sua senha? Clique aqui
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
            <Text
              style={{
                color: "#000",
                fontWeight: 600,
                fontSize: 16,
                marginTop: height * 0.01,
              }}
            >
              Cadastre-se aqui
            </Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </AuthContainer>
  );
};
export default RenderLogin;
