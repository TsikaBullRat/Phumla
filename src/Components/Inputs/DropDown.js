import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { } from 'react-native-gesture-handler';
import { IconButton } from '..';

export const DropDown = ({ Load }) => {

    const [on, setSwitch] = useState(false),
        [selected, setSelection] = useState(Load[0]),
        Choose = (i) =>{
            setSelection(Load[i]),
            setSwitch(!on)
        }
    
    return (
        <View>
            <View style={on?styles.mainActive:styles.main}>
                <Text>{selected}</Text>
                <IconButton type="drop" color="#fff" Func={() => setSwitch(!on)} />
            </View>
            {on ? (
                Load.map((item, index) => (
                    index !== Load.length - 1 ? (
                        <TouchableOpacity style={styles.load} onPress={()=>Choose(index)} key={index}>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={styles.endLoad} onPress={()=>Choose(index)} key={index}>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    )
                ))
            ) : (
                null
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: 70,
        height: 25,
        backgroundColor: '#A08F8F',
        borderRadius: 25,
        borderColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 3
    },
    mainActive:{
        width: 70,
        height: 25,
        backgroundColor: '#A08F8F',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 3
    },
    load: {
        width: 70,
        height: 25,
        backgroundColor: '#A08F8F',
        borderColor: '#fff',
        paddingLeft: 15,
    },
    endLoad: {
        width: 70,
        height: 25,
        backgroundColor: '#A08F8F',
        borderColor: '#fff',
        paddingLeft: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    }
})