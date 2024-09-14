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

export default function MessageList({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Image source={images.backIcon} style={styles.headerBack} />
          </TouchableOpacity>
          <Text style={styles.userName}>Senerai Mesej</Text>
          <View style={styles.notifIcon}></View>
        </View>

        <ScrollView style={styles.messagesContainer}>
          <TouchableOpacity
            style={styles.greenView}
            onPress={() => navigation.navigate('Chat', {id: '2210'})}>
            <Image source={images.user1} style={styles.profileImage} />
            <View style={{flex: 1}}>
              <Text style={styles.id}>2210</Text>
              <Text style={styles.messageText}>Hi, busy ke?</Text>
            </View>

            <View style={styles.notifBadge}>
              <Text style={{color: '#E8CD96', fontSize: fontSize.small}}>
                1
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.greenView}
            onPress={() => navigation.navigate('Chat', {id: '2490'})}>
            <Image source={images.user1} style={styles.profileImage} />
            <View style={{flex: 1}}>
              <Text style={styles.id}>2490</Text>
              <Text style={styles.messageText}>Hi, busy ke?</Text>
            </View>

            <View style={styles.notifBadge}>
              <Text style={{color: '#E8CD96', fontSize: fontSize.small}}>
                2
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
