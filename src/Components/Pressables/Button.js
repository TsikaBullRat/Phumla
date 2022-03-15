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
        width: 140,
        height: 50,
        borderRadius: 25,
        borderWidth: 1.5,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A08F8F',
        marginTop: 10,
        marginBottom: 10 
    },
    btnText:{
        fontSize: 25,
        color: '#fff'
    }
})