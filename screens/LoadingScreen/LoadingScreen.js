import { View, Text, StyleSheet, Button } from "react-native";
import { Image, StatusBar } from "react-native";

export default function LoadingScreen(){
    const logo = require('../../assets/Logo-21.png');
    const style = {
        color: '#fff',
        fontSize: 64, 
        fontWeight: 'bold',
    };

    const style2 = {
        fontSize: 24, 
        marginTop: 200,
        marginBottom: -70,
        color: '#fff',
    }

    return(
        <View style={styles.container}>
            <Text style={style}>SOLO</Text>
            <StatusBar style="auto" />
            <Text style={style2}>Powered By</Text>
            <Image source={logo} style={{ width: 300, height: 200 }}  />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0ABC71',
      color: '#fff',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });