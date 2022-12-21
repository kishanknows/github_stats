import { TouchableOpacity, Text } from "react-native";
import Styles from "./styles";

const CustomButton = ({onPress}) =>{
    return (
        <TouchableOpacity style={Styles.customButtonStyle} onPress={onPress}>
            <Text style={Styles.customButtonFontStyle}>submit</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;