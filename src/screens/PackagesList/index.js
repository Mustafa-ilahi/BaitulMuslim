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

export default function PackagesList() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <BackButton />
          <Text style={styles.title}>Senarai Pakej</Text>

          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.cardTitle}>Ahli Premium 2 Tahun</Text>
              <Image source={images.star} style={styles.starImage} />
            </View>
            <Text style={styles.price}>RM 150.00 (DIGALAKKAN)</Text>

            <View style={styles.benefits}>
              <Text style={styles.benefitText}>
                - Boleh melihat semua borang calon cari jodoh.
              </Text>
              <Text style={styles.benefitText}>
                - Boleh melihat gambar calon cari jodoh.
              </Text>
              <Text style={styles.benefitText}>
                - Boleh menerima dan membaca mesej daripada calon lain.
              </Text>
              <Text style={styles.benefitText}>
                - Boleh kirim salam perkenalan kepada calon lain.
              </Text>
              <Text style={styles.benefitText}>
                - Boleh membaca dan membalas mesej daripada calon lain.
              </Text>
              <Text style={styles.benefitText}>
                - Boleh mengetahui status keahlian calon lain sama ada ahli
                biasa atau premium dan mengetahui tarikh terakhir calon aktif.
              </Text>
              <Text style={styles.benefitText}>
                - Boleh melihat maklumat penuh borang calon.
              </Text>
              <Text style={styles.benefitText}>
                - Tempoh keahlian premium 2 Tahun.
              </Text>
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                Klik di sini untuk naik taraf
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.cardTitle}>Ahli Premium 1 Tahun</Text>
              <Image source={images.star} style={styles.starImage} />
            </View>
            <Text style={styles.price}>RM 130.00 </Text>

            <View style={styles.benefits}>
              <Text style={styles.benefitText}>
                - Boleh melihat semua borang calon cari jodoh.
              </Text>
              <Text style={styles.benefitText}>
                - Boleh melihat gambar calon cari jodoh.
              </Text>
              <Text style={styles.benefitText}>
                - Boleh menerima dan membaca mesej daripada calon lain.
              </Text>
              <Text style={styles.benefitText}>
                - Boleh kirim salam perkenalan kepada calon lain.
              </Text>
              <Text style={styles.benefitText}>
                - Boleh membaca dan membalas mesej daripada calon lain.
              </Text>
              <Text style={styles.benefitText}>
                - Boleh mengetahui status keahlian calon lain sama ada ahli
                biasa atau premium dan mengetahui tarikh terakhir calon aktif.
              </Text>
              <Text style={styles.benefitText}>
                - Boleh melihat maklumat penuh borang calon.
              </Text>
              <Text style={styles.benefitText}>
                - Tempoh keahlian premium 1 Tahun.
              </Text>
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                Klik di sini untuk naik taraf
              </Text>
            </TouchableOpacity>
          </View>


          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.cardTitle}>Ahli Premium 2 Bulan</Text>
              <Image source={images.star} style={styles.starImage} />
            </View>
            <Text style={styles.price}>RM 90.00 </Text>

            <View style={styles.benefits}>
              <Text style={styles.benefitText}>
                - Boleh melihat semua borang calon cari jodoh.
              </Text>
              <Text style={styles.benefitText}>
                - Boleh melihat gambar calon cari jodoh.
              </Text>
              <Text style={styles.benefitText}>
                - Boleh menerima dan membaca mesej daripada calon lain.
              </Text>
              <Text style={styles.benefitText}>
                - Boleh kirim salam perkenalan kepada calon lain.
              </Text>
              <Text style={styles.benefitText}>
                - Boleh membaca dan membalas mesej daripada calon lain.
              </Text>
              <Text style={styles.benefitText}>
                - Boleh mengetahui status keahlian calon lain sama ada ahli
                biasa atau premium dan mengetahui tarikh terakhir calon aktif.
              </Text>
              <Text style={styles.benefitText}>
                - Boleh melihat maklumat penuh borang calon.
              </Text>
              <Text style={styles.benefitText}>
                - Tempoh keahlian premium 2 bulan.
              </Text>
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                Klik di sini untuk naik taraf
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
