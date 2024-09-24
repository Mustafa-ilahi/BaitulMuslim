import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fontSize, sizes} from '../../services';

export default function ConditionLogic({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text
        style={{
          color: colors.greenBg,
          fontSize: fontSize.h5,
          textAlign: 'center',
          bottom: sizes.screenHeight * 0.25,
          fontWeight: '600',
        }}>
        Condition Logic
      </Text>
      <TouchableOpacity
        style={styles.msgBtn}
        onPress={() => navigation.navigate('CandidatesList')}
      >
        <Text style={styles.msgText}>Ahli Biasa</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.greenBtn}
        onPress={() => navigation.navigate('CandidatesList')}
      >
        <Text style={styles.msgText}>Ahli Premium</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  msgBtn: {
    backgroundColor: colors.blue,
    padding: 18,
    borderRadius: sizes.screenWidth * 0.03,
    marginVertical: 5,
    alignItems: 'center',
    width: sizes.screenWidth * 0.8,
    alignSelf: 'center',
  },
  greenBtn: {
    backgroundColor: colors.greenBg,
    padding: 18,
    borderRadius: sizes.screenWidth * 0.03,
    marginVertical: 5,
    alignItems: 'center',
    width: sizes.screenWidth * 0.8,
    alignSelf: 'center',
  },
  msgText: {
    color: '#fff',
    fontSize: 18,
  },
});
