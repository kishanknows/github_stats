import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../components/button';
import Styles from '../styles';
import axios from 'axios';
import Avatar from '../components/avatar';
import {Image} from 'react-native';

const HomePage = () => {
  //   const {baseUrl} = useSelector(state=>state.baseUrl);
  //   axios.get(baseUrl).then(response => console.log(response.data));

  return (
    <View style={Styles.containerStyle}>
      <Avatar />
    </View>
  );
};

export default HomePage;
