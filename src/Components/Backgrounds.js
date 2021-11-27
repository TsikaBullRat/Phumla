import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import Picture from '../../assets/images/LogIn.jpg'

const LoginBack = ({children}) =>{
    return(
        <ImageBackground source={Picture} style={styles.background}>
            <View style={styles.layer}>
                
            </View>
            <View style={styles.triangle1}></View>
            <View style={styles.content}>
                {children}
            </View>
        </ImageBackground>
    )
}

const RegisterBack = ({children}) =>{
    return(
        <ImageBackground source={Picture} style={styles.background}>
            <View style={styles.layer}>
            </View>
            <View style={styles.triangle2}></View>
            <View style={styles.content}>
                {children}
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background:{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden'
    },
    layer:{
        backgroundColor: '#A08F8F',
        opacity: 0.4,
        width: '100vw',
        height: '100vh'
    },
    triangle1:{
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderBottomWidth: 250,
        borderTopWidth: 200,
        borderLeftWidth: 450,
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        borderLeftColor: '#6F4848',
        transform: 'rotate(-5deg)',
        left: -20,
        top: '-110vh'
        // opacity: 2
    },
    triangle2:{
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderLeftWidth: 300,
        borderRightWidth: 350,
        borderBottomWidth: 450,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#6F4848',
        transform: 'rotate(8deg)',
        left: -80,
        top: '-130vh'
    },
    content:{
        // backgroundColor: '#000',
        width: '100vw',
        height: '100vh',
        top: '-170vh',
        alignItems: 'center'
    }
})
export {LoginBack, RegisterBack}