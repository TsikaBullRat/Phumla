import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { auth } from './src/Functions';
import { Login, Register, SetProfile, Home, Book } from './src/Screens'
import { BookingCard } from './src/Components';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

export default function App() {

  const [uid, setUID] = useState()

  useEffect(()=>{
      auth.onAuthStateChanged(user=>setUID(user.uid))
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {uid?(
          <>
            <Stack.Screen name="home" options={{ headerShown: false }}>
              {props => <Home {...props} />}
            </Stack.Screen>
            <Stack.Screen name="book" options={{ headerShown: false }}>
              {props => <Book {...props} />}
            </Stack.Screen>
          </>
        ):(
          <>
          <Stack.Screen name="login" options={{ headerShown: false }}>
            {props => <Login {...props} />}
          </Stack.Screen>
          <Stack.Screen name="register" options={{ headerShown: false }}>
            {props => <Register {...props} setData={setNewUser} />}
          </Stack.Screen>
          <Stack.Screen name="setprofile" options={{headerShown: false}}>
            {props=><SetProfile {...props} setData={setNewUser} data={newUser}/>}
          </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
