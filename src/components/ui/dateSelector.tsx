import DatePicker, {getToday, getFormatedDate} from 'react-native-modern-datepicker';
import { useState } from "react";
import { View, Text } from "react-native";

type Props = {
    label?: string;
};
const dateSelector = ({label} : Props) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() +1);
    const startDate = getFormatedDate(tomorrow, "YYY/MMM/DD h:m")
    getToday();
    getFormatedDate(new Date(), "YYY/MMM/DD h:m");
    const [selectDate, setSelectDate] = useState("");

    return (
        <View>
            {!!label && <Text>{label}</Text>}
        
            <DatePicker 
                mode='calendar'
                options={{
                    backgroundColor: '#090C08',
                    textHeaderColor: '#FFA25B',
                    textDefaultColor: '#F6E7C1',
                    selectedTextColor: '#fff',
                    mainColor: '#F4722B',
                    textSecondaryColor: '#D6C7A1',
                    borderColor: 'rgba(122, 146, 165, 0.1)',
                }}
                style={{borderRadius: 15}}
                isGregorian={true}
                minimumDate={startDate}
                selected={selectDate}
                onSelectedChange={setSelectDate}
            />
        </View>
    );
};

export default dateSelector;