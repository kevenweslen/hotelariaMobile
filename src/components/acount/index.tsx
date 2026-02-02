import { useState } from "react";
import {
  Dimensions,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AuthContainer from "../ui/AuthContainer";
import { global } from "../ui/styles";
import TextField from "../ui/textField";

const RenderAcount = () => {
  const { width, height } = Dimensions.get("window"); //Utilizarei as dimensões

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [alterPass, setAltertPass] = useState<
    "alterPass" | "alterPass2" | null
  >(null);
  const closeAlterPass = () => setAltertPass(null);

  return (
    <AuthContainer title="Perfil">
      <View style={global.content}>
        <TextField label="nome de usuário" placeholder="Nome" readOnly />

        <TextField label="cpf do usuário" placeholder="cpf" readOnly />

        <TextField
          label="telefone do usuário"
          placeholder="telefone"
          readOnly
        />

        <TextField label="email do usuário" placeholder="email" readOnly />
      </View>
      <View style={{ alignContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={() => setAltertPass("alterPass")}>
          <View>
            <TextField
              label="Senha do usuário"
              icon={{ lib: "FontAwesome5", name: "pencil-alt" }}
              placeholder="Senha"
              value={String(alterPass)}
            />
          </View>
        </TouchableOpacity>
      </View>

      <Modal
        transparent
        animationType="fade"
        visible={alterPass !== null}
        onRequestClose={closeAlterPass}
      >
        <Pressable
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
          onPress={closeAlterPass}
        >
          <Pressable
            onPress={() => {}}
            style={{
              backgroundColor: "white",
              borderRadius: 20,
              padding: 24,
              width: width * 0.85,
              maxWidth: 400,
              // Sombra para iOS
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              // Sombra para Android
              elevation: 5,
            }}
          >
            <View style={{ alignContent: "center", alignItems: "center" }}>
              <TextField label="senha antiga" placeholder="******" />

              <TextField
                label="senha nova"
                placeholder="******"
                value={newPassword1}
              />

              <TextField
                label="confirma a sua nova senha"
                placeholder="******"
                value={newPassword2}
              />
              <View>
                <TouchableOpacity
                  onPress={() => {
                    if (newPassword1 === newPassword2 && newPassword1) {
                      // Aqui você colocaria a lógica para alterar a senha
                      console.log("Senha alterada!");
                      closeAlterPass();
                    } else {
                      alert(
                        "Problema ao alterar senha ou senhas não coincidem",
                      );
                    }
                  }}
                  style={{
                    flex: 1,
                    padding: 12,
                    backgroundColor: "#ffd700",
                    width: width * 0.21,
                  }}
                >
                  <Text style={{ color: "#000000", fontWeight: "500" }}>
                    confirmar
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={closeAlterPass}
                  style={{
                    flex: 1,
                    padding: 12,
                    backgroundColor: "#f0f0f0",
                    borderRadius: 8,
                    width: width * 0.09,
                    height: height * 0.4,
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#000000", fontWeight: "500" }}>
                    Cancelar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </AuthContainer>
  );
};
export default RenderAcount;
