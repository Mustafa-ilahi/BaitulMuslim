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
import {styles} from './style';
import {images} from '../../services/utilities/images';
import {colors, sizes} from '../../services';
export default function CandidatesList() {
  const [searchInput, setSearchInput] = useState('');

  const [candidateList, setCandidatesList] = useState([
    {
      profile: images.user1,
      age: 38,
      location: 'Selangor',
      education: 'Ijazah Sarjana Muda',
      job: 'Cikgu',
      id: 29800,
    },
    {
      age: 38,
      location: 'Sabah',
      education: 'Diploma',
      job: 'Akauntan',
      id: 22100,
    },
    {
      age: 38,
      location: 'Sabah',
      education: 'Diploma',
      job: 'Akauntan',
      id: 27800,
    },
  ]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <TouchableOpacity>
            <Image source={images.menuIcon} style={styles.menuIcon} />
          </TouchableOpacity>
          <Text style={styles.heading}>Senarai Calon</Text>

          <View style={styles.searchInput}>
            <TextInput
              style={[styles.input, styles.right]}
              value={searchInput}
              onChangeText={text => {
                setSearchInput(text);
              }}
            />
            <TouchableOpacity styles={styles.paddingRight}>
              <Image
                source={images.filterIcon}
                style={styles.eyeicon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.cardTop}>
            {candidateList?.map((item, index) => {
              return (
                <View style={styles.card} key={index}>
                  <View style={styles.premiumBtn}>
                    <Text style={styles.whiteText}>Premimum</Text>
                  </View>

                  <View style={styles.cardTop}>
                    <View style={[styles.row, styles.marginBottom]}>
                      <Image source={images.calendarIcon} />
                      <Text style={styles.content}>{item.age}</Text>
                    </View>
                    <View style={[styles.row, styles.marginBottom]}>
                      <Image source={images.locationIcon} style={styles.icon} />
                      <Text style={styles.content}>{item.location}</Text>
                    </View>
                    <View style={[styles.row, styles.marginBottom]}>
                      <Image source={images.schoolIcon} style={styles.icon2} />
                      <Text style={styles.content}>{item.education}</Text>
                    </View>
                    <View style={[styles.row, styles.marginBottom]}>
                      <Image source={images.workIcon} style={styles.icon2} />
                      <Text style={styles.content}>{item.job}</Text>
                    </View>
                    <Image source={images.user1} style={styles.userImg}/>

                    <Text style={styles.contentId}>{item.id}</Text>
                  </View>

                  <View style={styles.btnRow}>
                    <TouchableOpacity style={styles.msgBtn}>
                      <Text style={styles.msgText}>Mesej</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profilBtn}>
                      <Text style={styles.profilText}>Profil Calon</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
