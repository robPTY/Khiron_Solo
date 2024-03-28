import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function ActivityLogs({ navigation }) {
  const [activityLogs, setActivityLogs] = useState([]);

  // Example of retrieving saved timer information (replace with your actual logic)
  useEffect(() => {
    // Assume saved timer information is retrieved from AsyncStorage or server
    const savedActivityLogs = [
      { id: 1, time: 120, date: '2024-03-28' },
      { id: 2, time: 180, date: '2024-03-27' },
      { id: 3, time: 90, date: '2024-03-26' },
    ];
    setActivityLogs(savedActivityLogs);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.logItem}>
      <Text>Date: {item.date}</Text>
      <Text>Time: {item.time} seconds</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activity Logs</Text>
      <FlatList
        data={activityLogs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('ActivityLogScreen')}>
          <Feather name="activity" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Inside')}>
          <Feather name="home" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('ProfileScreen')}>
          <AntDesign name="user" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 50
  },
  listContainer: {
    flexGrow: 1,
  },
  logItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  navButton: {
    backgroundColor: '#383838',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#383838',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 30,
  },
});
