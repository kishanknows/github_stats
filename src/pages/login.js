import {Text, TextInput, View} from 'react-native';
import Styles from '../styles';
import CustomButton from '../components/button';
import {useDispatch} from 'react-redux';
import {setBaseUrl} from '../redux/userSlice';

const LoginPage = ({navigation}) => {
  const dispatch = useDispatch();
  const textChangeHandler = text => {
    dispatch(setBaseUrl(text));
  };
  return (
    <View style={Styles.containerStyle}>
      <TextInput
        placeholder="Enter github username"
        style={Styles.inputStyle}
        onChangeText={textChangeHandler}
        textAlign="center"
      />
      <CustomButton
        onPress={() => navigation.navigate('Home')}
        title="submit"
      />
    </View>
  );
};

export default LoginPage;
