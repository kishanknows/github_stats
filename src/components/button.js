import {TouchableOpacity, Text} from 'react-native';
import Styles from '../styles';

const CustomButton = ({onPress, title}) => {
  return (
    <TouchableOpacity style={Styles.customButtonStyle} onPress={onPress}>
      <Text style={Styles.customButtonFontStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
