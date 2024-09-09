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

export default function ComplaintReport({route, navigation}) {
  const {id} = route?.params;

  const [noCalon, setNoCalon] = useState('');
  const [keterangan, setKeterangan] = useState('');
  const [lampiran, setLampiran] = useState(null);
  const [selectedIssues, setSelectedIssues] = useState({
    gambarSalah: false,
    borangSalah: false,
    penipuan: false,
    seranganPeribadi: false,
    sudahBerkahwin: false,
    masalahLain: false,
  });

  const handleIssueChange = issue => {
    setSelectedIssues({...selectedIssues, [issue]: !selectedIssues[issue]});
  };

  const handleFileUpload = () => {
    // You can integrate a file picker library here to allow file attachment
    console.log('File upload functionality here');
    navigation.navigate('FileUpload');
  };

  const handleSubmit = () => {
    const selectedIssuesArray = Object.keys(selectedIssues)
      .filter(issue => selectedIssues[issue])
      .map(issue => {
        const messages = {
          gambarSalah: 'Gambar tidak betul',
          borangSalah: 'Maklumat borang yang tidak betul',
          penipuan: 'Penipuan',
          seranganPeribadi: 'Serangan peribadi',
          sudahBerkahwin: 'Calon ini sudah berkahwin',
          masalahLain: 'Masalah lain',
        };
        return messages[issue];
      });
    navigation.navigate('ConfirmationComplaintReport', {
      id: id,
      selectedIssues: selectedIssuesArray,
      keterangan:keterangan
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.btnRow}>
            <BackButton />
            <Text style={[styles.title, styles.center]}>Laporan Aduan</Text>
          </View>

          <Text style={styles.label}>No. Calon :</Text>
          <View style={styles.input}>
            <Text style={styles.id}>{id}</Text>
          </View>
          {/* Salah Laku */}
          <Text style={styles.label}>Salahlaku :</Text>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={selectedIssues.gambarSalah}
              onValueChange={() => handleIssueChange('gambarSalah')}
              tintColors={{true: colors.grayText, false: colors.grayText}}
            />
            <Text style={styles.checkboxLabel}>Gambar tidak betul.</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={selectedIssues.borangSalah}
              onValueChange={() => handleIssueChange('borangSalah')}
              tintColors={{true: colors.grayText, false: colors.grayText}}
            />
            <Text style={styles.checkboxLabel}>
              Maklumat borang yang tidak betul.
            </Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={selectedIssues.penipuan}
              onValueChange={() => handleIssueChange('penipuan')}
              tintColors={{true: colors.grayText, false: colors.grayText}}
            />
            <Text style={styles.checkboxLabel}>Penipuan.</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={selectedIssues.seranganPeribadi}
              onValueChange={() => handleIssueChange('seranganPeribadi')}
              tintColors={{true: colors.grayText, false: colors.grayText}}
            />
            <Text style={styles.checkboxLabel}>Serangan peribadi.</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={selectedIssues.sudahBerkahwin}
              onValueChange={() => handleIssueChange('sudahBerkahwin')}
              tintColors={{true: colors.grayText, false: colors.grayText}}
            />
            <Text style={styles.checkboxLabel}>Calon ini sudah berkahwin.</Text>
          </View>
          <View style={[styles.checkboxContainer, styles.marginBottom]}>
            <CheckBox
              value={selectedIssues.masalahLain}
              onValueChange={() => handleIssueChange('masalahLain')}
              tintColors={{true: colors.grayText, false: colors.grayText}}
            />
            <Text style={styles.checkboxLabel}>Masalah lain.</Text>
          </View>

          <Text style={styles.label}>Keterangan:</Text>
          <TextInput
            style={[
              styles.input,
              {
                height: sizes.screenHeight * 0.2,
                borderRadius: sizes.screenWidth * 0.05,
              },
            ]}
            value={keterangan}
            onChangeText={text => setKeterangan(text)}
            multiline
          />

          <Text style={styles.label}>Lampiran (jika ada):</Text>
          <TouchableOpacity style={styles.fileInput} onPress={handleFileUpload}>
            <Text style={styles.chooseText}>Choose file</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Hantar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
