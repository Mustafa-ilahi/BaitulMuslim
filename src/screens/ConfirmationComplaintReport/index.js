import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {styles} from './style';
import {ScrollView} from 'react-native-gesture-handler';
import BackButton from '../../components/BackButton';
import {colors, sizes} from '../../services';

export default function ConfirmationComplaintReport({route, navigation}) {
  const {id, selectedIssues, keterangan} = route?.params;
  console.log(selectedIssues);

  const handleHantar = () => {
    navigation.navigate('ComplainInfoSuccess');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <BackButton />
          <Text style={styles.title}>Pengesahan Laporan Aduan</Text>

          <Text style={styles.label}>No. Calon :</Text>
          <View style={styles.input}>
            <Text style={styles.id}>{id}</Text>
          </View>

          <Text style={styles.label}>Salahlaku :</Text>
          {selectedIssues && selectedIssues.length > 0 ? (
            selectedIssues.map((issue, index) => (
              <Text style={styles.checkboxLabel} key={index}>
                {index + 1}. {issue}
              </Text>
            ))
          ) : (
            <Text style={styles.checkboxLabel}>No issues selected</Text>
          )}

          <Text style={[styles.label, styles.top]}>Keterangan:</Text>
          <View
            style={[
              styles.input,
              {
                height: sizes.screenHeight * 0.2,
                borderRadius: sizes.screenWidth * 0.05,
              },
            ]}>
            <Text style={styles.input}>{keterangan}</Text>
          </View>
          <Text style={styles.label}>Lampiran (jika ada):</Text>
          <TouchableOpacity style={styles.fileInput}>
            <Text style={styles.chooseText}>img/video</Text>
          </TouchableOpacity>

          <View style={styles.btnRow}>
            <TouchableOpacity
              style={[styles.balikButton, {marginRight: 10}]}
              onPress={() => navigation.goBack()}>
              <Text style={styles.submitButtonText}>Balik Semula</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.submitButton, {marginLeft: 10}]}
              onPress={handleHantar}>
              <Text style={styles.submitButtonText}>Hantar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
