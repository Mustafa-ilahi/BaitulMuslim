import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from './src/services'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.white,
    flex:1
  }
})