import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export const Input = ({proxy, Note}) =>{
    return(
        <TextInput style={styles.input} placeholder={proxy} onChangeText={text=>Note(text)}/>
    )
}

const styles = StyleSheet.create({
    input:{
        backgroundColor: '#2B2B2B',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 25,
        color: '#fff',
        fontSize: 18,
        height: 45,
        width: '80%',
        paddingLeft: 30
    }
})