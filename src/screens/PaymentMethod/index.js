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
import {colors, sizes} from '../../services';
import {Dropdown} from 'react-native-element-dropdown';

export default function PaymentMethod() {
  const [selectedMethod, setSelectedMethod] = useState('card');
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [valueWallet, setValueWallet] = useState(false);
  const [isFocusWallet, setIsFocusWallet] = useState(false);

  const bankData = [
    {label: 'Sila pilih bank', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];

  const eWalletData = [
    {label: 'Pilih perkhidmatan e-wallet', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];

  const renderPaymentForm = () => {
    switch (selectedMethod) {
      case 'card':
        return (
          <View style={[styles.formContainer, styles.greenBorder]}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Credit/Debit card number</Text>
              <TextInput style={styles.input} keyboardType="numeric" />
            </View>
            <View style={styles.row}>
              <View style={styles.inputGroupHalf}>
                <Text style={styles.label}>Exp. Month</Text>
                <TextInput style={styles.inputHalf} keyboardType="numeric" />
              </View>
              <View style={styles.inputGroupHalf}>
                <Text style={styles.label}>Exp. Year</Text>
                <TextInput style={styles.inputHalf} keyboardType="numeric" />
              </View>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Security Code</Text>
              <TextInput
                style={[styles.input, {width: sizes.screenWidth * 0.3}]}
                keyboardType="numeric"
              />
            </View>
          </View>
        );
      case 'onlineBanking':
        return (
          <View
            style={[
              styles.formContainer,
              {marginBottom: sizes.screenHeight * 0.375},
            ]}>
            <Dropdown
              style={[styles.dropdown]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={bankData}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Sila pilih bank'}
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
              renderItem={item => (
                <View style={styles.item}>
                  <Text style={[styles.itemText, {color: colors.grayText}]}>
                    {item.label}
                  </Text>
                </View>
              )}
            />
          </View>
        );
      case 'ewallet':
        return (
          <View
            style={[
              styles.formContainer,
              {marginBottom: sizes.screenHeight * 0.375},
            ]}>
            <Dropdown
              style={[styles.dropdown]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={eWalletData}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Pilih perkhidmatan e-wallet'}
              value={valueWallet}
              onFocus={() => setIsFocusWallet(true)}
              onBlur={() => setIsFocusWallet(false)}
              onChange={item => {
                setValueWallet(item.value);
                setIsFocusWallet(false);
              }}
              renderItem={item => (
                <View style={styles.item}>
                  <Text style={[styles.itemText, {color: colors.grayText}]}>
                    {item.label}
                  </Text>
                </View>
              )}
            />
          </View>
        );
      default:
        return null;
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BackButton />
        <Text style={styles.title}>Kaedah Pembayaran</Text>

        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedMethod === 'card' && styles.activeTab,
            ]}
            onPress={() => setSelectedMethod('card')}>
            <Text
              style={[
                styles.tabText,
                {
                  width: sizes.screenWidth * 0.2,
                  textAlign: 'center',
                },
              ]}>
              Card
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedMethod === 'onlineBanking' && styles.activeTab,
            ]}
            onPress={() => setSelectedMethod('onlineBanking')}>
            <Text
              style={[
                styles.tabText,
                {
                  width: sizes.screenWidth * 0.3,
                  textAlign: 'center',
                },
              ]}>
              Online Banking
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedMethod === 'ewallet' && styles.activeTab,
            ]}
            onPress={() => setSelectedMethod('ewallet')}>
            <Text
              style={[
                styles.tabText,
                {
                  width: sizes.screenWidth * 0.28,
                  textAlign: 'center',
                },
              ]}>
              QR & E-Wallet
            </Text>
          </TouchableOpacity>
        </View>

        {renderPaymentForm()}

        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Teruskan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
