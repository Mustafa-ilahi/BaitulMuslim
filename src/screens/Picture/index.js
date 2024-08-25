import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {styles} from './style';
import {images} from '../../services/utilities/images';
import {colors, sizes} from '../../services';
import BackButton from '../../components/BackButton';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function Picture() {
  const [imageUri, setImageUri] = useState('');

  const cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, res => {
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
        console.log('response--->', JSON.stringify(res));
        setImageUri(res.assets[0].uri);
      }
    });
  };

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

  const handleSave = () => {};

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>BAITULMUSLIM</Text>
        </View>
        <View style={styles.backButtonTop}>
          <BackButton />
        </View>
        <Text style={styles.title}>GAMBAR</Text>
        {imageUri ? (
          <Image source={{uri: imageUri}} style={styles.pictureCard} />
        ) : (
          <View style={styles.pictureCard}>
            <TouchableOpacity style={styles.cameraBtn}>
              <Image source={images.cameraIcon} style={styles.cameraIcon} />
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity style={styles.btn} onPress={cameraLaunch}>
          <Text style={styles.btnText}>Ambil gambar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={imageGalleryLaunch}>
          <Text style={styles.btnText}>Ambil dari telefon</Text>
        </TouchableOpacity>
        <View style={styles.btnTop}>
          <TouchableOpacity onPress={handleSave} style={styles.saveBtn}>
            <Text style={styles.saveBtnText}>Simpan</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.instructionCard}>
          <Text style={styles.head}>
            Pastikan gambar yang diupload memenuhi kriteria dibawah:
          </Text>
          <Text style={styles.content}>
            1. <Text style={styles.green}>JELAS</Text>. Tidak terlalu gelap atau
            kabur.
          </Text>
          <Text style={styles.content}>
            2. Hendaklah bahagian <Text style={styles.green}>MUKA</Text>{' '}
            memenuhi ruangan gambar.
          </Text>
          <Text style={styles.content}>
            3. Posisi yang sesuai dan sopan. Pakaian pastikan{' '}
            <Text style={styles.green}>MENUTUP AURAT</Text> dan
            <Text style={styles.red}> TIDAK SEKSI</Text>.
          </Text>
          <Text style={styles.content}>
            4. Gambar yang dihantar mestilah{' '}
            <Text style={styles.green}>SEORANG</Text> sahaja. Jangan masukkan
            gambar <Text style={styles.red}>BERDUA</Text> dan lain-lain.
          </Text>
          <Text style={styles.content}>
            5. Gambar <Text style={styles.red}>BERPURDAH</Text>, memakai{' '}
            <Text style={styles.red}>PELITUP MUKA (MASK)</Text> atau memakai{' '}
            <Text style={styles.red}>CERMIN MATA GELAP</Text> tidak digalakkan.
          </Text>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.loginText}>Ada masalah kemaskini gambar?</Text>
            <TouchableOpacity
              // onPress={handleWhatsapp}
              style={styles.top}>
              <Text style={[styles.loginLink, styles.top]}>
                 klik sini untuk Whatsapp Admin.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
