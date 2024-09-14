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
import Modal from 'react-native-modal';

export default function CandidateBarred({navigation}) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <BackButton />
          <Text style={styles.title}>Calon Dihalang</Text>
          <Text style={styles.text}>
            Calon yang dihalang tidak akan tahu anda memasukkan dia ke dalam
            senarai calon dihalang. Calon yang dihalang tidak dapat menghantar
            mesej dan melihat akaun anda di BaitulMuslim.com
          </Text>

          <View style={styles.cardContainer}>
            <View style={styles.profileSection}>
              <Image source={images.user1} style={styles.profileImage} />
              <Text style={styles.idText}>29800</Text>
            </View>

            <View style={styles.actionSection}>
              <View style={styles.premiumBadge}>
                <Text style={styles.premiumText}>PREMIUM</Text>
              </View>
              <View style={styles.btnTop}>
                <TouchableOpacity
                  style={styles.actionButtonBlue}
                  onPress={() =>
                    navigation.navigate('CandidateProfile', {id: '29800'})
                  }>
                  <Text style={styles.buttonText}>Profil Calon</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButtonWhite} onPress={toggleModal}>
                  <Text style={styles.buttonTextBlack}>Buka Halangan</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.profileSection}>
              <Image source={images.user3} style={styles.profileImage} />
              <Text style={styles.idText}>22100</Text>
            </View>

            <View style={styles.actionSection}>
              <View style={styles.premiumBadge}>
                <Text style={styles.premiumText}>PREMIUM</Text>
              </View>
              <View style={styles.btnTop}>
                <TouchableOpacity
                  style={styles.actionButtonBlue}
                  onPress={() =>
                    navigation.navigate('CandidateProfile', {id: '22100'})
                  }>
                  <Text style={styles.buttonText}>Profil Calon</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButtonWhite} onPress={toggleModal}>
                  <Text style={styles.buttonTextBlack}>Buka Halangan</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Modal isVisible={isModalVisible}>
            <View style={styles.modalView}>
              <Image source={images.logo} style={styles.logo} />
              <View style={styles.greenBorderModal}></View>

              <Text style={[styles.modalText, styles.bold]}>
              Calon akan dapat melihat semula borang dan menghantar mesej. Adakah anda pasti?
              </Text>
              <View style={styles.btnTop}>
                <TouchableOpacity onPress={toggleModal} style={styles.modalBtn}>
                  <Text style={styles.modalBtnText}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
