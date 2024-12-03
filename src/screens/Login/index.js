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
  ActivityIndicator,
} from 'react-native';
import {styles} from './style';
import {images} from '../../services/utilities/images';
import {colors, sizes} from '../../services';
import Toast from 'react-native-toast-message';

export default function Login({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const handleForgotPress = () => {
    navigation.navigate('NewPassword');

    console.log('Klik Di Sini pressed');
  };

  const handleRegisterPress = () => {
    navigation.navigate('Registration');

    console.log('Daftar Masuk Di Sini pressed');
  };

  const handleWhatsAppPress = () => {
    console.log('WhatsApp Admin pressed');
  };

  const handleLogin = () => {
    if (!username || username.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Oops!',
        text2: 'Username is required',
      });
      return;
    }
    if (!password || password.length < 6) {
      Toast.show({
        type: 'error',
        text1: 'Oops!',
        text2: 'Password must be at least 6 characters long.',
      });
      return;
    }

    setLoader(true);

    const myHeaders = new Headers();
    myHeaders.append('Content-type', 'application/json');

    const raw = JSON.stringify({
      name: 'test12',
      pass: 'Test@123.',
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('https://api.gajohrima.com/user/login?_format=json', requestOptions)
      .then(async response => {
        if (response.ok) {
          return response.json();
        } else {
          const errorData = await response.json().catch(() => null);
          console.log(errorData.message);

          console.error(`Request failed with status: ${errorData.message}`);
          // setError(`Signup failed. Status code: ${errorData.message}`);
          setLoader(false);
          return Promise.reject(new Error(`Error ${errorData.message}`));
        }
      })
      .then(result => {
        console.log('Success:', result);
        setLoader(false);
        Toast.show({
          type: 'success',
          text1: 'Login Successful',
          // text2: 'Signup Successful',
        });
        setTimeout(() => {
          navigation.navigate('CandidateForm');
        }, 500);
      })
      .catch(error => {
        console.log('Error:', error.message);
        setLoader(false);
        Toast.show({
          type: 'error',
          text1: 'Oops!',
          text2: error.message,
          visibilityTime: 4000,
          textStyle: {fontSize: 20, fontWeight: 'bold'},
        });
      });

    // navigation.navigate('CandidatesList');
  };
  return (
    <SafeAreaView>
      {/* <ScrollView style={{backgroundColor: colors.white}}> */}
      <View style={styles.container}>
        <Image source={images.logo} style={styles.logo} />
        <Text style={styles.title}>Log Masuk</Text>
        <Text style={styles.orText}>Log Masuk menggunakkan media sosial:</Text>

        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleButtonText}>Log Masuk Dengan Google</Text>
        </TouchableOpacity>

        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={[styles.orText]}>Atau log masuk dengan emel</Text>
          <View style={styles.line} />
        </View>

        <TextInput
          style={[styles.input, styles.inputTop]}
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

        <TouchableOpacity style={styles.registerButton} onPress={handleLogin}>
          {loader ? (
            <ActivityIndicator color={'#fff'} />
          ) : (
            <Text style={styles.registerButtonText}>Log Masuk</Text>
          )}
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
            <TouchableOpacity onPress={handleRegisterPress} style={styles.top}>
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
      <Toast />

      <View style={{marginBottom: sizes.screenHeight * 0.1}}></View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
