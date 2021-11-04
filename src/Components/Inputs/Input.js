import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export const Input = ({Note}) =>{
    return(
        <TextInput style={styles.input} placeholder="Hello" onChangeText={text=>Note(text)}/>
    )
}

const styles = StyleSheet.create({
    input:{
        backgroundColor: '#2B2B2B',
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 25,
        color: '#fff',
        fontSize: 18,
        height: 45,
        width: '90%',
        paddingLeft: 30
    }
})