import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import LoadingScreen from './screens/LoadingScreen/LoadingScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
=======
import { getDatabase, ref, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";
import { useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAw8LPgiPTn26s0yaNEsKU7E8BPDj_TVsQ",
  authDomain: "khiron-7cf85.firebaseapp.com",
  databaseURL: "https://khiron-7cf85-default-rtdb.firebaseio.com",
  projectId: "khiron-7cf85",
  storageBucket: "khiron-7cf85.appspot.com",
  messagingSenderId: "353230209186",
  appId: "1:353230209186:web:321a08ab67d20ccf5ed7fb",
  measurementId: "G-E1XB07824Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

>>>>>>> bedd21e1d45dd35dd712a0631f40cb2bc14aa5dd

export default function App() {
  

  return (
    
    <View style={styles.container}>
<<<<<<< HEAD
      <ProfileScreen/>
=======
      <Text>{User.Name}</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
>>>>>>> bedd21e1d45dd35dd712a0631f40cb2bc14aa5dd
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
