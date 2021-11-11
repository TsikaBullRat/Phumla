import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { BookingCard } from './src/Components';

export default function App() {

  
  return (
    <View style={styles.container}>
      <BookingCard/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
