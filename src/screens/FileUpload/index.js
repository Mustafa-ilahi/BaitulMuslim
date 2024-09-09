import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {styles} from './style.js';
import BackButton from '../../components/BackButton/index.js';
import {images} from '../../services/utilities/images/index.js';
import { launchImageLibrary} from 'react-native-image-picker';

export default function FileUpload() {
  const [imageUri, setImageUri] = useState('');

  const imageGalleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        const source = {uri: res.uri};
        setImageUri(res.assets[0].uri);
      }
    });
  };

  const pickVideo = () => {
    const options = {
      mediaType: 'video',
      videoQuality: 'high',
      durationLimit: 30, // duration limit in seconds
      includeBase64: false,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled video picker');
      } else if (response.errorCode) {
        console.log('Video picker error: ', response.errorMessage);
      } else {
        console.log('Selected video: ', response.assets[0]);
        
      }
    });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <BackButton />

          <View style={{flex: 1, justifyContent: 'center'}}>
            <TouchableOpacity style={styles.btn} onPress={imageGalleryLaunch}>
              <Image source={images.imageIcon} style={styles.btnIcon}/>
              <Text style={styles.btnText}>Gambar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={pickVideo}>
              <Image source={images.videoIcon} style={styles.btnIcon}/>
              <Text style={styles.btnText}>Video</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.btn}>
                <Image />
                <Text style={styles.btnText}>Gambar</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
