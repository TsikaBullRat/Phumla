import React from 'react';
import { Pressable, Text, View } from 'react-native';

const largeSwitch = () =>{
    return(
        <Pressable>
            <View>
                <Text>Today</Text>
                <Text>For</Text>
            </View>
        </Pressable>
    )
}

const smallSwitch = () =>{
    return(
        <Pressable>
            <View>
                <Text>Business</Text>
                <Text>Relax</Text>
            </View>
        </Pressable>
    )
}

export const Switch = (size) =>{
    return(
        size === 'large'? <largeSwitch/>:size === 'small'? <smallSwitch/>: null
    )
}