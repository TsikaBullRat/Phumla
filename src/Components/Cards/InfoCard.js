import React from 'react';
import { ImageBackground, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Set } from '..';

export const InfoCard = () =>{
    return(
        <TouchableOpacity style={styles.box}>
            <ImageBackground style={styles.image}>
                <View style={styles.tab}>
                    <View style={styles.textBox}>
                    <Text >Name</Text>
                    <Text >Range</Text>
                    <Set stars={5}/>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box:{
        width: 240,
        height: 170,
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
        bottom: -70,
        width: '120%',
        height: '80%',
        transform: [{skewX:"-10deg"}]
    },
    textBox:{
        position: 'relative',
        top: '25%',
        left: '50%',
        transform: [{skewX:"10deg"}]
    }
})
