import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { FIREBASE_APP } from '../../FirebaseConfig';

export default function ActivityLogs({ navigation, route }) {
  const [activityLogs, setActivityLogs] = useState([]);

  const db = getDatabase(FIREBASE_APP);
  const userId ='qZuIFrRweSTWbPHtYZwDFeR2KtF2';
  const location ='';

  useEffect(() => {
    if (route.params && route.params.timer !== undefined) {
      const { timer } = route.params;
      saveActivityLog(timer);
    }
  }, [route.params]);

  const saveActivityLog = (time) => {
    // Save the activity log using your preferred method
    const date = new Date().toISOString().split('T')[0];
    const log = { id: activityLogs.length + 1, time, date };
    setActivityLogs([log, ...activityLogs]);
    set(ref(db, 'Users/' + userId+'/Past_Rides/Ride2'), {
      Time: time,
      Date: date,
      Location: location
    });
    console.log(activityLogs);
  };

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
