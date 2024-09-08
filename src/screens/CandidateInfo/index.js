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
import {Picker} from '@react-native-picker/picker';
import {styles} from './style';
import {images} from '../../services/utilities/images';
import {colors, sizes} from '../../services';

export default function CandidateForm({navigation}) {
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
  });

  const [error, setError] = useState(false);

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

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>BAITULMUSLIM</Text>
          </View>
          <ImageBackground
            source={images.gradientBg}
            style={styles.bgImg}
            imageStyle={styles.bgImgStyle}>
            <Text style={styles.text}>Maklumat Calon</Text>
            <View style={styles.greenBorder}></View>
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

              {error && (
                <View style={styles.redNote}>
                  <Text style={styles.redNoteText}>
                    Anda tidak melengkapkan borang cari jodoh di atas. Sila
                    lengkapkan terlebih dahulu sebelum klik butang seterusnya
                  </Text>
                </View>
              )}
            </View>
          </ImageBackground>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Seterusnya</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{paddingBottom: sizes.screenHeight * 0.12}}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
