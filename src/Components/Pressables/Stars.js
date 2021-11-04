import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Star } from './Star'

const Control = (ref) => {
    let set;
    switch (ref) {
        case 1:
            set=[
                {
                    half: true,
                    full: true
                },
                {
                    half: false,
                    full: false
                },
                {
                    half: false,
                    full: false
                },
                {
                    half: false,
                    full: false
                },
                {
                    half: false,
                    full: false
                }
            ]
            break
        case 2:
            set=[
                {
                    half: true,
                    full: true
                },
                {
                    half: true,
                    full: true
                },
                {
                    half: false,
                    full: false
                },
                {
                    half: false,
                    full: false
                },
                {
                    half: false,
                    full: false
                }
            ]
            break
        case 3:
            set=[
                {
                    half: true,
                    full: true
                },
                {
                    half: true,
                    full: true
                },
                {
                    half: true,
                    full: true
                },
                {
                    half: false,
                    full: false
                },
                {
                    half: false,
                    full: false
                }
            ]
            break
        case 4:
            set=[
                {
                    half: true,
                    full: true
                },
                {
                    half: true,
                    full: true
                },
                {
                    half: true,
                    full: true
                },
                {
                    half: true,
                    full: true
                },
                {
                    half: false,
                    full: false
                }
            ]
            break
        case 5:
            set=[
                {
                    half: true,
                    full: true
                },
                {
                    half: true,
                    full: true
                },
                {
                    half: true,
                    full: true
                },
                {
                    half: true,
                    full: true
                },
                {
                    half: true,
                    full: true
                }
            ]
            break
        default: 
        set=[
            {
                half: false,
                full: false
            },
            {
                half: false,
                full: false
            },
            {
                half: false,
                full: false
            },
            {
                half: false,
                full: false
            },
            {
                half: false,
                full: false
            }
        ]
    }

    return set
}

export const Stars = ({Grab}) => {

    const [color, setColor] = useState([
        {
            half: true,
            full: true
        },
        {
            half: true,
            full: true
        },
        {
            half: true,
            full: false
        },
        {
            half: false,
            full: false
        },
        {
            half: false,
            full: false
        }
    ])


const SetValue = (num) =>{
    setColor(Control(num))
    Grab(num)
}


    return (
        <View style={styles.slab}>
            <View style={styles.cell1}><Star is={color[0]} Press={()=>SetValue(1)}/></View>
            <View style={styles.cell2}><Star is={color[1]} Press={()=>SetValue(2)} /></View>
            <View style={styles.cell3}><Star is={color[2]} Press={()=>SetValue(3)} /></View>
            <View style={styles.cell4}><Star is={color[3]} Press={()=>SetValue(4)} /></View>
            <View style={styles.cell5}><Star is={color[4]} Press={()=>SetValue(5)} /></View>
        </View>
    )
}

const styles = StyleSheet.create({
    slab: {
        // flex: 1,
        borderWidth: 2,
        borderRadius: 25,
        height: 35,
        width: 150.89,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cell1: {
        position: 'relative',
        left: -20
    },
    cell2: {
        position: 'relative',
        left: -10
    },
    cell3: {
        position: 'relative'
    },
    cell4: {
        position: 'relative',
        left: 10
    },
    cell5: {
        position: 'relative',
        left: 20
    },
})

{/* <Fontisto name="star-half" size={24} color="black" />
<Fontisto name="star" size={24} color="black" /> */}