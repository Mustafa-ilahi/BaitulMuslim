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
import Modal from 'react-native-modal';

export default function NewPassword() {
  const [username, setUsername] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleHantar = () => {
    toggleModal();
  };

  const handleOkay = () => {
    toggleModal();
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.backButtonTop}>
          <BackButton />
        </View>
        <Image source={images.logo} style={styles.logo} />
        <Text style={styles.title}>BAITULMUSLIM</Text>
        <ImageBackground source={images.bg} style={styles.bgImg}>
          <Text style={styles.text}>Kata laluan baharu:</Text>

          <TextInput
            style={[styles.input, styles.inputTop]}
            placeholder="Masukkan email atau username"
            value={username}
            onChangeText={setUsername}
            placeholderTextColor={colors.disabledBg}
          />

          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleHantar}>
            <Text style={styles.registerButtonText}>Hantar</Text>
          </TouchableOpacity>
        </ImageBackground>

        <Modal isVisible={isModalVisible}>
          <View style={styles.modalView}>
            <Text style={[styles.modalText, styles.bold]}>PERHATIAN</Text>

            <Text style={styles.modalText}>
              Untuk menukar kata laluan, telah dihantar ke alamat emel untuk
              menukar kata laluan alamat emel yang anda isi
            </Text>
            <View style={styles.btnTop}>
              <TouchableOpacity onPress={handleOkay} style={styles.modalBtn}>
                <Text style={styles.btnText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
