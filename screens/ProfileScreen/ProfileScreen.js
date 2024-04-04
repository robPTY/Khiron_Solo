import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import ImagePicker from 'react-native-image-picker';
import ProfileImage from '../../assets/pfp.jpg';

export default function ProfileScreen({navigation, userData}) {
  
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
      <TouchableOpacity onPress={() => navigation.navigate('SettingScreen')}>
        <AntDesign style={styles.settingsIcon} name="setting" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.profileContainer} onPress={selectImage}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={profilePic}
        />
        <Text style={styles.profileName}>{userData.Name}</Text>
        <Text style={styles.profileEmaiL}>{userData.Email}</Text>
      </View>
      </View>
      <View style={styles.emergencyContainer}>
        <Text style={styles.emergencyTitle}>Emergency Contacts</Text>
        {Object.keys(userData.Contacts).map((contactId, index) => (
          <TouchableOpacity key={index} style={styles.contactContainer}>
            <Text style={styles.contactName}>{userData.Contacts[contactId].Name}</Text>
            <Text style={styles.contactNumber}>{userData.Contacts[contactId].Number}</Text>
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
    fontSize: 30,
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
  settingsIcon: {
    marginTop: 30,
    fontSize: 30,
    left: 320
  }
});
