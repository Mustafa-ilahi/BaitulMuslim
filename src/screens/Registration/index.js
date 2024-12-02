import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  Modal,
  Button,
} from 'react-native';

import React, {useState} from 'react';
import {styles} from './style';
import {images} from '../../services/utilities/images';
import {colors, sizes} from '../../services';
import axios from 'axios';

export default function Registration({navigation}) {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');

  const handleLoginPress = () => {
    navigation.navigate('Login');
    console.log('Log Masuk Di Sini pressed');
  };

  const handleSignup = () => {
    if (!username || username.trim() === '') {
      setError('Username is required.');
      return;
    }

    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!phone || !/^\d{10,15}$/.test(phone)) {
      setError('Please enter a valid phone number (10-15 digits).');
      return;
    }

    setError('');
    setLoader(true);
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      name: {
        value: username,
      },
      pass: {
        value: password,
      },
      mail: {
        value: email,
      },
      field_telefon_bimbit: {
        value: phone,
      },
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      'https://api.gajohrima.com/user/register?_format=json',
      requestOptions,
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          console.error(`Request failed with status: ${response.status}`);
          setError(`Signup failed. Status code: ${response.status}`);
          setLoader(false);
          return Promise.reject(new Error(`HTTP status ${response.status}`));
        }
      })
      .then(result => {
        console.log('Success:', result);
        setLoader(false);
        setError('');
        // navigation.navigate('CandidateForm');
      })
      .catch(error => {
        console.log('Error:', error.message);
        setLoader(false);
        setError(error.message);
      });
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
            onPress={handleSignup}>
            {loader ? (
              <ActivityIndicator color={'#fff'} />
            ) : (
              <Text style={styles.registerButtonText}>Daftar</Text>
            )}
          </TouchableOpacity>
          {error && (
            <Modal transparent={true} visible={true}>
              <View style={styles.modalContainer}>
                <Text style={styles.errorText}>Error: {error}</Text>
                {/* <Button title="OK" onPress={() => setError(false)} /> */}
                <TouchableOpacity onPress={handleLoginPress} style={styles.top}>
              <Text style={[styles.loginLink, styles.top]}>
                OK
              </Text>
            </TouchableOpacity>
              </View>
            </Modal>
          )}
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
