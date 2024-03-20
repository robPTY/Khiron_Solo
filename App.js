import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoadingScreen from './screens/LoadingScreen/LoadingScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';

export default function App() {

  return (
    
    <View style={styles.container}>
      <LoadingScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
