import { Dimensions } from "react-native";
import InputSpinner from "react-native-input-spinner";

type Props = {
    guests: number;
    onSelectSpin: (guests: number) => void;
    maxGuests: number;
    minGuests: number;
    stepOption: number;
    colorMax: string;
    colorMin: string;
};

const InputSpin = ({guests, onSelectSpin, maxGuests, minGuests, stepOption, colorMax, colorMin}: Props) => {
    const {width, height} =Dimensions.get("window");

    return(
        <InputSpinner 
        value={guests}
        onChange={onSelectSpin}
        max={maxGuests}
        min={minGuests}
        step={stepOption}
        colorMax={colorMax}
        colorMin={colorMin}
        style= {{
            width: width * 0.35,
            height: height * 0,
        }}

        />
    );
}
export default InputSpin;