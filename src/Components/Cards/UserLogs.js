import React, {useState} from 'react'
import {Modal, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import { Button } from '..'

export const UserLogs = ({msg, visiblity, setVisiblity}) =>{

    return(
        <Modal
            animationType="fade"
            transparent={true}
            visible={visiblity}
            onRequestClose={() => {
                setVisiblity(!visiblity);
            }}>
            <Pressable style={styles.backdrop} onPress={() => setVisiblity(false)} />
            <View style={styles.modal}>
                <View style={styles.alertBox}>
                    <Text style={styles.text}>{msg}</Text>
                    <Button text="OK" Action={null}/>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        ...Platform.select({
            ios: {
                backgroundColor: "#000000",
                opacity: 0.3
            },
            android: {
                backgroundColor: "#232f34",
                opacity: 0.32
            },
            web: {
                backgroundColor: '#000',
                opacity: 0.3
            },
            default: {
                backgroundColor: '#000',
                opacity: 0.3
            }
        })
    },
    alertBox: {
        backgroundColor: '#6F4848',
        width: '80%',
        height: 250,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        color: '#fff'
    },
})