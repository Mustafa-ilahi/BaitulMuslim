import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import BackButton from '../../components/BackButton';
import {Picker} from '@react-native-picker/picker';
import {colors, sizes} from '../../services';
import {images} from '../../services/utilities/images';
import Modal from 'react-native-modal';

export default function FormUpdate() {
  const [isModalVisible, setModalVisible] = useState(false);

  const [formData, setFormData] = useState({
    statusBorang: '',
    jantina: '',
    nama: '',
    noTelefon: '',
    tarikhLahir: '',
    negeriAsal: '',
    negeriMenetap: '',
    statusDiri: '',
    pekerjaan: '',
    Tinggi: '',
  });

  const handleInputChange = (name, value) => {
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = () => {
    if (Object.values(formData).some(field => field === '')) {
      setError(true);
      navigation.navigate('Picture');
    } else {
      setError(false);
    }
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>BAITULMUSLIM</Text>
          </View>

          <View style={styles.btnRow}>
            <View style={{right: sizes.screenWidth * 0.12}}>
              <BackButton />
            </View>
            <Text style={[styles.title, styles.center]}>Kemaskini Borang</Text>
          </View>

          <View
            style={{
              padding: sizes.screenWidth * 0.03,
              borderWidth: 2,
              borderColor: colors.disabledBg2,
              borderRadius: sizes.screenWidth * 0.03,
            }}>
            <View style={styles.formContainer}>
              <Text style={styles.label}>Status Borang</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={formData.statusBorang}
                  onValueChange={value =>
                    handleInputChange('statusBorang', value)
                  }
                  style={styles.picker}
                  dropdownIconColor={colors.white}>
                  <Picker.Item label="Pilih" value="" />
                  <Picker.Item label="Status 1" value="status1" />
                  <Picker.Item label="Status 2" value="status2" />
                </Picker>
                <Image source={images.dropdownIcon} style={styles.pickerIcon} />
              </View>

              <Text style={styles.label}>Jantina</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={formData.jantina}
                  onValueChange={value => handleInputChange('jantina', value)}
                  style={styles.picker}
                  dropdownIconColor={colors.white}>
                  <Picker.Item label="Pilih" value="" />
                  <Picker.Item label="Lelaki" value="lelaki" />
                  <Picker.Item label="Perempuan" value="perempuan" />
                </Picker>
                <Image source={images.dropdownIcon} style={styles.pickerIcon} />
              </View>

              <Text style={styles.label}>Nama</Text>
              <TextInput
                placeholder="Nama"
                value={formData.nama}
                onChangeText={value => handleInputChange('nama', value)}
                style={styles.input}
                placeholderTextColor={colors.placeholder}
              />

              <Text style={styles.label}>No. Telefon</Text>
              <TextInput
                placeholder="No. Telefon"
                value={formData.noTelefon}
                onChangeText={value => handleInputChange('noTelefon', value)}
                keyboardType="phone-pad"
                style={styles.input}
                placeholderTextColor={colors.placeholder}
              />

              <Text style={styles.label}>Tarikh Lahir</Text>
              <TextInput
                placeholder="Tarikh Lahir"
                value={formData.tarikhLahir}
                onChangeText={value => handleInputChange('tarikhLahir', value)}
                style={styles.input}
                placeholderTextColor={colors.placeholder}
              />

              <Text style={styles.label}>Pekerjaan</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={formData.pekerjaan}
                  onValueChange={value => handleInputChange('pekerjaan', value)}
                  style={styles.picker}
                  dropdownIconColor={colors.white}>
                  <Picker.Item label="Pilih" value="" />
                  <Picker.Item label="Pekerjaan 1" value="pekerjaan1" />
                  <Picker.Item label="Pekerjaan 2" value="pekerjaan2" />
                </Picker>
                <Image source={images.dropdownIcon} style={styles.pickerIcon} />
              </View>

              <Text style={styles.label}>Negeri Asal</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={formData.negeriAsal}
                  onValueChange={value =>
                    handleInputChange('negeriAsal', value)
                  }
                  style={styles.picker}
                  dropdownIconColor={colors.white}>
                  <Picker.Item label="Pilih" value="" />
                  <Picker.Item label="Negeri 1" value="negeri1" />
                  <Picker.Item label="Negeri 2" value="negeri2" />
                </Picker>
                <Image source={images.dropdownIcon} style={styles.pickerIcon} />
              </View>

              <Text style={styles.label}>Negeri Menetap</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={formData.negeriMenetap}
                  onValueChange={value =>
                    handleInputChange('negeriMenetap', value)
                  }
                  style={styles.picker}
                  dropdownIconColor={colors.white}>
                  <Picker.Item label="Pilih" value="" />
                  <Picker.Item label="Negeri 1" value="negeri1" />
                  <Picker.Item label="Negeri 2" value="negeri2" />
                </Picker>
                <Image source={images.dropdownIcon} style={styles.pickerIcon} />
              </View>

              <Text style={styles.label}>Status Diri</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={formData.statusDiri}
                  onValueChange={value =>
                    handleInputChange('statusDiri', value)
                  }
                  style={styles.picker}
                  dropdownIconColor={colors.white}>
                  <Picker.Item label="Pilih" value="" />
                  <Picker.Item label="Status 1" value="status1" />
                  <Picker.Item label="Status 2" value="status2" />
                </Picker>
                <Image source={images.dropdownIcon} style={styles.pickerIcon} />
              </View>
              <Text style={[styles.title, styles.center]}>
                Kemaskini Maklumat Tambahan
              </Text>

              <Text style={styles.label}>Tinggi</Text>
              <TextInput
                placeholder="Tinggi"
                value={formData.nama}
                onChangeText={value => handleInputChange('Tinggi', value)}
                style={styles.input}
                placeholderTextColor={colors.placeholder}
              />

              <Text style={styles.label}>Berat</Text>
              <TextInput
                placeholder="Berat"
                value={formData.nama}
                onChangeText={value => handleInputChange('Berat', value)}
                style={styles.input}
                placeholderTextColor={colors.placeholder}
              />

              <Text style={styles.label}>Bangsa</Text>
              <TextInput
                placeholder="Bangsa"
                value={formData.nama}
                onChangeText={value => handleInputChange('Bangsa', value)}
                style={styles.input}
                placeholderTextColor={colors.placeholder}
              />

              <Text style={styles.label}>Negara Menetap</Text>
              <TextInput
                placeholder="Negara Menetap"
                value={formData.nama}
                onChangeText={value =>
                  handleInputChange('Negara Menetap', value)
                }
                style={styles.input}
                placeholderTextColor={colors.placeholder}
              />
              <Text style={styles.label}>Bandar Menetap</Text>
              <TextInput
                placeholder="Bandar Menetap"
                value={formData.nama}
                onChangeText={value =>
                  handleInputChange('Bandar Menetap', value)
                }
                style={styles.input}
                placeholderTextColor={colors.placeholder}
              />

              <Text style={styles.label}>Tahap Pendidikan</Text>
              <TextInput
                placeholder="Tahap Pendidikan"
                value={formData.nama}
                onChangeText={value =>
                  handleInputChange('Tahap Pendidikan', value)
                }
                style={styles.input}
                placeholderTextColor={colors.placeholder}
              />

              <Text style={styles.label}>Status perhubungan</Text>
              <TextInput
                placeholder="Status perhubungan"
                value={formData.nama}
                onChangeText={value =>
                  handleInputChange('Status perhubungan', value)
                }
                style={styles.input}
                placeholderTextColor={colors.placeholder}
              />

              <Text style={styles.label}>Anggaran Masa Ingin Berkahwin</Text>
              <TextInput
                placeholder="Anggaran Masa Ingin Berkahwin"
                value={formData.nama}
                onChangeText={value =>
                  handleInputChange('Anggaran Masa Ingin Berkahwin', value)
                }
                style={styles.input}
                placeholderTextColor={colors.placeholder}
              />

              <Text style={styles.label}>Mengenai Diri</Text>
              <TextInput
                placeholder="Mengenai Diri"
                value={formData.nama}
                onChangeText={value =>
                  handleInputChange('Mengenai Diri', value)
                }
                style={styles.input}
                placeholderTextColor={colors.placeholder}
              />

              <Text style={styles.label}>Status diri</Text>
              <TextInput
                placeholder="Status diri"
                value={formData.nama}
                onChangeText={value => handleInputChange('Status diri', value)}
                style={styles.input}
                placeholderTextColor={colors.placeholder}
              />

              <Text style={styles.label}>Tahap Kewangan Pasangan</Text>
              <TextInput
                placeholder="Tahap Kewangan Pasangan"
                value={formData.nama}
                onChangeText={value =>
                  handleInputChange('Tahap Kewangan Pasangan', value)
                }
                style={styles.input}
                placeholderTextColor={colors.placeholder}
              />

              <Text style={styles.label}>Ciri - ciri Bakal Pasangan</Text>
              <TextInput
                placeholder="Ciri - ciri Bakal Pasangan"
                value={formData.nama}
                onChangeText={value =>
                  handleInputChange('Ciri - ciri Bakal Pasangan', value)
                }
                style={styles.input}
                placeholderTextColor={colors.placeholder}
              />
              <View
                style={{
                  marginTop: sizes.screenHeight * 0.04,
                  marginBottom: sizes.screenHeight * 0.04,
                }}>
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={toggleModal}>
                  <Text style={styles.submitButtonText}>Simpan</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <Modal isVisible={isModalVisible}>
          <View style={styles.modalView}>
            <Image source={images.logo} style={styles.logo} />
            <View style={styles.greenBorderModal}></View>

            <Text style={[styles.modalText, styles.bold]}>
              Maklumat anda telah dikemaskini
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
