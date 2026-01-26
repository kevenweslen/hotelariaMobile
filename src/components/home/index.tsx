import { useState } from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import DateSelector from "../ui/dateSelector";
import RoomCart from "../ui/roomCart";
import TextField from "../ui/textField";
import InputSpin from "../ui/InputSpin";
import { Text } from "@react-navigation/elements";
import { global } from "../ui/styles";
const RenderHome = () => {
  const { width, height } = Dimensions.get("window"); //Utilizarei as dimensões
  //useState() para gerenciar e alterar os estados
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [qntGuests, setQntGuestat] = useState("");
  const [calendar, setCalendar] = useState<"checkin" | "checkout">();
  return (
    <AuthContainer>
      {/*children */}
      <View
        style={{display: "flex", justifyContent: "center",}}>
        {/*Essa View vocês tinham e eu só estilizei*/}
        <View style={{ display: "flex", flexDirection: "column" }}>
          {/*Criei esta nova View para check-in*/}
          {/* Input de checkIn para abrir calendário*/}
          <TouchableOpacity onPress={() => setCalendar("checkin")}>
            <View style={{ width: width * 0.8 }}>
              {/* Nova view para dar largura ao TextField */}
              <TextField
                label="Check-in"
                icon={{ lib: "FontAwesome5", name: "calendar-alt" }}
                placeholder="Selecione a data"
                value={checkIn}
              />
            </View>
            {/* Fecha aqui */}
          </TouchableOpacity>
          {/* <DateSelector /> */}
          {calendar === "checkin" && (
            <DateSelector
              onSelectDate={(date) => {
                setCheckIn(date);
              }}
            />
          )}
        </View>
        {/*View de check-in fecha aqui */}
        <View style={{ display: "flex", flexDirection: "column" }}>
          {/*Criei esta nova View para check-out*/}
          {/* Input de checkIn para abrir calendário*/}
          <TouchableOpacity onPress={() => setCalendar("checkout")}>
            <View style={{ width: width * 0.8 }}>
              {/* Nova view para dar largura ao TextField */}
              <TextField
                label="Check-out"
                icon={{ lib: "FontAwesome5", name: "calendar-alt" }}
                placeholder="Selecione a data"
                value={checkOut}
              />
            </View>
            {/* Fecha aqui */}
          </TouchableOpacity>
          {/* <DateSelector /> */}
          {calendar === "checkout" && (
            <DateSelector
              onSelectDate={(date) => {
                setCheckOut(date);
              }}
            />
          )}
        </View>
        {/*View do check-out que fecha aqui */}

        <View>
          <Text style={global.label}>Quantidade de hóspedis</Text>
          <InputSpin 
          onSelectSpin={(Guests) => 
          setQntGuestat(Guests)}/>{/*input para adicionar quantidade de clientes*/}
        </View>
      
      </View>
        <RoomCart
          image={require("../../assets/imgs/mala.png")}
          label="Apartamento"
          icon={{
          lib:"FontAwesome5",
          name:"bed"
          }}
          description={{
              title:"Descrição do Quarto",
              text:"1 cama de casal \n1 cama de solteiro",
              price: 180.90
          }}
  
        />
    </AuthContainer>

  );
};
export default RenderHome;
