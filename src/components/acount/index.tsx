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

  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [alterPass, setAltertPass] = useState<
    "alterPass" | "alterPass2" | null
  >(null);
  const closeAlterPass = () => setAltertPass(null);

  return (
    <AuthContainer title="Perfil">
      <View style={global.content}>
        <TextField label="nome de usuário" />

        <TextField label="cpf do usuário" placeholder="cpf" />

        <TextField label="telefone do usuário" placeholder="telefone" />

        <TextField label="email do usuário" placeholder="email" />
      </View>
      <View style={{ alignContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={() => setAltertPass("alterPass")}>
          <View>
            <TextField
              label="Senha do usuário"
              icon={{ lib: "FontAwesome5", name: "pencil-alt" }}
              // iconPosition="right" // ← Adicione esta propriedade se existir
              placeholder="Senha"
              // value={String(alterPass)}
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
                onChangeText={setNewPassword1}
                secureTextEntry={true} // Recomendado para campos de senha
              />

              <TextField
                label="confirma a sua nova senha"
                placeholder="******"
                value={newPassword2}
                onChangeText={setNewPassword2}
                secureTextEntry={true} // Recomendado para campos de senha
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
                    borderColor: "#000",
                    backgroundColor: "#d8a340",
                    flexDirection: "row",
                    borderRadius: 10,
                    padding: 10,
                    gap: height * 0.1,
                  }}
                >
                  <Text style={{ color: "#000000", fontWeight: "700" }}>
                    Confirmar
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={closeAlterPass}
                  style={{
                    borderColor: "#000",
                    backgroundColor: "#d8a340",
                    flexDirection: "row",
                    borderRadius: 10,
                    padding: 10,
                    gap: height * 0.1,
                  }}
                >
                  <Text style={{ color: "#000000", fontWeight: "700" }}>
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
