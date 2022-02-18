import React, {useState, useEffect} from 'react';
import {Login, Register, SetProfile, Home} from '..'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { auth } from '../../Functions'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const Auth = () =>{

    const [newUser, setNewUser] = useState()
    return(
        <Stack.Navigator initialRouteName="login">
            <Stack.Screen name="login" options={{headerShown: false}}>
                {props=><Login {...props} />}
            </Stack.Screen>
            <Stack.Screen name="register" options={{headerShown: false}}>
                {props=><Register {...props} setData={setNewUser}/>}
            </Stack.Screen>
            {/* <Stack.Screen name="setprofile" options={{headerShown: false}}>
                {props=><SetProfile {...props} setData={setNewUser} data={newUser}/>}
            </Stack.Screen> */}
        </Stack.Navigator>
    )   
}

const Main = () =>{
    return(
        <Drawer.Navigator initialRouteName="home">
            <Drawer.Screen name="home" component={Home} options={{headerShown: false}}/>
            <Drawer.Screen name="booking page" component={Home} options={{headerShown: false}}/>
        </Drawer.Navigator>
    )
}

const Run = () =>{

    const [profile, setProfile] = useState(null)
    useEffect(()=>{
        auth.onAuthStateChanged(profile=>{
            setProfile(profile)
        })
    }, [])
    return(
        profile?(
            <Main/>
        ):(
            <Auth/>
        )
    )
}

export {Auth, Main, Run}