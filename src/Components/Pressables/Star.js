import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

export const Star = ({is, Press}) => {
    return (
        <TouchableOpacity style={styles.holder} onPress={Press}>
            <View style={styles.back}>
                <Fontisto 
                    name="star" 
                    size={18} 
                    color={
                        is.full? "#ffff05" : "#000" 
                    } />
            </View>
            <View style={styles.front}>
                <Fontisto 
                    name="star-half" 
                    size={18} 
                    color={
                        is.half? "#ffff05" : "#000" 
                    } />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    holder:{
        position: 'relative'
    },
    front:{
        position: 'relative',
    },
    back:{
        position: 'absolute',
    }
})