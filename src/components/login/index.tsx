import { useRouter } from "expo-router";
import { useState, useMemo } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import PasswordField from "../ui/PasswordField";
import { global } from "../ui/styles";
import TextField from "../ui/textField";

function isValidEmail(email: string) {
  return /^[^\s@&='"!]+@[^\s@&='"!]+\.[^\s@&='"!]+$/.test(email);
}

const RenderLogin = () => {
  const router = useRouter();
  const { height } = Dimensions.get("window");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState<{
    email?: boolean;
    password?: boolean;
  }>({});

  const errors = useMemo(() => {
    const errors: Record<string, string> = {};
    if (touched.email && !email) errors.email = "O e-mail é obrigatório.";
    if (touched.password && !password)
      errors.password = "A senha é obrigatória.";
    if (touched.password && password.length < 6)
      errors.password = "A senha deve ter no mínimo 6 caracteres.";
    if (touched.email && email && !isValidEmail(email))
      errors.email = "O e-mail é inválido, Digite um e-mail válido.";
    return errors;
  }, [email, password, touched]);
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

        <PasswordField
          label="Senha"
          icon={{ lib: "FontAwesome5", name: "lock" }}
          placeholder="*********"
        />

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={[global.primaryButton]}
            onPress={() => router.replace("/(tabs)/home")}
          >
            <Text style={global.primaryButtonText}>Entrar</Text>
          </TouchableOpacity>

          <Text
            style={{
              color: "#000",
              fontWeight: 600,
              fontSize: 17,
              marginTop: height * 0.02,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            Esqueceu sua senha?
          </Text>

          <TouchableOpacity
            onPress={() => router.push("/(auth)/resetPassword")}
          >
            <Text
              style={{
                color: "#004aaa",
                fontWeight: 600,
                fontSize: 17,
                marginTop: height * 0.02,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              Clique aqui.
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
