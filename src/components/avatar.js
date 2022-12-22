import {Image} from 'react-native';
import Styles from '../styles';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

const Avatar = () => {
  const [imgPath, setImgPath] = useState();
  const [username, setUsername] = useState();
  const baseUrl = useSelector(state => state.user.baseUrl);
  useEffect(() => {
    axios.get(baseUrl).then(response => {
      setImgPath(response.data.avatar_url);
      setUsername(response.data.login);
    });
  }, []);
  return (
    <>
      {imgPath ? (
        <Image style={Styles.avatarStyle} source={{uri: imgPath}} />
      ) : (
        <Image
          style={Styles.avatarStyle}
          source={require('../assets/user.png')}
        />
      )}
    </>
  );
};

export default Avatar;
