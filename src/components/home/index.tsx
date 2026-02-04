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
import RoomCart from "../ui/roomCart";
import { global } from "../ui/styles";
import TextField from "../ui/textField";
import componenteModal from "../ui/modal";

const RenderHome = () => {
  const { width, height } = Dimensions.get("window"); //Utilizarei as dimensões
  //useState() para gerenciar e alterar os estados
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [qntGuests, setQntGuestat] = useState<number>(1);
  const [calendar, setCalendar] = useState<"checkin" | "checkout" | null>(null);
  const closeCalendar = () => setCalendar(null);

  return (
    <AuthContainer>
      {/*children */}
      <View style={{ display: "flex", alignItems: "center" }}>
        {""}
        {/*Essa View vocês tinham e eu só estilizei*/}
        <View style={{ flexDirection: "row" }}>
          {""}
          {/*Criei esta nova View para check-in*/}
          {/* Input de checkIn para abrir calendário*/}
          <TouchableOpacity onPress={() => setCalendar("checkin")}>
            <View style={{ width: width * 0.8 }}>
              {""}
              {/* Nova view para dar largura ao TextField */}
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
            {""}
            {/* Fecha aqui */}
          </TouchableOpacity>
        </View>
        {""}
        {/*View de check-in fecha aqui */}
        <View style={{ display: "flex", alignItems: "center" }}>
          {""}
          {/*Criei esta nova View para check-out*/}
          {/* Input de checkIn para abrir calendário*/}
          <TouchableOpacity onPress={() => setCalendar("checkout")}>
            <View style={{ width: width * 0.8 }}>
              {""}
              {/* Nova view para dar largura ao TextField */}
              <TextField
                label="Check-out"
                icon={{ lib: "FontAwesome5", name: "calendar-alt" }}
                placeholder="Selecione a data"
                value={checkOut}
              />
            </View>
            {""}
            {/* Fecha aqui */}
          </TouchableOpacity>
        </View>
        {/*View do check-out que fecha aqui */}
        {/*Modal para fechar ao clique fora*/}
        <Modal
          transparent
          animationType="fade"
          visible={calendar !== null}
          onRequestClose={closeCalendar}
        >
          {/*BackDrop: qualquer clique fora fecha a janela */}
          <Pressable
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#00000049",
            }}
            onPress={closeCalendar}
          >
            {/*Área do calendario: áo clique não fecha */}
            <Pressable onPress={() => {}}>
              {/* <DateSelector /> */}
              {calendar === "checkin" && (
                <DateSelector
                  onSelectDate={(date) => {
                    setCheckIn(date);
                    closeCalendar();
                  }}
                />
              )}

              {/* <DateSelector /> */}
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
        {/*InputSpin */}
        <View
          style={{
            borderColor: "#000",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <Text style={global.label}>Quantidade de hóspedis</Text>
          <InputSpin
            guests={qntGuests}
            onSelectSpin={(guests) => setQntGuestat(guests)}
            maxGuests={6}
            minGuests={1}
            stepOption={1}
            colorMax="#FFD700"
            colorMin="#FFD700"
          />
          {/*input para adicionar quantidade de clientes*/}
        </View>
      </View>
      
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <View
          style={{
            borderColor: "black",
            shadowColor: "black",
            shadowOpacity: 2,
            alignItems: "center",
          }}
        >
          onPress={() => setIsModalVisible(true)
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
    </AuthContainer>
  );
};
export default RenderHome;
