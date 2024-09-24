import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import BackButton from '../../components/BackButton';
import {colors, sizes} from '../../services';
import {images} from '../../services/utilities/images';
import CheckBox from '@react-native-community/checkbox';
import Modal from 'react-native-modal';

export default function Settings({navigation}) {
  const [isModalVisible, setModalVisible] = useState(false);

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

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.btnRow}>
            <BackButton />
            <Text style={[styles.title, styles.center]}>Settings</Text>
          </View>
          <View
            style={{
              padding: sizes.screenHeight * 0.01,
              borderWidth: 1,
              borderColor: colors.disabledBg2,
              marginBottom: sizes.screenHeight * 0.03,
            }}>
            <View style={styles.premiumContainer}>
              <Text style={styles.premiumText}>Status Keahlian Premium</Text>
            </View>
            <View>
              <Text style={styles.expiryText}>
                Tarikh Tamat Tempoh ahli premium: 12/12/2023 - 2 p.m.
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={[styles.updateButton, styles.borderTop]}
            onPress={() => navigation.navigate('UpdatePicture')}>
            <Image source={images.insertPhoto} style={styles.icon} />
            <Text style={styles.buttonText}> Kemaskini Gambar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.updateButton, styles.borderBottom]}
            onPress={() => navigation.navigate('FormUpdate')}>
            <Image source={images.assignment} style={styles.icon2} />

            <Text style={styles.buttonText}> Kemaskini Borang</Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Akaun Anda</Text>
          <View
            style={{
              backgroundColor: '#E8E1D9',
              padding: sizes.screenHeight * 0.02,
              borderRadius: sizes.screenWidth * 0.03,
              borderColor: '#F1F1F1',
              borderWidth: 1,
            }}>
            <Text style={styles.label}>Kata Laluan Semasa (Password)</Text>
            <TextInput
              style={styles.input}
              placeholder="Kata Laluan Semasa"
              secureTextEntry={true}
            />
            <Text style={styles.noteText}>
              Diperlukan jika anda ingin menukar kata laluan baru di bawah
            </Text>

            <Text style={styles.label}>
              Alamat emel (E-mail)<Text style={{color: colors.red}}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Alamat emel"
              keyboardType="email-address"
            />
            <Text style={styles.noteText}>
              Emel anda tidak didedahkan kepada umum
            </Text>
            <Text style={styles.label}>
              Nama Ringkas (Username)<Text style={{color: colors.red}}>*</Text>
            </Text>
            <TextInput style={styles.input} placeholder="Nama Ringkas" />

            <Text style={styles.label}>Kata Laluan Baru (New Password)</Text>
            <TextInput
              style={styles.input}
              placeholder="Kata Laluan Baru"
              secureTextEntry={true}
            />

            <Text style={styles.label}>Ulang Kata Laluan Baru</Text>
            <TextInput
              style={styles.input}
              placeholder="Ulang Kata Laluan Baru"
              secureTextEntry={true}
            />
          </View>
          <View
            style={{
              marginTop: sizes.screenHeight * 0.03,
              padding: sizes.screenHeight * 0.01,
              borderWidth: 1,
              borderColor: colors.disabledBg2,
              marginBottom: sizes.screenHeight * 0.03,
            }}>
            <View style={styles.premiumContainer}>
              <Text style={styles.premiumText}>Penghantaran Emel</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={selectedIssues.gambarSalah}
                onValueChange={() => handleIssueChange('gambarSalah')}
                tintColors={{true: colors.grayText, false: colors.grayText}}
              />
              <Text style={styles.checkboxLabel}>
                Berhenti menghantar sebarang e-mel kepada saya
              </Text>
            </View>
            <Text
              style={[
                styles.noteText,
                {textAlign: 'center', marginTop: sizes.screenHeight * 0.01},
              ]}>
              * Termasuk e-mel notifikasi berkenaan calon mesej kepada saya
            </Text>
          </View>
          <Text style={[styles.sectionTitle2]}>
            Hubungkan Akaun Sosial Media Anda:
          </Text>

          <View style={styles.iconRow}>
            <TouchableOpacity>
              <Image source={images.fbIcon} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={images.googleIcon} style={styles.socialIcon} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.saveButton} onPress={toggleModal}>
            <Text style={styles.saveButtonText}>Simpan</Text>
          </TouchableOpacity>
        </View>

        <Modal isVisible={isModalVisible}>
          <View style={styles.modalView}>
            <Image source={images.logo} style={styles.logo} />
            <View style={styles.greenBorderModal}></View>

            <Text style={[styles.modalText, styles.bold]}>
              Akaun anda sudah disimpan
            </Text>
            <View style={styles.btnTop}>
              <TouchableOpacity onPress={toggleModal} style={styles.modalBtn}>
                <Text style={styles.btnText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}
