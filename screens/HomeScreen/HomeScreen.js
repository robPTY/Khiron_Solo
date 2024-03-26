import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function HomePage({navigation}) {
  const [timer, setTimer] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    setTimerRunning(true);
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  const buttonColor = timerRunning ? 'red' : '#0ABC71';

  const stopTimer = () => {
    setTimerRunning(false);
    clearInterval(intervalRef.current);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <View style={styles.container}>
      <View style={[styles.section, styles.section1]}>
        <Text style={styles.soloText}>SOLO</Text>
      </View>
      <View style={[styles.section, styles.section2]}>
        <View style={styles.timerBox}>
          <Text style={styles.timerText}>{formatTime(timer)}</Text>
        </View>
        <TouchableOpacity style={[styles.startButton, { backgroundColor: buttonColor }]}  onPress={timerRunning ? stopTimer : startTimer}>
          <Text style={[styles.buttonText, styles.startButtonText]}>
            {timerRunning ? 'Stop Activity' : 'Start Activity'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.section, styles.section3]}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.buttonText}>
              <Feather name="home" size={40} color="white" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Feather name="activity" size={40} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <AntDesign name="user" size={40} color="white" onPress={() => navigation.navigate('ProfileScreen')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    width: '100%',
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section1: {
    marginBottom: 10,
    alignItems: 'left',
    color: '#0ABC71',
  },
  section2: {
    marginVertical: 10,
  },
  section3: {
    marginTop: 300,
    paddingTop: 40,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  soloText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0ABC71',
    paddingLeft: 20,
  },
  timerBox: {
    width: 325,
    height: 150,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  startButton: {
    marginTop: 20,
    marginBottom: -250,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  startButtonText: {
    fontSize: 25,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  navButton: {
    marginTop: 20,
    backgroundColor: '#383838',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonContainer: {
    backgroundColor: '#383838',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 35,
    paddingBottom: 40,
    paddingTop: 10,
  },
});
