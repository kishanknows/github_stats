import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    inputStyle:{
        height:40,
        margin:12,
        borderBottomWidth:1,
        padding:10,
        width:window.width,
    },
    containerStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    customButtonStyle:{
        height:40,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'grey',
        width:100
    },
    customButtonFontStyle:{
        color:'white',
        fontSize:15
    }
});

export default Styles;