import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { User, onAuthStateChanged } from 'firebase/auth'
import {useState, useEffect} from 'react'
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import LoginScreen from './screens/LoginScreen/Login';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen'
import { FIREBASE_AUTH } from './FirebaseConfig';


const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

const LogInStack = createNativeStackNavigator();

function InsideLayout(){
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name = "Home Screen" component = {HomeScreen} options={{headerShown: false}}/>
    </InsideStack.Navigator>
  )
}

function LoginLayout(){
  return (
    <LogInStack.Navigator>
      <LogInStack.Screen name = "Log In Screen" component = {LoginScreen} options={{headerShown: false}}/>
      <LogInStack.Screen name = "Sign Up Screen" component = {SignUpScreen} options={{headerShown: false}}/>
    </LogInStack.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState(null);
 // const [user, setUser] = useState<User>({});


  useEffect (() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);

  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Login'>
        {user ? (
          <Stack.Screen name='Inside' component={InsideLayout} options={{headerShown: false}}/>
        ) : (
          <Stack.Screen name='Login' component={LoginLayout} options={{headerShown: false}}/>
        )}
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

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
