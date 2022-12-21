import { useState } from "react"
import { Text, TextInput, View } from "react-native"
import Styles from "./styles"
import CustomButton from "./button";


const LoginPage = ({navigation}) => {
  const [username, setUsername] = useState('');
  return(
    <View style={Styles.containerStyle}>
      <TextInput placeholder="Enter github username" style={Styles.inputStyle} onChangeText={setUsername} value={username} textAlign='center'/>
      <CustomButton onPress={()=>navigation.navigate('Home')}/>
    </View>
  )
};

export default LoginPage;