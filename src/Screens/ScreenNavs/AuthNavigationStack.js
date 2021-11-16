import React, {useState} from 'react';
import {Login, Register, SetProfile} from '../'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export const Auth = () =>{

    const [newUser, setNewUser] = useState()
    return(
        <Stack.Navigator initialRouteName="login">
            <Stack.Screen name="login" options={{headerShown: false}}>
                {props=><Login {...props} />}
            </Stack.Screen>
            <Stack.Screen name="register" options={{headerShown: false}}>
                {props=><Register {...props} setData={setNewUser}/>}
            </Stack.Screen>
            <Stack.Screen name="setprofile" options={{headerShown: false}}>
                {props=><SetProfile {...props} setData={setNewUser} data={newUser}/>}
            </Stack.Screen>
        </Stack.Navigator>
    )   
}