import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Input, LoginBack } from '../Components';
import Logo from '../Components/SVG/Logo.svg'

export const Login = () =>{
    return(
        <LoginBack>
            <View style={styles.head}>
                <Image source={Logo} style={styles.logo}/>
                <Text style={styles.brand}>humla</Text>
            </View>
            <View style={styles.head}>
                <Text style={styles.subHeading}>
                    Welcome find a place to redt your head
                </Text>
            </View>
        </LoginBack>
    )
}

const styles = StyleSheet.create({
    head:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo:{
        width: 35,
        height: 60
    },
    brand:{
        fontSize: 45,
        color: '#fff',
        fontFamily: "Italiana-Regular",
        fontWeight: 2
    },
    subHeading:{
        fontSize: 25,
        color: '#fff',
        fontFamily: "Italiana-Regular",
        fontWeight: 1
    }
})