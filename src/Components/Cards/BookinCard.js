import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Button, Set } from '..';

export const BookingCard = ({ hotel, Push }) =>{

    const [ range, setRange ] = useState()
    const findRange = () =>{
        let prices = hotel.rooms.map(item=>item.price)
        prices = prices.sort()
        setRange(`R${prices[0]} - R${prices[prices.length - 1]}`)
    }
    useEffect(()=>{
        findRange()
    },[])

    return(
        <TouchableOpacity style={styles.box}>
            <ImageBackground style={styles.image}>
                <View style={styles.cornerText}>
                    <Text>{hotel.name}</Text>
                    <Text>{range}</Text>
                </View>
                <View style={styles.tab}>
                    <View style={styles.containerBox}>
                    <View style={styles.right}><Set stars={hotel.rating}/></View>
                    <View style={styles.left}><Button text="Book" Action={()=>Push(hotel)}/></View>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
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
        transform: [{rotate:"-10deg"}]
    },
    containerBox:{
        flexDirection: 'row',
        position: 'relative',
        top: 50,
        left: 10,
        transform: [{rotate:"10deg"}]
    },
    left:{
        position: 'relative',
        left: 100,
        bottom: 30,
        transform: [{scale: 0.8}]
    },
    right:{
        position: 'relative',
        bottom: 2,
        left: 20
    }
})
