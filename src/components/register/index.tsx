import { useRouter } from "expo-router";
import { Dimensions, Text, TouchableOpacity } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import PasswordField from "../ui/PasswordField";
import { global } from "../ui/styles";
import TextField from "../ui/textField";

const RenderRegister = () => {
  const router = useRouter();

  const { height } = Dimensions.get("window");

  return (
    <AuthContainer
      title="Bem vindo"
      subtitle="Cadastre-se para continuar."
      icon="person"
    >
      <TextField label="Nome" placeholder="Digite seu nome"></TextField>

      <TextField label="CPF" placeholder="000.000.000-00"></TextField>

      <TextField label="Telefone" placeholder="+55 (15)99999-9999"></TextField>

      <TextField
        label="Email"
        icon="email"
        placeholder="name@Email.com"
      ></TextField>

      <PasswordField label="Senha" icon="lock" placeholder="*********" />

      <PasswordField
        label="Confirme sua senha"
        icon="lock"
        placeholder="*********"
      />

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={{ color: "#000000ff", fontWeight: 600, fontSize: 16 }}>
          Já possui uma conta? Faça login.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={[global.primaryButton]}>
        <Text style={global.primaryButtonText}>Registrar-se</Text>
      </TouchableOpacity>
    </AuthContainer>
  );
};
export default RenderRegister;
