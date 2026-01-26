import { Dimensions } from "react-native";
import InputSpinner from "react-native-input-spinner";

type Props = {
    onSelectSpin: (guests: Number) => void
}

const InputSpin = ({onSelectSpin}: Props) => {
    const {width, height} =Dimensions.get("window");
    return(
        <InputSpinner 
        max={6}
        min={1}
        step={1}
        colorMax={"#FFD700"}
        colorMin={"#FFD700"}
        style= {{
            width: width * 0.35
        }}

        />
    );
}
export default InputSpin;