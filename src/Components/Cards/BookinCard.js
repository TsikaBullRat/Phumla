import React from 'react';
import { ImageBackground, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Button, Set } from '..';

export const BookingCard = () =>{
    return(
        <View style={styles.box}>
            <ImageBackground style={styles.image}>
                <View style={styles.cornerText}>
                    <Text>Name</Text>
                    <Text>Range</Text>
                </View>
                <View style={styles.tab}>
                    <View style={styles.containerBox}>
                    <View style={styles.right}><Set stars={5}/></View>
                    <View style={styles.left}><Button text="Book"/></View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    cornerText:{
        top: 20,
        left: 15
    },
    box:{
        width: 330,
        height: 220,
        borderRadius: 25,
        borderWidth: 2,
        overflow: 'hidden'
    },
    image:{
        width: '100%',
        height: '100%'
    },
    tab:{
        backgroundColor: '#6F4848',
        position: 'absolute',
        bottom: -80,
        width: '120%',
        height: '80%',
        transform: [{skewX:"-10deg"}]
    },
    containerBox:{
        flexDirection: 'row',
        position: 'relative',
        top: 50,
        left: 10,
        transform: [{skewX:"10deg"}]
    },
    left:{
        position: 'relative',
        left: 100,
        bottom: 10
    },
    right:{
        position: 'relative',
        bottom: 2,
        left: 20
    }
})
