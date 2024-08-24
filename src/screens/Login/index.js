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
} from 'react-native';
import {styles} from './style';
import {images} from '../../services/utilities/images';
import {colors, sizes} from '../../services';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleForgotPress = () => {
    console.log('Klik Di Sini pressed');
  };

  const handleRegisterPress = () => {
    console.log('Daftar Masuk Di Sini pressed');
  };

  const handleWhatsAppPress = () => {
    console.log('WhatsApp Admin pressed');
  };

  return (
    <SafeAreaView>
      {/* <ScrollView style={{backgroundColor: colors.white}}> */}
        <View style={styles.container}>
          <Image source={images.logo} style={styles.logo} />
          <Text style={styles.title}>Log Masuk</Text>
          <Text style={styles.orText}>
            Log Masuk menggunakkan media sosial:
          </Text>

          <TouchableOpacity style={styles.googleButton}>
            <Text style={styles.googleButtonText}>Log Masuk Dengan Google</Text>
          </TouchableOpacity>

          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={[styles.orText]}>Atau log masuk dengan emel</Text>
            <View style={styles.line} />
          </View>

          <TextInput
            style={[styles.input,styles.inputTop]}
            placeholder="Nama Ringkas (Username)"
            value={username}
            onChangeText={setUsername}
            placeholderTextColor={colors.disabledBg}
          />
          <TextInput
            style={styles.input}
            placeholder="Kata laluan (Password)"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor={colors.disabledBg}
          />

          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Log Masuk</Text>
          </TouchableOpacity>

          <View style={styles.textContainer}>
            <Text style={styles.loginText}>
              Lupa username atau kata laluan?{' '}
              <TouchableOpacity onPress={handleForgotPress} style={styles.top}>
                <Text style={[styles.loginLink, styles.top]}>Klik Di Sini</Text>
              </TouchableOpacity>
            </Text>

            <Text style={styles.loginText}>
              Belum ada akaun?{' '}
              <TouchableOpacity
                onPress={handleRegisterPress}
                style={styles.top}>
                <Text style={[styles.registerLink, styles.top]}>
                  Daftar Masuk Di Sini
                </Text>
              </TouchableOpacity>
            </Text>
          </View>

          <Text style={[styles.noticeText, styles.noticeTop]}>
            Baitulmuslim.com hanya untuk warganegara Malaysia yang BUJANG, JANDA
            dan DUDA sahaja
          </Text>

          <View style={[styles.row]}>
            <Text style={styles.loginText}>Jika ada masalah, boleh </Text>
            <TouchableOpacity style={[styles.row, styles.bg]}>
              <Image source={images.whatsappIcon} style={styles.whatsappIcon} />

              <Text style={styles.whatsappLink}>WhatsApp Admin </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginBottom: sizes.screenHeight * 0.1}}></View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
