import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {images} from '../../services/utilities/images';
import {sizes} from '../../services';
import {useNavigation} from '@react-navigation/native';

export default function BackButton() {
const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={images.backIcon} style={styles.backIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: sizes.screenHeight * 0.1,
    // alignSelf: 'flex-start',
  },
  backIcon: {
    height: sizes.screenHeight * 0.051,
    width: sizes.screenHeight * 0.051,
  },
});
