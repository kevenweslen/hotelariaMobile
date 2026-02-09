import { Text } from "@react-navigation/elements";
import { useState } from "react";
import {
  Dimensions,
  Modal,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import AuthContainer from "../ui/AuthContainer";
import DateSelector from "../ui/dateSelector";
import InputSpin from "../ui/InputSpin";
import CustomModal from "../ui/modal";
import RoomCart from "../ui/roomCart";
import { global } from "../ui/styles";
import TextField from "../ui/textField";

const RenderHome = () => {
  const { width, height } = Dimensions.get("window");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [qntGuests, setQntGuestat] = useState<number>(1);
  const [calendar, setCalendar] = useState<"checkin" | "checkout" | null>(null);
  const closeCalendar = () => setCalendar(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <AuthContainer>
      <View style={{ display: "flex", alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "#f1f1f1",
            marginBottom: 50,
            borderColor: "black",
            borderRadius: 5,
            elevation: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "700", margin: 10 }}>
            Reserve o seu quarto agora !
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#f1f1f1",
            marginBottom: 50,
            borderColor: "black",
            borderRadius: 35,
            elevation: 10,
            margin: 0,
          }}
        >
          <View style={{ flexDirection: "row", margin: 15 }}>
            <TouchableOpacity onPress={() => setCalendar("checkin")}>
              <View>
                <TextField
                  label="Check-in"
                  icon={{ lib: "FontAwesome5", name: "calendar-alt" }}
                  placeholder="Selecione a data"
                  value={checkIn}
                  style={{
                    width: width * 0.4,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
          
          <View style={{ display: "flex", alignItems: "center" }}>
            <TouchableOpacity onPress={() => setCalendar("checkout")}>
              <View style={{ width: width * 0.8 }}>
                <TextField
                  label="Check-out"
                  icon={{ lib: "FontAwesome5", name: "calendar-alt" }}
                  placeholder="Selecione a data"
                  value={checkOut}
                />
              </View>
            </TouchableOpacity>
          </View>
          
          <View>
            <Modal
              transparent
              animationType="fade"
              visible={calendar !== null}
              onRequestClose={closeCalendar}
            >
              <Pressable
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#00000049",
                }}
                onPress={closeCalendar}
              >
                <Pressable onPress={() => {}}>
                  {calendar === "checkin" && (
                    <DateSelector
                      onSelectDate={(date) => {
                        setCheckIn(date);
                        closeCalendar();
                      }}
                    />
                  )}
                  {calendar === "checkout" && (
                    <DateSelector
                      onSelectDate={(date) => {
                        setCheckOut(date);
                        closeCalendar();
                      }}
                    />
                  )}
                </Pressable>
              </Pressable>
            </Modal>
          </View>
          
          <View
            style={{
              borderColor: "#000",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <Text style={global.label}>Quantidade de hóspedes</Text>
            <InputSpin
              guests={qntGuests}
              onSelectSpin={(guests) => setQntGuestat(guests)}
              maxGuests={6}
              minGuests={1}
              stepOption={1}
              colorMax="rgb(10, 165, 85)"
              colorMin="rgb(10, 165, 85)"
            />
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <View
          style={{
            borderColor: "black",
            shadowColor: "black",
            shadowOpacity: 2,
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <RoomCart
            image={require("../../../assets/image/quarto-solteiro.jpg")}
            label="Quarto Luxo"
            description={{
              title: "Detalhes do quarto",
              text: "Cama King Size, Vista para o mar",
              price: 250,
            }}
            icon={{ lib: "FontAwesome5", name: "bed" }}
          />
        </View>
      </TouchableOpacity>

      {/* MODAL CORRIGIDA */}
      <CustomModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        imageModal={require("../../../assets/image/Quarto_solteiroSimples.webp")} // ← PROP AQUI
      >
        {/* A imagem já aparece automaticamente no topo da modal */}
        
        <View style={{ alignItems: 'center', padding: 10 }}>
          <View style={{ 
            backgroundColor: "#f8f9fa", 
            borderRadius: 15, 
            padding: 20,
            width: "100%",
            alignItems: 'center'
          }}>
            <Text style={{ 
              fontSize: 18, 
              fontWeight: "bold", 
              marginBottom: 8,
              color: "#333"
            }}>
              Quarto Delux Supremo
            </Text>
            <Text style={{ 
              fontSize: 16, 
              marginBottom: 5,
              color: "#555"
            }}>
              Tipo: Solteiro
            </Text>
            <Text style={{ 
              fontSize: 16, 
              marginBottom: 10,
              color: "#555"
            }}>
              Cama King Size, Vista para o mar
            </Text>
            <Text style={{ 
              fontSize: 20, 
              fontWeight: "bold", 
              color: "rgb(10, 165, 85)"
            }}>
              R$ 250 / diária
            </Text>
          </View>
          
          <TouchableOpacity
            style={{
              marginTop: 25,
              paddingVertical: 12,
              paddingHorizontal: 40,
              backgroundColor: "rgb(10, 165, 85)",
              borderRadius: 8,
              alignItems: 'center',
              width: "80%",
            }}
            onPress={() => setIsModalVisible(false)}
          >
            <Text style={{ 
              color: "white", 
              fontSize: 16,
              fontWeight: "bold"
            }}>
              Reservar Agora
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={{
              marginTop: 10,
              padding: 8,
            }}
            onPress={() => setIsModalVisible(false)}
          >
            <Text style={{ 
              color: "#666",
              fontSize: 14
            }}>
              Fechar
            </Text>
          </TouchableOpacity>
        </View>
      </CustomModal>
    </AuthContainer>
  );
};

export default RenderHome;