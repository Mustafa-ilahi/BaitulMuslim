import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import {images} from '../../services/utilities/images';

export default function CandidateProfile() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Profile Image Outside ScrollView */}
      <View style={styles.imageContainer}>
        <Image
          source={images.user1} // Replace with your image URL or source
          style={styles.profileImage}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.scrollView}
      
      showsVerticalScrollIndicator={false} 
      >
        {/* ID Section */}
        <View style={styles.idSection}>
          <Text style={styles.idText}>ID: 2980</Text>
          
          {/* Swapped positions */}
          <View style={styles.premiumBadge}>
            <Text style={styles.premiumText}>PREMIUM</Text>
          </View>
        </View>

        {/* Premium Badge Moved here */}
        <View style={styles.timeSection}>
          <Text style={styles.activeTime}>15 Minit 30 Saat Yang Lalu</Text>
        </View>

        {/* Menu Section */}
        <View style={styles.menuSection}>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuText}>Profil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuText}>Menu Tambahan</Text>
          </TouchableOpacity>
        </View>

        {/* Personal Information Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Maklumat Peribadi</Text>
          <Text style={styles.sectionText}>Umur: 25</Text>
          <Text style={styles.sectionText}>Tarikh Lahir: 01/01/1998</Text>
          <Text style={styles.sectionText}>Tahap Pendidikan: Degree</Text>
          <Text style={styles.sectionText}>Pekerjaan: Engineer</Text>
          <Text style={styles.sectionText}>Negeri Menetap: Selangor</Text>
          <Text style={styles.sectionText}>Negeri Asal: Johor</Text>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Tentang Diri</Text>
          <Text style={styles.sectionText}>Status Perhubungan: Single</Text>
          <Text style={styles.sectionText}>Status Diri: Available</Text>
          <Text style={styles.sectionText}>Anggaran Masa Ingin Berkahwin: 1 year</Text>
        </View>

        {/* Partner Criteria Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Kriteria Bakal Pasangan</Text>
          <Text style={styles.sectionText}>Tahap Kewangan Pasangan: Stable</Text>
          <Text style={styles.sectionText}>Ciri Pasangan yang Dikehendaki: Kind, Respectful</Text>
        </View>

        {/* Button Section */}
        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>Mesej</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>Kirim Salam</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>Masukkan Ke Calon Kegemaran</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
