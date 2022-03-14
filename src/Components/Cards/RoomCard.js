import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const RoomCard = () =>{
    return(
        <TouchableOpacity style={styles.box}>
            <ImageBackground style={styles.image}>
                <View style={styles.tab}>
                    <View style={styles.textBox}>
                    <Text >Name</Text>
                    <Text >Price</Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box:{
        width: 170,
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
        backgroundColor: '#A08F8F',
        position: 'absolute',
        top: -80,
        left: -47,
        width: '120%',
        height: '80%',
        transform: [{skewX:"-10deg"}]
    },
    textBox:{
        position: 'relative',
        top: '85%',
        left: '15%',
        transform: [{skewX:"10deg"}]
    }
})