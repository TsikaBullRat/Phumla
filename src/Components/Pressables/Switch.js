import React, {useState} from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';

const LargeSwitch = () => {

    const [left, setLeft] = useState(true)

    return (
        <Pressable style={styles.large} onPress={()=>setLeft(!left)}>
            <View style={left?styles.blockLarge:styles.offLarge}>
                <Text>Today</Text>
            </View>
            <View style={left?styles.offLarge:styles.blockLarge}>
               <Text>For</Text> 
            </View>
        </Pressable>
    )
}

const SmallSwitch = () => {

    const [left, setLeft] = useState(true)

    return (
        <Pressable style={styles.small} onPress={()=>setLeft(!left)}>
            <View style={left?styles.blockSmall:styles.offSmall}>
                <Text>Business</Text>
            </View>
            <View style={left?styles.offSmall:styles.blockSmall}>
                <Text>Relax</Text>
            </View>
        </Pressable>
    )
}

export const Switch = ({large}) => {

    return (
        large? <LargeSwitch /> : <SmallSwitch />
    )
}

const styles = StyleSheet.create({
    large: {
        width: 250,
        height: 60,
        backgroundColor: '#A08F8F',
        borderRadius: 25,
        flexDirection: 'row',
        borderColor: '#fff',
        borderWidth: 2,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    small: {
        width: 190,
        height: 45,
        backgroundColor: '#2B2B2B',
        borderRadius: 25,
        flexDirection: 'row',
        borderColor: '#fff',
        borderWidth: 2,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    blockSmall:{
        width: 110,
        height: 45,
        backgroundColor: '#fff',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    offSmall:{
        width: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    blockLarge:{
        width: 145,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    offLarge:{
        width: 105,
        alignItems: 'center',
        justifyContent: 'center'
    }
})