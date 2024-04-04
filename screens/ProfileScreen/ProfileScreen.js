import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import ImagePicker from 'react-native-image-picker';
import ProfileImage from '../../assets/pfp.jpg';

export default function ProfileScreen({navigation}) {
  const emergencyContacts = [
    { name: 'John Doe', phoneNumber: '123-456-7890' },
    { name: 'Jane Smith', phoneNumber: '987-654-3210' },
  ];
  
  const [profilePic, setProfilePic] = useState(ProfileImage);

  const selectImage = () => {
    const options = {
      title: 'Select Profile Picture',
      cancelButtonTitle: 'Cancel',
      takePhotoButtonTitle: 'Take Photo',
      chooseFromLibraryButtonTitle: 'Choose from Library',
      quality: 0.5,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setProfilePic(source);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer} onPress={selectImage}>
      <View style={styles.imageContainer}>
          <Image
            style={styles.profileImage}
            source={profilePic}
          />
        </View>
        <Text style={styles.profileName}>ANNA CAMPBELL</Text>
        <Text style={styles.profileEmail}>asimpson@jbu.edu</Text>
      </View>
      <View style={styles.emergencyContainer}>
        <Text style={styles.emergencyTitle}>Emergency Contacts</Text>
        {emergencyContacts.map((contact, index) => (
          <TouchableOpacity key={index} style={styles.contactContainer}>
            <Text style={styles.contactName}>{contact.name}</Text>
            <Text style={styles.contactNumber}>{contact.phoneNumber}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.navButton}>
          <Feather name="activity" size={40} color="white" onPress={() => navigation.navigate('ActivityLogScreen')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Feather name="home" size={40} color="white" onPress={() => navigation.navigate('Inside')} />
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
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileEmail:{
    fontSize: 16,
    fontWeight: 'bold'
  },
  imageContainer:{
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
    marginTop: 50,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  emergencyContainer: {
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
    paddingTop: 20,
  },
  emergencyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactNumber: {
    fontSize: 14,
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
