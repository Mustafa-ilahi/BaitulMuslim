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

export default function Notification({navigation}) {
  const [notifLength, setNotifLength] = useState('2');
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Image source={images.backIcon} style={styles.headerBack} />
          </TouchableOpacity>
          <Text style={styles.userName}>Notifikasi</Text>
          <TouchableOpacity>
            <Image source={images.notif2} style={styles.notifIcon} />
            <View style={styles.notifBadge}>
              <Text style={{color: colors.white, fontSize: fontSize.small}}>
                {notifLength}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.messagesContainer}>
          <Text style={styles.heading}>Today</Text>

          <TouchableOpacity
            style={styles.greenView}
            onPress={() => navigation.navigate('Chat', {id: '23013'})}>
            <Image source={images.user1} style={styles.profileImage} />
            <Text style={styles.id}>23013</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.brownView} onPress={() => navigation.navigate('Chat', {id: '23013'})}>
            <Image source={images.user1} style={styles.profileImage} />
            <Text style={styles.id}>23013</Text>
          </TouchableOpacity>

          <Text style={styles.heading}>20/03/2023</Text>

          <TouchableOpacity style={styles.whiteView}>
            <Image source={images.logo2} style={styles.profileImage} />
            <Text style={styles.id}>admin</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
