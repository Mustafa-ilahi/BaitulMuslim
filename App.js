import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from './src/services';
import Registration from './src/screens/Registration';

export default function App() {
  return(

    <Registration />
  )
}

const styles = StyleSheet.create({
  // container:{
  //   backgroundColor:colors.white,
  //   flex:1
  // }
});
