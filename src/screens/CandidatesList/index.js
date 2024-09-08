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
import {images} from '../../services/utilities/images';
import {colors, sizes} from '../../services';
import Modal from 'react-native-modal';
import {Picker} from '@react-native-picker/picker';

export default function CandidatesList({navigation}) {
  const [searchInput, setSearchInput] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [candidateList, setCandidatesList] = useState([
    {
      profile: images.user1,
      age: 38,
      location: 'Selangor',
      education: 'Ijazah Sarjana Muda',
      job: 'Cikgu',
      id: 29800,
    },
    {
      age: 38,
      location: 'Sabah',
      education: 'Diploma',
      job: 'Akauntan',
      id: 22100,
    },
    {
      age: 38,
      location: 'Sabah',
      education: 'Diploma',
      job: 'Akauntan',
      id: 27800,
    },
  ]);
  const [formData, setFormData] = useState({
    pendidikan: '',
    pekerjaan: '',
    negeriAsal: '',
    negeriMenetap: '',
    statusPerkah: '',
    umurMinimum: '',
    umurMaximum: '',
  });
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleInputChange = (name, value) => {
    setFormData({...formData, [name]: value});
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <TouchableOpacity>
            <Image source={images.menuIcon} style={styles.menuIcon} />
          </TouchableOpacity>
          <Text style={styles.heading}>Senarai Calon</Text>

          <View style={styles.searchInput}>
            <TextInput
              style={[styles.input, styles.right]}
              value={searchInput}
              onChangeText={text => {
                setSearchInput(text);
              }}
            />
            <TouchableOpacity
              styles={styles.paddingRight}
              onPress={toggleModal}>
              <Image
                source={images.filterIcon}
                style={[styles.eyeicon, styles.right]}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.cardTop}>
            {candidateList?.map((item, index) => {
              return (
                <View style={styles.card} key={index}>
                  <View style={styles.premiumBtn}>
                    <Text style={styles.whiteText}>Premimum</Text>
                  </View>

                  <View style={styles.cardTop}>
                    <View style={[styles.row, styles.marginBottom]}>
                      <Image source={images.calendarIcon} />
                      <Text style={styles.content}>{item.age}</Text>
                    </View>
                    <View style={[styles.row, styles.marginBottom]}>
                      <Image source={images.locationIcon} style={styles.icon} />
                      <Text style={styles.content}>{item.location}</Text>
                    </View>
                    <View style={[styles.row, styles.marginBottom]}>
                      <Image source={images.schoolIcon} style={styles.icon2} />
                      <Text style={styles.content}>{item.education}</Text>
                    </View>
                    <View style={[styles.row, styles.marginBottom]}>
                      <Image source={images.workIcon} style={styles.icon2} />
                      <Text style={styles.content}>{item.job}</Text>
                    </View>
                    <Image source={images.user1} style={styles.userImg} />

                    <Text style={styles.contentId}>{item.id}</Text>
                  </View>

                  <View style={styles.btnRow}>
                    <TouchableOpacity
                      style={styles.msgBtn}
                      onPress={() =>
                        navigation.navigate('Chat', {id: item.id})
                      }>
                      <Text style={styles.msgText}>Mesej</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.profilBtn}
                      onPress={() =>
                        navigation.navigate('CandidateProfile', {id: item.id})
                      }>
                      <Text style={styles.profilText}>Profil Calon</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>
          <Modal isVisible={isModalVisible}>
            <View style={styles.modalView}>
              <Text style={styles.text}>Pilih Kriteria</Text>
              <View style={styles.greenBorder}></View>
              <ScrollView>
                <Text style={styles.label}>Pendidikan</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={formData.jantina}
                    onValueChange={value =>
                      handleInputChange('pendidkan', value)
                    }
                    style={styles.picker}
                    dropdownIconColor={colors.white}>
                    <Picker.Item label="pilih" value="" />
                    <Picker.Item label="Tiada" value="lelaki" />
                    <Picker.Item
                      label="PMR (Penelian Menegah Rendah)"
                      value="PMR (Penelian Menegah Rendah)"
                    />
                    <Picker.Item
                      label="PT3 (Penetasksiran Tingkatan 3)"
                      value="PT3 (Penetasksiran Tingkatan 3)"
                    />
                  </Picker>
                  <Image
                    source={images.dropdownIcon}
                    style={styles.pickerIcon}
                  />
                </View>
                <Text style={styles.label}>Pekerjaan</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={formData.jantina}
                    onValueChange={value =>
                      handleInputChange('pekerjaan', value)
                    }
                    style={styles.picker}
                    dropdownIconColor={colors.white}>
                    <Picker.Item label="pilih" value="" />
                    <Picker.Item
                      label="Admin / Pentadbiran"
                      value="Admin/Pentadbiran"
                    />
                    <Picker.Item
                      label="Alam Sekitar / Sosiologi"
                      value="Alam Sekitar / Sosiologi"
                    />
                    <Picker.Item
                      label="Arkitek / Seni bina"
                      value="Arkitek / Seni bina"
                    />
                  </Picker>
                  <Image
                    source={images.dropdownIcon}
                    style={styles.pickerIcon}
                  />
                </View>
                <Text style={styles.label}>Negeri Asal</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={formData.jantina}
                    onValueChange={value =>
                      handleInputChange('negeriAsal', value)
                    }
                    style={styles.picker}
                    dropdownIconColor={colors.white}>
                    <Picker.Item label="pilih" value="" />
                    <Picker.Item label="Johor" value="Johor" />
                    <Picker.Item label="Kedah" value="Kedah" />
                    <Picker.Item label="Kelantan" value="Kelantan" />
                  </Picker>
                  <Image
                    source={images.dropdownIcon}
                    style={styles.pickerIcon}
                  />
                </View>
                <Text style={styles.label}>Negeri Menetap</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={formData.jantina}
                    onValueChange={value =>
                      handleInputChange('negeriMenetap', value)
                    }
                    style={styles.picker}
                    dropdownIconColor={colors.white}>
                    <Picker.Item label="pilih" value="" />
                    <Picker.Item label="Johor" value="Johor" />
                    <Picker.Item label="Kedah" value="Kedah" />
                    <Picker.Item label="Kelantan" value="Kelantan" />
                  </Picker>
                  <Image
                    source={images.dropdownIcon}
                    style={styles.pickerIcon}
                  />
                </View>
                <Text style={styles.label}>Status Perkahwinan</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={formData.jantina}
                    onValueChange={value =>
                      handleInputChange('statusPerkah', value)
                    }
                    style={styles.picker}
                    dropdownIconColor={colors.white}>
                    <Picker.Item label="pilih" value="" />
                    <Picker.Item label="Bujang" value="Bujang" />
                    <Picker.Item label="Janda/Duda" value="Janda/Duda" />
                  </Picker>
                  <Image
                    source={images.dropdownIcon}
                    style={styles.pickerIcon}
                  />
                </View>
                <Text style={styles.label}>Umur Minimum</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={formData.jantina}
                    onValueChange={value =>
                      handleInputChange('umurMinimum', value)
                    }
                    style={styles.picker}
                    dropdownIconColor={colors.white}>
                    {Array.from({length: 15}, (_, index) => {
                      const value = 20 + index;
                      return (
                        <Picker.Item
                          key={value}
                          label={value.toString()}
                          value={value.toString()}
                        />
                      );
                    })}
                  </Picker>
                  <Image
                    source={images.dropdownIcon}
                    style={styles.pickerIcon}
                  />
                </View>
                <Text style={styles.label}>Umur Maximum</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={formData.jantina}
                    onValueChange={value =>
                      handleInputChange('umurMaximum', value)
                    }
                    style={styles.picker}
                    dropdownIconColor={colors.white}>
                    {Array.from({length: 15}, (_, index) => {
                      const value = 35 + index;
                      return (
                        <Picker.Item
                          key={value}
                          label={value.toString()}
                          value={value.toString()}
                        />
                      );
                    })}
                  </Picker>
                  <Image
                    source={images.dropdownIcon}
                    style={styles.pickerIcon}
                  />
                </View>
              </ScrollView>
              <View style={[styles.btnRow, styles.modalBtnTop]}>
                <TouchableOpacity style={styles.tutupBtn} onPress={toggleModal}>
                  <Text style={styles.tutpText}>Tutup</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.profilBtn}
                  onPress={toggleModal}>
                  <Text style={styles.profilText}>Cari</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
