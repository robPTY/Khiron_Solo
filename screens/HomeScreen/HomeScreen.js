import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function MyPage() {
  return (
    <View style={styles.container}>
      <View style={[styles.section, styles.section1]}>
        <Text style={styles.soloText}>SOLO</Text>
      </View>
      <View style={[styles.section, styles.section2]}>
        <View style={styles.timerBox}>
          <Text style={styles.timerText}>00:00</Text>
        </View>
        <TouchableOpacity style={styles.startButton}>
          <Text style={[styles.buttonText, styles.startButtonText]}>Start Activity</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.section, styles.section3]}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.buttonText}>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section1: {
    marginBottom: 10,
    alignItems: 'left',
    color: '#0ABC71'
  },
  section2: {
    marginVertical: 10,
  },
  section3: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly', // Adjusted to evenly distribute buttons
    alignItems: 'center',
  },
  soloText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  timerBox: {
    width: 300,
    height: 150,
    backgroundColor: '#f0f0f0',
    borderRadius: 20, // Adjusted border radius
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  startButton: {
    marginTop: 20,
    backgroundColor: '#0ABC71',
    paddingVertical: 15, // Adjusted padding
    paddingHorizontal: 40, // Adjusted padding
    borderRadius: 10, // Adjusted border radius
  },
  startButtonText: {
    fontSize: 20, // Adjusted font size
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  navButton: {
    backgroundColor: '#0ABC71',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
