import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {images} from '../../services/utilities/images';
import BackButton from '../../components/BackButton';
import Header from '../../components/Header';
import Modal from 'react-native-modal';

export default function MyProfile({navigation}) {
  const [showProfile, setShowProfile] = useState(true);

  const [isModalVisibleKirim, setModalVisibleKirim] = useState(false);
  const [isModalVisibleCalon, setModalVisibleCalon] = useState(false);
  const [isModalVisibleHalang, setModalVisibleHalang] = useState(false);
  const [showKeluText, setShowKeluText] = useState(false);
  const [id, setId] = useState('2980');

  const toggleModalKirim = () => {
    setModalVisibleKirim(!isModalVisibleKirim);
  };
  const toggleModalCalon = () => {
    setModalVisibleCalon(!isModalVisibleCalon);
  };
  const toggleModalHalang = () => {
    setModalVisibleHalang(!isModalVisibleHalang);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={styles.imageContainer}>
        <Image source={images.user2} style={styles.profileImage} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.idSection}>
          <Text style={styles.idText}>ID: {id}</Text>

          <View style={styles.premiumBadge}>
            <Text style={styles.premiumText}>PREMIUM</Text>
          </View>
        </View>

        <View style={styles.menuSection}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => setShowProfile(true)}>
            <Image source={images.profile} style={styles.profileIcon} />
            <Text style={styles.menuText}>Profil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => setShowProfile(false)}>
            <Image source={images.menu} style={styles.profileIcon} />

            <Text style={styles.menuText}>Menu Tambahan</Text>
          </TouchableOpacity>
        </View>

        {showProfile ? (
          <>
            <View style={styles.section}>
              <Text style={styles.sectionHeader}>Maklumat Peribadi</Text>
              <View style={styles.greenBorder}></View>

              <Text style={styles.sectionText}>Umur: </Text>
              <Text style={styles.sectionText}>Tarikh Lahir: </Text>
              <Text style={styles.sectionText}>Tahap Pendidikan: </Text>
              <Text style={styles.sectionText}>Pekerjaan: </Text>
              <Text style={styles.sectionText}>Negeri Menetap: </Text>
              <Text style={styles.sectionText}>Negeri Asal: </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionHeader}>Tentang Diri</Text>
              <View style={styles.greenBorder}></View>

              <Text style={styles.sectionText}>Status Perhubungan: </Text>
              <Text style={styles.sectionText}>Status Diri: </Text>
              <Text style={styles.sectionText}>
                Anggaran Masa Ingin Berkahwin:
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionHeader}>Kriteria Bakal Pasangan</Text>
              <View style={styles.greenBorder}></View>

              <Text style={styles.sectionText}>Tahap Kewangan Pasangan: </Text>
              <Text style={styles.sectionText}>
                Ciri Pasangan yang Dikehendaki:{' '}
              </Text>
            </View>
          </>
        ) : (
          <>
            <View style={styles.buttonSection}>
              <TouchableOpacity
                style={styles.actionButton}
                // onPress={() => navigation.navigate('Chat', {id: id})}
              >
                <Text style={styles.buttonText}>Kemas kini gambar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionButton}
                // onPress={toggleModalKirim}
              >
                <Text style={styles.buttonText}>Kemas kini profil</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionButton}
                // onPress={toggleModalCalon}
              >
                <Text style={styles.buttonText}>Setting</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
        <Modal isVisible={isModalVisibleKirim}>
          <View style={styles.modalView}>
            <Image source={images.logo} style={styles.logo} />
            <View style={styles.greenBorderModal}></View>

            <Text style={[styles.modalText, styles.bold]}>
              Salam anda sudah dikirim
            </Text>
            <View style={styles.btnTop}>
              <TouchableOpacity
                onPress={toggleModalKirim}
                style={styles.modalBtn}>
                <Text style={styles.btnText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal isVisible={isModalVisibleCalon}>
          <View style={styles.modalView}>
            <Image source={images.logo} style={styles.logo} />
            <View style={styles.greenBorderModal}></View>

            <Text style={[styles.modalText, styles.bold]}>
              Calon telah dimasukkan ke dalam senarai calon kegemaran
            </Text>
            <View style={styles.btnTop}>
              <TouchableOpacity
                onPress={toggleModalCalon}
                style={styles.modalBtn}>
                <Text style={styles.btnText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal isVisible={isModalVisibleHalang}>
          <View style={styles.modalView}>
            <Image source={images.logo} style={styles.logo} />
            <View style={styles.greenBorderModal}></View>
            <Text style={[styles.modalText, styles.bold]}>
              Calon dihalang tidak dapat melihat borang dan menghantar mesej
              kepada anda. Adakah anda pasti?
            </Text>
            <View style={styles.btnTop}>
              <TouchableOpacity
                onPress={() => {
                  toggleModalHalang();
                  setShowKeluText(!showKeluText);
                }}
                style={styles.modalBtn}>
                <Text style={styles.btnText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}
