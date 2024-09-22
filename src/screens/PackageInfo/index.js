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

export default function PackageInfo({route, navigation}) {
  const {title, price} = route?.params;
  
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BackButton />
        <Text style={styles.title}>Maklumat Pakej</Text>

        <View style={styles.card}>
          <View style={styles.planSection}>
            <Text style={styles.planText}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
          </View>

          <View style={styles.divider} />

          <Text style={styles.infoText}>
            Nombor pendaftaran SST: B16-0970-07643
          </Text>
          <Text style={styles.infoText}>*SST - Sales and Services Tax</Text>

          <View style={[styles.summary, styles.top]}>
            <Text style={styles.summaryText}></Text>
            <Text style={styles.summaryTextRight}>SubTotal {price}</Text>
          </View>
          <View style={styles.summary}>
            <Text style={styles.summaryText}></Text>
            <Text style={styles.summaryTextRight}>Tax RM5.90</Text>
          </View>
          <View style={styles.summary}>
            <Text style={styles.totalText}></Text>
            <Text style={styles.totalTextRight}>Total {price}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("PaymentMethod")}>
          <Text style={styles.buttonText}>Bayar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
