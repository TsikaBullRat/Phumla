import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { auth } from './src/Functions';
import { Auth } from './src/Screens';

export default function App() {

  const [user, setUser] = useState(null)

  useEffect(()=>{
    auth.onAuthStateChanged(user=>setUser(user))
  },[user])

  return (
      <NavigationContainer>
        {
          user?(
            null
          ):(
            <Auth />
          )
        }
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
