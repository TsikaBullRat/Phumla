import React from 'react';
import { Pressable, View, Image } from 'react-native';
import { AntDesign, Entypo, FontAwesome, FontAwesome5, MaterialIcons, Ionicons  } from '@expo/vector-icons';
import { Hamburger } from '..';
const CompGen = (type, color) =>{
    let icon;
    switch(type){
        case 'location':
            icon = <View style={{transform: [{skewX:"180deg"}]}}><Entypo name="drop" size={24} color={color} /></View>
            break
        case 'drop':
            icon = <MaterialIcons name="arrow-drop-down" size={24} color={color} />
            break
        case 'edit':
            icon = <FontAwesome name="edit" size={24} color={color} />
            break
        case 'search':
            icon = <FontAwesome5 name="search" size={24} color={color} />
            break
        case 'hamburger': 
            icon = (
                <Image style={{width: 22, height:15.8}} source={Hamburger}/>
            )
        case 'forward':
            icon = (
                <Ionicons name="chevron-forward-circle-outline" size={24} color={color} />
            )
            break
        case 'back':
            icon = (
                <Ionicons name="chevron-back-circle-outline" size={35} color={color} />
            )
            break
        default:
            null
            break
    }
    return icon
}

export const IconButton = ({color, type, Func}) =>{
    return(
        <Pressable onPress={Func}>
            {CompGen(type, color)}
        </Pressable>
    )
}