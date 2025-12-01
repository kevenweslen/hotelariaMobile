import { Dimensions, View } from "react-native";
import DatePicker, { getToday } from "react-native-modern-datepicker";
import { useState } from "react";
type Props = {
  onSelectDate: (date: string) => void;
};
const dateSelector = ({onSelectDate} : Props) => {
  const { width, height } = Dimensions.get("window"); //Componente para dimensionar largura e altura (responsividade)
  const today = getToday();
  const [selectDate, setSelectedDate] = useState ("");
  return (
    <View>
      <DatePicker
        mode="calendar"
        options={{
          backgroundColor: "#99630034", //Fundo (background)
          textHeaderColor: "#996300d5", //Mês
          textDefaultColor: "#6dac0eff", //Número (data)
          selectedTextColor: "#996300d5", //Cor do número (data) quando selecionado
          mainColor: "#6dac0eff", //Setas laterais e seletor
          textSecondaryColor: "#996300d5", //Dia da semana
          borderColor: "#6dac0eff", //Borda
          textFontSize: 14, //Tamanho da fonte (dias da semana e número -> data)
          textHeaderFontSize: 15, //Tamanho da fonte (mês)
          
        }}
        style={{borderRadius:15, width: width * 0.65, height: "auto"}}
          isGregorian={true}
          minimumDate={today}
          selected={selectDate}
          onSelectedChange={(date)=> {
          setSelectedDate(date);
          onSelectDate(date)
        }}
      />
    </View>
  );
};
export default dateSelector;