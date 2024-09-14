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
import BackButton from '../../components/BackButton';
import {styles} from './style';
import {images} from '../../services/utilities/images';
import {colors, sizes} from '../../services';
import {Picker} from '@react-native-picker/picker';
import Modal from 'react-native-modal';

export default function ContactUs() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const [formData, setFormData] = useState({
    pendidikan: '',
  });

  const handleInputChange = (name, value) => {
    setFormData({...formData, [name]: value});
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
 
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <BackButton />
          <Text style={styles.title}>Hubungi Kami</Text>

          <View style={styles.btnTop}>
            <TouchableOpacity style={styles.btn}>
              <Image source={images.whatsappIcon} style={styles.whatsappIcon} />
              <Text style={styles.btnText}>WhatsApp</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnTop}>
            <TouchableOpacity
              style={[styles.btn, {backgroundColor: '#0084FF'}]}>
              <Image source={images.messenger} style={styles.whatsappIcon} />
              <Text style={styles.btnText}>FaceBook</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnTop}>
            <TouchableOpacity
              style={[styles.btn, {backgroundColor: '#E8E1D9'}]}>
              <Image
                source={images.instagram}
                style={[styles.whatsappIcon, {right: sizes.screenWidth * 0.01}]}
              />
              <Text style={styles.btnText}>Instagram</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnTop}>
            <TouchableOpacity
              style={[styles.btn, {backgroundColor: colors.blue}]}>
              <Image
                source={images.phone}
                style={[styles.phoneIcon, {right: sizes.screenWidth * 0.01}]}
              />
              <Text style={styles.btnText}>Telefon kami</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={[styles.orText]}>Atau emel kami</Text>
            <View style={styles.line} />
          </View>

          <TextInput
            style={[styles.input]}
            placeholder="Nama anda"
            value={username}
            onChangeText={setUsername}
            placeholderTextColor={colors.disabledBg}
          />
          <TextInput
            style={[styles.input]}
            placeholder="Alamat emel anda"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor={colors.disabledBg}
          />

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={formData.jantina}
              onValueChange={value => handleInputChange('pendidkan', value)}
              style={styles.picker}
              dropdownIconColor={colors.white}>
              <Picker.Item
                label="Kategori emel"
                value=""
                color={colors.disabledBg}
              />
              <Picker.Item label="Option 1" value="Option 1" />
              <Picker.Item label="Option 2" value="Option 2" />
              <Picker.Item label="Option 3" value="Option 3" />
            </Picker>
            <Image source={images.dropdownIcon} style={styles.pickerIcon} />
          </View>

          <TextInput
            style={[
              styles.input,
              {
                height: sizes.screenHeight * 0.2,
                borderRadius: sizes.screenWidth * 0.05,
              },
            ]}
            placeholder="Mesej"
            value={message}
            onChangeText={setMessage}
            placeholderTextColor={colors.disabledBg}
          />

          <Text style={styles.label}>Lampiran</Text>
          <TouchableOpacity
            style={styles.fileInput}
            //   onPress={handleFileUpload}
          >
            <Text style={styles.chooseText}>Choose file</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitButton} 
          onPress={toggleModal}
          >
              <Text style={styles.submitButtonText}>Hantar emel</Text>
            </TouchableOpacity>
        </View>

        <Modal isVisible={isModalVisible}>
        <View style={styles.modalView}>
          <Image source={images.logo} style={styles.logo} />
          <View style={styles.greenBorderModal}></View>

          <Text style={[styles.modalText, styles.bold]}>
          E-mel anda sudah dihantar
          </Text>
          <View style={styles.btnTop}>
            <TouchableOpacity onPress={toggleModal} style={styles.modalBtn}>
              <Text style={styles.modalBtnText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}
