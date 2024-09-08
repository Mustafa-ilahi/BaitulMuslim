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

import React, {useState} from 'react';
import {styles} from './style';
import {images} from '../../services/utilities/images';
import {colors, sizes} from '../../services';

export default function Registration({navigation}) {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLoginPress = () => {
    navigation.navigate("Login")
    console.log('Log Masuk Di Sini pressed');
  };

  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: colors.white}}>
        <View style={styles.container}>
          <Image source={images.logo} style={styles.logo} />
          <Text style={styles.title}>Daftar</Text>
          <Text style={styles.orText}>Daftar menggunakkan media sosial:</Text>

          <TouchableOpacity style={styles.googleButton}>
            <Text style={styles.googleButtonText}>Daftar Dengan Google</Text>
          </TouchableOpacity>

          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>Atau daftar masuk dengan emel</Text>
            <View style={styles.line} />
          </View>

          <TextInput
            style={styles.input}
            placeholder="No Telefon (Contoh: 0123456789)"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            placeholderTextColor={colors.disabledBg}
          />
          <TextInput
            style={styles.input}
            placeholder="Alamat emel (E-mail)"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor={colors.disabledBg}
          />
          <TextInput
            style={styles.input}
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
          <TextInput
            style={styles.input}
            placeholder="Ulang kata laluan (Password)"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            placeholderTextColor={colors.disabledBg}
          />

          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate('CandidateForm')}>
            <Text style={styles.registerButtonText}>Daftar</Text>
          </TouchableOpacity>

          <Text style={styles.loginText}>
            Sudah ada akaun?{' '}
            <TouchableOpacity onPress={handleLoginPress} style={styles.top}>
              <Text style={[styles.loginLink, styles.top]}>
                Log Masuk Di Sini
              </Text>
            </TouchableOpacity>
          </Text>
          <Text style={styles.noticeText}>
            Baitulmuslim.com hanya untuk warganegara Malaysia yang BUJANG, JANDA
            dan DUDA sahaja
          </Text>
        </View>
        <View style={{marginBottom: sizes.screenHeight * 0.1}}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
