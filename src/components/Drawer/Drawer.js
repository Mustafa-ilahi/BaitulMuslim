import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {colors, fontSize, sizes} from '../../services';
import {images} from '../../services/utilities/images';
import {useNavigation} from '@react-navigation/native';

const Drawer = ({open, close}) => {
  const navigation = useNavigation();

  const arr = [
    {id: 1, name: 'BaitulMuslim', img: images.backIcon},
    {id: 2, name: 'Seneral Calon', img: images.listIcon},
    {id: 3, name: 'Notifikasi', img: images.notificationIcon},
    {id: 4, name: 'Profile Saya', img: images.userLogo},
    {id: 5, name: 'Calon Kegemaran', img: images.heartIcon},
    {id: 6, name: 'Seneral Mesej', img: images.chatIcon},
    {id: 7, name: 'Seneral Pakej', img: images.shoppingIcon},
    {id: 8, name: 'Peringatan', img: images.warningIcon},
    {id: 9, name: 'Hubungi kami', img: images.contactsIcon},
    {id: 10, name: 'Calon Dihalang', img: images.dontDistrubIcon},
    {id: 11, name: 'Settings', img: images.settingsIcon},
    {id: 12, name: 'Log Keluar', img: images.logoutIcon},
  ];

  const closeDrawer = item => {
    close(false);

    console.log('item', item);

    setTimeout(() => {
      if (item.name == 'Seneral Calon') {
        navigation.navigate('CandidatesList');
      } else if (item.name == 'BaitulMuslim') {
        navigation.navigate('CandidatesList');
      } else if (item.name == 'Notifikasi') {
        navigation.navigate('Notification');
      } else if (item.name == 'Profile Saya') {
        navigation.navigate('MyProfile');
      } 
      else if (item.name == 'Log Keluar') {
        navigation.navigate('Registration');
      }
    }, 500);
  };

  return (
    <Modal
      animationIn={'slideInRight'}
      animationOut={'slideOutRight'}
      isVisible={open}
      style={{margin: 0, justifyContent: 'flex-end', alignItems: 'flex-end'}}
      onBackdropPress={() => close(false)}>
      <View
        style={{
          width: sizes.screenWidth * 0.7,
          flex: 1,
          backgroundColor: '#C0EFBA',
        }}>
        <FlatList
          data={arr}
          renderItem={({item}) => {
            return (
              <>
                {item.name === 'BaitulMuslim' ? (
                  <TouchableOpacity
                    onPress={() => closeDrawer(item)}
                    style={{
                      flexDirection: 'row',
                      padding: sizes.screenHeight * 0.015,
                      paddingRight: sizes.screenHeight * 0.03,
                      paddingLeft: sizes.screenHeight * 0.03,
                      justifyContent: 'space-between',
                      backgroundColor: '#E8CD96',
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image
                        source={images.logo2}
                        style={{height: 30, width: 30, resizeMode: 'contain'}}
                      />
                      <Text
                        style={{
                          fontSize: fontSize.h5,
                          color: colors.white,
                          marginLeft: 20,
                          textTransform: 'uppercase',
                        }}>
                        {item.name}
                      </Text>
                      <Image
                        source={images.headerbackIcon}
                        style={{
                          height: 20,
                          width: 20,
                          resizeMode: 'contain',
                          marginLeft: sizes.screenWidth * 0.02,
                          transform: [{rotate: '180deg'}],
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => closeDrawer(item)}
                    style={{
                      flexDirection: 'row',
                      padding: sizes.screenHeight * 0.015,
                      paddingRight: sizes.screenHeight * 0.03,
                      paddingLeft: sizes.screenHeight * 0.03,
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image
                        source={item.img}
                        style={{height: 30, width: 30, resizeMode: 'contain'}}
                      />
                      <Text
                        style={{
                          fontSize: fontSize.h5,
                          color: colors.white,
                          marginLeft: 20,
                        }}>
                        {item.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              </>
            );
          }}
        />
      </View>
    </Modal>
  );
};

export default Drawer;
