import React, {useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native'
import { Fontisto } from '@expo/vector-icons';

const Create = (num) =>{
    let array = new Array(num);
    for(var i = 0; i < num; i++){
        array[i] = <View style={styles.space} key={i}><Fontisto name="star" size={12} color="#ffff05" /></View>
    }

    return array
}

export const Set = ({stars}) =>{

    const [set, setSet] = useState(Create(stars))

    return(
        <View style={styles.holster}>
            {set}
        </View>
    )
}

const styles = StyleSheet.create({
    holster:{
        flexDirection: 'row'
    },
    space:{
        marginLeft: 2.5,
        marginRight: 2.5
    }
})