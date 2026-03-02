import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import { Alert, Dimensions, Text, TouchableOpacity, View } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import PasswordField from "../ui/PasswordField";
import TextField from "../ui/textField";
import { global } from "../ui/styles";

function isValidEmail(email: string) {
  return /^[^\s@&='"!]+@[^\s@&='"!]+\.[^\s@&='"!]+$/.test(email);
}

const RenderLogin = () => {
  const { signIn } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState<{
    email?: boolean;
    password?: boolean;
  }>({});

  const errors = useMemo(() => {
    const error: Record<string, string> = {};
    if (touched.email && !email) error.email = "E-mail obrigatório";
    if (touched.password && !password) error.password = "Senha obrigatória";
    if (touched.password && password && password.length < 6)
      error.password = "No mínimo 6 caracteres para a senha";
    if (touched.email && email && !isValidEmail(email))
      error.email = "Digite um e-mail válido";
    return error;
  }, [email, password, touched]);

  const canSubmit =
    email && password && Object.keys(errors).length === 0 && !loading;

  const handleSubmit = async () => {
    
    if (!canSubmit) {
      Alert.alert("Erro", "Preencha todos os campos corretamente");
      return;
    }

    try {
      setLoading(true);
      await signIn(email.trim(), password);
      Alert.alert("Login bem-sucedido!");
      router.replace("/(tabs)/home");
    } catch (erro: any) {
      Alert.alert("Erro", erro?.message || "Falha ao tentar logar!");
    } finally {
      setLoading(false);
    }
  };

  const { width, height } = Dimensions.get("window");
  
  return (
    <AuthContainer
      title="Bem vindo"
      subtitle="Faça seu login para continuar"
      icon="hotel"
    >
      <View style={global.content}>
        {/* ✅ CORRIGIDO: Adicionando value, onChangeText e onBlur */}
        <TextField
          label="Email"
          icon={{ lib: "MaterialIcons", name: "email" }}
          placeholder="name@Email.com"
          value={email}
          onChangeText={setEmail}
          onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
          error={touched.email ? errors.email : undefined}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        {/* ✅ CORRIGIDO: Adicionando value, onChangeText e onBlur */}
        <PasswordField 
          label="Senha" 
          placeholder="*********"
          value={password}
          onChangeText={setPassword}
          onBlur={() => setTouched(prev => ({ ...prev, password: true }))}
          error={touched.password ? errors.password : undefined}
        />
        
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={[
              global.primaryButton,
              !canSubmit && { opacity: 0.5 } // Efeito visual quando desabilitado
            ]}
            onPress={handleSubmit}
            disabled={!canSubmit || loading}
          >
            <Text style={global.primaryButtonText}>
              {loading ? "Entrando..." : "Entrar"}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <Text style={global.textoDestacado}>
            Esqueceu sua senha?
          </Text>

          <TouchableOpacity
            onPress={() => router.push("/(auth)/resetPassword")}
          >
            <Text
              style={{
                color: "#004aaa",
                fontWeight: "600",
                fontSize: 17,
                marginLeft: width * 0.015,
              }}
            >
              Clique aqui.
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text style={global.textoDestacado}>
            Ainda não possui uma conta? 
          </Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
            <Text
              style={{
                color: "#004aaa",
                fontWeight: "600",
                fontSize: 16,
                marginLeft: width * 0.015,
              }}
            >
              cadastre-se aqui
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </AuthContainer>
  );
};

export default RenderLogin;