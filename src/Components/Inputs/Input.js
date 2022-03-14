import React, {useEffect, useState} from 'react';
import { StyleSheet, TextInput } from 'react-native';

export const Input = ({proxy, Note, margin, privacy}) =>{

    let styles = GenStyles(margin) 

    return(
        <TextInput style={styles.input} placeholder={proxy} onChangeText={text=>Note(text)} secureTextEntry={privacy}/>
    )
}

const GenStyles = (margin) =>{
    const styles = StyleSheet.create({
        input:{
            backgroundColor: '#2B2B2B',
            borderColor: '#fff',
            borderWidth: 1,
            borderRadius: 25,
            color: '#fff',
            fontSize: 25,
            height: 55,
            width: '80%',
            paddingLeft: 30,
            marginBottom: margin,
            marginTop: margin
        }
    })

    return styles
}