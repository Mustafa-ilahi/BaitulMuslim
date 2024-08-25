import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from './src/services';
import Registration from './src/screens/Registration';
import Login from './src/screens/Login';
import NewPassword from './src/screens/NewPassword';
import Picture from './src/screens/Picture';

export default function App() {
  return (
    // <Registration />
    // <Login />
    // <NewPassword />
    <Picture />
  );
}

const styles = StyleSheet.create({
  // container:{
  //   backgroundColor:colors.white,
  //   flex:1
  // }
});
