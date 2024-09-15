import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {images} from '../../services/utilities/images';
import {colors, fontSize, sizes} from '../../services';

export default function Warning({navigation}) {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = event => {
    const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;
    const isScrolledPastHalf =
      contentOffset.y > contentSize.height / 2 - layoutMeasurement.height / 2;
    setShowButton(isScrolledPastHalf); 
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Image source={images.backIcon} style={styles.headerBack} />
          </TouchableOpacity>
          <Text style={styles.userName}>Peringatan ( Sangat Penting)</Text>
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          onScroll={handleScroll} 
          scrollEventThrottle={16}>
          <Image source={images.warningIcon} style={styles.warningIcon} />
          <View style={styles.contentSection}>
            <Text style={styles.contentText}>
              99% orang yang menyertai sistem cari jodoh online tidak ada
              masalah. Ada 1% yang akan menghadapi pelbagai masalah. Ini enam (
              6 ) tips kami untuk orang yang kurang berpengalaman mencari jodoh
              secara online untuk mengelak dari masalah:
            </Text>
            <Text style={styles.contentText}>
              1 . JANGAN SESEKALI BERIKAN WANG JIKA DIMINTA.
            </Text>
            <Text style={styles.contentText}>
              Pelbagai alasan akan diberikan untuk meminjam wang yang tidak akan
              dikembalikan seperti alasan untuk berniaga, menjelaskan hutang,
              menjelaskan bil perubatan, bayar hutang along, duit sudah
              kehabisan, nenek sakit, kucing sakit dan sebagainya. Juga berhati
              hati dengan orang yang meminta wang melalui telefon luar negara
              tau dalam negara, berjanji untuk berkahwin tetapi belum boleh
              pulang dari luar negara. Ada yang memberi alasan
            </Text>
            <Text style={styles.contentText}>
              Minta IC si dia untuk kepastian umur. Kemudian siasat lebih lanjut
              tentang rumah yang dia tinggal. Paling penting mesti boleh
              berjumpa ibu ayah atau ahli keluarganya yang TULEN. Ini untuk
              memastikan dia betul betul bujang. Pengakuan dari si dia tidak
              boleh diterima sepenuhnya. Sekalipun anda tidak bermasalah untuk
              berpoligami, anda perlu tahu status perkahwinannya dari awal untuk
              mengelakkan masalah di masa hadapan.
            </Text>
            <Text style={styles.contentText}>
              Fikir 10 kali jika diajak nikah thailand. seronok sekejap tapi
              jangka masa panjang akan mendatangkan masalah kepada hubungan
              antara keluarga, taraf anak dan faraid harta. poligami itu ok jika
              nikah mengikut undang-undang, pasangan sangat- sangat berkemampuan
              dan semua pihak berpuas hati. Jangan belakangkan keluarga dalam
              membuat keputusan.
            </Text>
            <Text style={styles.contentText}>
              bujang. Kami akan membantu anda untuk membuat laporan polis.
              Berikan gambar individu terbabit untuk rekod kami.
            </Text>
            <Text style={styles.contentText}>
              kepada yang masih belum bertemu pasangan, teruskan usaha dan
              jangan putus asa. laman web baitulmuslim.com hanyalah medium,
              ketentuan jodoh adalah terserah kepada Allah s.w.t.
            </Text>
            <Text style={styles.contentText}>
              Ini hanyalah sekadar peringatan sahaja. Kebanyakkan ahli
              baitulmuslim.com adalah baik dan beradab. sifat berhati-hati dan
              bersabar tanpa tergopoh gapah adalah untuk kebaikan diri anda
              sendiri.
            </Text>
            <Text style={styles.contentText}>
              Sebarang permasalahan sila hubungi Admin Baitulmuslim.com. Klik
              button di bawah untuk mesej admin.
            </Text>
          </View>
        </ScrollView>
        {showButton && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.btn}>
            <Image source={images.whatsappIcon} style={styles.whatsappIcon} />
            <Text style={styles.btnText}>WhatsApp</Text>
          </TouchableOpacity>
        </View>
          )}
      </View>
    </SafeAreaView>
  );
}
