import { useRouter } from "expo-router";
import { useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import PasswordField from "../ui/PasswordField";
import { global } from "../ui/styles";
import TextField from "../ui/textField";

const RenderRegister = () => {
  const router = useRouter();
  const { height, width } = Dimensions.get("window");

  // Agora useState funcionará
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    email: "",
  });

  const handleChange =
    (field: keyof typeof formData) => (text: string, rawText?: string) => {
      setFormData((prev: typeof formData) => ({
        ...prev,
        [field]: text,
      }));

      if (field === "cpf" || field === "telefone") {
        console.log(`${field} sem máscara:`, rawText);
      }
    };
  return (
    <AuthContainer
      iconReturn="chevron-back"
      title="Bem vindo"
      subtitle="Cadastre-se para continuar."
      icon="person"
    >
      <View style={global.content}>
        <TextField label="Nome" placeholder="Digite seu nome"></TextField>

        {/* CPF - com máscara */}
        <TextField
          label="CPF"
          placeholder="000.000.000-00"
          value={formData.cpf}
          onChangeText={handleChange("cpf")}
          mask="cpf"
          icon={{ lib: "FontAwesome5", name: "id-card" }}
        />

        {/* Telefone - com máscara */}
        <TextField
          label="Telefone"
          placeholder="(00) 00000-0000"
          value={formData.telefone}
          onChangeText={handleChange("telefone")}
          mask="phone"
          icon={{ lib: "FontAwesome5", name: "phone" }}
        />

        <TextField
          label="Email"
          icon={{ lib: "FontAwesome5", name: "envelope" }}
          placeholder="name@Email.com"
        ></TextField>
      </View>

      <View style={global.content}>
        <PasswordField label="Senha" placeholder="*********" />

        <PasswordField label="Confirme sua senha" placeholder="*********" />
        <TouchableOpacity
          style={[global.primaryButton]}
          onPress={() => router.back()} // Volta para a tela anterior
        >
          <Text style={{ fontSize: 16, fontWeight: 600 }}>Criar conta</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "#000000ff", fontWeight: 600, fontSize: 16 }}>
            Já possui uma conta?
          </Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Text
              style={{
                color: "#004aaa",
                fontWeight: 600,
                fontSize: 16,
                marginLeft: width * 0.015,
              }}
            >
              Faça login.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </AuthContainer>
  );
};
export default RenderRegister;
