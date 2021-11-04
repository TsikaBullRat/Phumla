import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native'

export const Button = ({Action, text}) =>{
    return(
        <Pressable style={styles.btn} onPress={Action}>
            <Text style={styles.btnText}>{text}</Text>
        </Pressable>
    )
} 

const styles = StyleSheet.create({
    btn:{
        width: 110,
        height: 35,
        borderRadius: 25,
        borderWidth: 1.5,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A08F8F'
    },
    btnText:{
        fontSize: 15,
        color: '#fff'
    }
})