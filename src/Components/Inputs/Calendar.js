import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Block, Head, Days, Grid } from "../";
import { Check, DatesLoader } from "./Calender.functions"

export const Calendar = () => {

    const [grab, Grab] = useState({
        year: null,
        month: null
    })
    
    Check() 
    
    return (
        <View style={styles.box}>
            <Head Grab={Grab}/>
            <Days/>
            <Grid set={DatesLoader(grab)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        borderWidth: 1.5,
        borderRadius: 25,
        borderColor: '#fff',
        width: 300,
        height: 300,
        backgroundColor: '#A08F8F',
        alignItems: 'center',
        justifyContent: 'center'
    },
    block: {
        width: 20,
        height: 20
    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    
})