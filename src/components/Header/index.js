import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {images} from '../../services/utilities/images';
import {colors, sizes} from '../../services';
import {useNavigation} from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity  onPress={() => navigation.goBack()}>
        <Image source={images.headerbackIcon} style={styles.backIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor:colors.white,
    padding:sizes.screenHeight*0.02
  },
  backIcon: {
    height: 20,
    width: 15,
    resizeMode:'contain',
    tintColor:colors.grayText
  },
});
