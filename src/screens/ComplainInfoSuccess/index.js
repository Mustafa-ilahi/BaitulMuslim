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

export default function ComplainInfoSuccess({navigation}) {
  const handleSave = () => {
    navigation.navigate('CandidatesList');
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>BAITULMUSLIM</Text>
        </View>
        <Image source={images.successIcon} style={styles.successIcon} />
        <Text style={[styles.content, styles.padding]}>
          Maklumat aduan anda sudah berjaya dihantar
        </Text>

        <View style={styles.btnTop}>
          <TouchableOpacity onPress={handleSave} style={styles.saveBtn}>
            <Text style={styles.saveBtnText}>Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
