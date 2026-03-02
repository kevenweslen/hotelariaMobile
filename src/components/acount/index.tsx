import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import ComponenteModal from "../ui/modal";
import PasswordField from "../ui/PasswordField";
import TextField from "../ui/textField";

const ProfileScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);
  const { signOut } = useAuth();
  const router = useRouter();

  const [profile, setProfile] = useState({
    username: "",
    cpf: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    cpf: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    const loadUserData = async () => {
      const userData = {
        username: "João Silva",
        cpf: "12345678901",
        phone: "11987654321",
        email: "joao@email.com",
      };

      setProfile({
        username: userData.username,
        cpf: userData.cpf,
        phone: userData.phone,
        email: userData.email,
      });
    };

    loadUserData();
  }, []);

  // Função genérica que aceita 1 ou 2 parâmetros
  const handleFieldChange =
    (field: keyof typeof profile) => (text: string, rawText?: string) => {
      setProfile((prev) => ({ ...prev, [field]: text }));

      // Validações
      if (field === "cpf") {
        setErrors((prev) => ({
          ...prev,
          cpf: text.length > 0 && text.length < 14 ? "CPF incompleto" : "",
        }));
      }

      if (field === "phone") {
        setErrors((prev) => ({
          ...prev,
          phone:
            text.length > 0 && text.length < 14 ? "Telefone incompleto" : "",
        }));
      }

      if (field === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setErrors((prev) => ({
          ...prev,
          email:
            text.length > 0 && !emailRegex.test(text) ? "Email inválido" : "",
        }));
      }
    };

  const handleSaveProfile = () => {
    const dataToSave = {
      username: profile.username,
      cpf: profile.cpf.replace(/\D/g, ""),
      phone: profile.phone.replace(/\D/g, ""),
      email: profile.email,
    };

    console.log("Dados para salvar:", dataToSave);
  };

  const logout = async () => {
    await signOut();
    router.replace("/(auth)");
  };

  return (
    <AuthContainer title="Perfil">
      <View
        style={{
          backgroundColor: "#f1f1f1",
          alignItems: "center",
          borderColor: "black",
          marginBottom: 50,
          borderRadius: 35,
          elevation: 10,
          margin: 10,
        }}
      >
        <TextField
          label="Nome de usuário"
          value={profile.username}
          onChangeText={handleFieldChange("username")}
          placeholder="Digite seu nome"
          errorText={errors.username}
          autoCapitalize="words"
        />

        <TextField
          label="CPF do usuário"
          placeholder="000.000.000-00"
          value={profile.cpf}
          onChangeText={handleFieldChange("cpf")}
          mask="cpf"
          errorText={errors.cpf}
        />

        <TextField
          label="Telefone do usuário"
          placeholder="(00) 00000-0000"
          value={profile.phone}
          onChangeText={handleFieldChange("phone")}
          mask="phone"
          errorText={errors.phone}
          returnKeyType="next"
        />

        <TextField
          label="Email do usuário"
          placeholder="seu@email.com"
          value={profile.email}
          onChangeText={handleFieldChange("email")}
          errorText={errors.email}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
        />

        <View style={{ flexDirection: "row", gap: 5, marginBottom: 30 }}>
          <TouchableOpacity
            onPress={handleSaveProfile}
            style={{
              backgroundColor: "rgb(10, 165, 85)",
              padding: 15,
              borderRadius: 8,
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
              Alterar dados
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={openModal}
            style={{
              backgroundColor: "rgb(165, 10, 10)",
              padding: 15,
              borderRadius: 8,
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
              Privacidade e segurança
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ComponenteModal
        visible={isModalVisible}
        onClose={closeModal}
        animationType="fade"
        style={{ alignContent: "center", alignItems: "center" }}
      >
        <ScrollView style={{ maxHeight: 400 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 10,
              textAlign: "center",
            }}
          >
            <PasswordField label="Senha antiga" placeholder="123" />

            <PasswordField label="Senha nova" placeholder="1234" />
            <PasswordField
              label="Confirme seua nova senha"
              placeholder="1234"
            />
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "rgb(219, 152, 19)",
                padding: 15,
                borderRadius: 8,
                alignItems: "center",
                marginRight: 10,
              }}
              onPress={closeModal}
            >
              <Text style={{ color: "white", fontWeight: "900" }}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: "rgb(219, 152, 19)",
                padding: 15,
                borderRadius: 8,
                alignItems: "center",
              }}
              onPress={closeModal}
            >
              <Text style={{ color: "white", fontWeight: "900" }}>
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
          {/* conteúdo da modal */}
        </ScrollView>
      </ComponenteModal>

      <View style={{ alignItems: "center", marginTop: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "rgb(236, 74, 74)",
            padding: 15,
            borderRadius: 8,
            alignItems: "center",
            width: "80%",
          }}
          onPress={logout}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Sair da conta</Text>
        </TouchableOpacity>
      </View>
    </AuthContainer>
  );
};

export default ProfileScreen;
