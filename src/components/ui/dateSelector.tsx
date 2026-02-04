import { useState } from "react";
import { Dimensions, View } from "react-native";
import DatePicker, { getToday } from "react-native-modern-datepicker";
type Props = {
  onSelectDate: (date: string) => void;
};
const dateSelector = ({ onSelectDate }: Props) => {
  const { width, height } = Dimensions.get("window"); //Componente para dimensionar largura e altura (responsividade)
  const today = getToday();
  const [selectDate, setSelectedDate] = useState("");
  return (
    <View>
      <DatePicker
        mode="calendar"
        options={{
          backgroundColor: "#ffffff", //Fundo (background)
          textHeaderColor: "#d8a340", //Mês
          textDefaultColor: "rgb(13, 20, 1)", //Número (data)
          selectedTextColor: "#d8a340", //Cor do número (data) quando selecionado
          mainColor: "rgb(0, 0, 0)", //Setas laterais e seletor
          textSecondaryColor: "#d8a340", //Dia da semana
          borderColor: "rgb(0, 0, 0)", //Borda
          textFontSize: 14, //Tamanho da fonte (dias da semana e número -> data)
          textHeaderFontSize: 15, //Tamanho da fonte (mês)
        }}
        style={{ borderRadius: 15, width: width * 0.65, height: "auto" }}
        isGregorian={true}
        minimumDate={today}
        selected={selectDate}
        onSelectedChange={(date) => {
          setSelectedDate(date);
          onSelectDate(date);
        }}
      />
    </View>
  );
};
export default dateSelector;
