import {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Styles from './styles';
import CustomButton from './button';
import {useDispatch, useSelector} from 'react-redux';
import {setUserName} from './statSlice';

const LoginPage = ({navigation}) => {
  const dispatch = useDispatch();
  const {username} = useSelector(state => state.username);
  const textChangeHandler = text => dispatch(setUserName(text));
  return (
    <View style={Styles.containerStyle}>
      <TextInput
        placeholder="Enter github username"
        style={Styles.inputStyle}
        onChangeText={textChangeHandler}
        value={username}
        textAlign="center"
      />
      <CustomButton onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default LoginPage;
