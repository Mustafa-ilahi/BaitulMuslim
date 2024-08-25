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

export default function Thankyou() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>BAITULMUSLIM</Text>
        </View>
        <Image source={images.successIcon} style={styles.successIcon} />
        <Text style={[styles.content, styles.bold]}>Terima kasih</Text>
        <Text style={[styles.content, styles.padding]}>
          Gambar anda sedang dinilai tetapi anda sudah boleh melihat senarai
          calon dan berkomunikasi dengan calon
        </Text>

        <View style={styles.btnTop}>
          <TouchableOpacity
            //   onPress={handleSave}
            style={styles.saveBtn}>
            <Text style={styles.saveBtnText}>Senarai Calon</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
