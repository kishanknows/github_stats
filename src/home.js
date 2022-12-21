import { View, Text } from "react-native"
import {useDispatch, useSelector} from 'react-redux';
import Styles from "./styles";


const HomePage = () =>{
    const {username} = useSelector(state => state.username);
    return(
        <View style={Styles.containerStyle}>
            <Text>Welcome {username}</Text>
        </View>
    )
};

export default HomePage;